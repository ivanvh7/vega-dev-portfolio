"use client";

import { useFormState } from "react-dom";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { submitAndAnalyzeAction } from "@/app/actions";
import type { Submission } from "@/lib/types";
import { contactPage } from "@/lib/data";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Github, Info, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Email inválido"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "El mensaje es demasiado corto"),
  consent: z.boolean().refine(val => val === true, "Debes aceptar la política de privacidad."),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [state, formAction] = useFormState(submitAndAnalyzeAction.bind(null, submissions), {
    success: false,
    message: "",
  });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.success) {
      const {name, email, company, budget, message} = (formRef.current ? new FormData(formRef.current) : new FormData()) as any as Record<string, any>;
      const newSubmissionData = {
        name: name.get('name'),
        email: email.get('email'),
        company: company.get('company'),
        budget: budget.get('budget'),
        message: message.get('message'),
      } as Submission;
      
      const newSubmission = {
        name: newSubmissionData.name,
        email: newSubmissionData.email,
        company: newSubmissionData.company,
        budget: newSubmissionData.budget,
        message: newSubmissionData.message,
      };

      setSubmissions(prev => [...prev, newSubmission]);
      reset();
    }
  }, [state, reset]);

  return (
    <div className="mt-12 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="p-2">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
                <form ref={formRef} action={formAction} className="space-y-4">
                    <div>
                        <Label htmlFor="name">{contactPage.form.name}</Label>
                        <Input id="name" {...register("name")} />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="email">{contactPage.form.email}</Label>
                        <Input id="email" type="email" {...register("email")} />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <Label htmlFor="company">{contactPage.form.company}</Label>
                        <Input id="company" {...register("company")} />
                    </div>
                    <div>
                        <Label htmlFor="budget">{contactPage.form.budget}</Label>
                        <Input id="budget" {...register("budget")} />
                    </div>
                    <div>
                        <Label htmlFor="message">{contactPage.form.message}</Label>
                        <Textarea id="message" {...register("message")} />
                        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="consent" {...register("consent")} />
                        <Label htmlFor="consent" className="text-sm font-normal text-muted-foreground">
                            {contactPage.form.consent} <Link href="/politica-privacidad" className="underline hover:text-primary">Leer política</Link>.
                        </Label>
                    </div>
                    {errors.consent && <p className="text-sm text-destructive">{errors.consent.message}</p>}
                    
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        {contactPage.form.submit}
                    </Button>
                </form>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                    <p>{contactPage.fallback.replace('@ivanvh7', '')} 
                        <a href={`https://github.com/${contactPage.fallback.split('@')[1]}`} target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-primary">
                            @{contactPage.fallback.split('@')[1]}
                        </a>.
                    </p>
                    <p className="mt-1">{contactPage.microcopy}</p>
                </div>
            </CardContent>
        </Card>

        <div>
          {state.success && state.analysis && (
              <Alert variant="default" className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800">
                <CheckCircle className="h-4 w-4 !text-emerald-500" />
                <AlertTitle>¡Mensaje enviado!</AlertTitle>
                <AlertDescription className="!text-emerald-700 dark:!text-emerald-300">
                  Tu mensaje ha sido recibido. El análisis de IA se ha actualizado.
                </AlertDescription>
              </Alert>
          )}

          <Card className="mt-4 bg-background">
            <CardHeader>
              <div className="flex items-center gap-2">
                <contactPage.aiAnalysis.icon className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-2xl">{contactPage.aiAnalysis.title}</CardTitle>
              </div>
              <CardDescription>{contactPage.aiAnalysis.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {state.analysis ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{contactPage.aiAnalysis.themes}</h4>
                    <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                      {state.analysis.themes?.map((theme: string, i: number) => <li key={i}>{theme}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">{contactPage.aiAnalysis.sentiment}</h4>
                    <p className="mt-1 text-muted-foreground">{state.analysis.sentimentAnalysis}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">{contactPage.aiAnalysis.improvements}</h4>
                    <ul className="list-disc pl-5 mt-1 text-muted-foreground">
                      {state.analysis.improvementAreas?.map((area: string, i: number) => <li key={i}>{area}</li>)}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg">
                  <Info className="h-8 w-8 mb-2"/>
                  <p>Los resultados del análisis de IA aparecerán aquí después de enviar un mensaje.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
