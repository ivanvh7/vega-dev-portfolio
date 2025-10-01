"use server";

import { z } from 'zod';
import { analyzeContactFormSubmissions, type AnalyzeContactFormSubmissionsOutput } from '@/ai/flows/analyze-contact-form-submissions';
import type { Submission } from '@/lib/types';

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  email: z.string().email("Por favor, introduce un email válido."),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type ContactFormState = {
  success: boolean;
  message: string;
  analysis?: AnalyzeContactFormSubmissionsOutput;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitAndAnalyzeAction(
  currentSubmissions: Submission[],
  prevState: ContactFormState, 
  formData: FormData
): Promise<ContactFormState> {
  const newSubmission = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string,
    budget: formData.get('budget') as string,
    message: formData.get('message') as string,
  };

  const validatedFields = contactFormSchema.safeParse(newSubmission);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Por favor, corrige los errores en el formulario.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const allSubmissions = [...currentSubmissions, validatedFields.data];

  try {
    const analysis = await analyzeContactFormSubmissions({ submissions: allSubmissions });
    return { 
      success: true, 
      message: "¡Mensaje enviado con éxito!",
      analysis: analysis,
    };
  } catch (e) {
    console.error("Error analyzing submissions:", e);
    return { 
      success: false, 
      message: "Error al analizar las consultas. El mensaje fue enviado, pero el análisis falló." 
    };
  }
}
