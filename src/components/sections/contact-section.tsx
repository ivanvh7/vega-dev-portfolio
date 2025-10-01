"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { contactPage } from "@/lib/data";
import Link from 'next/link';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, Github, Info, Loader2, Mail } from "lucide-react";

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const consent = watch("consent");

  const onSubmit = async (data: ContactFormData) => {
    // Para exportación estática, solo mostramos un mensaje de éxito
    // En un entorno real, aquí enviarías los datos a tu API
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula una llamada a API
    
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="mt-12 mx-auto max-w-2xl text-center">
        <Alert variant="default" className="bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800">
          <CheckCircle className="h-4 w-4 !text-emerald-500" />
          <AlertTitle>¡Mensaje enviado!</AlertTitle>
          <AlertDescription className="!text-emerald-700 dark:!text-emerald-300">
            Tu mensaje ha sido recibido. Te contactaré pronto.
          </AlertDescription>
        </Alert>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline" 
          className="mt-4"
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-12 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="p-2">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Formulario de Contacto</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <p>O contáctame directamente en{' '}
                        <a href={`https://github.com/ivanvh7`} target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-primary">
                            @ivanvh7
                        </a>.
                    </p>
                    <p className="mt-1">Respondo en menos de 24 horas.</p>
                </div>
            </CardContent>
        </Card>

        <div>
          <Card className="bg-background">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle className="font-headline text-2xl">Información de Contacto</CardTitle>
              </div>
              <CardDescription>Formas alternativas de ponerte en contacto conmigo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="mt-1 text-muted-foreground">
                    <a href="https://github.com/ivanvh7" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                      github.com/ivanvh7
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Tiempo de respuesta</h4>
                  <p className="mt-1 text-muted-foreground">Menos de 24 horas en días laborables</p>
                </div>
                <div>
                  <h4 className="font-semibold">Idiomas</h4>
                  <p className="mt-1 text-muted-foreground">Español e Inglés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Alert className="mt-4">
            <Info className="h-4 w-4" />
            <AlertTitle>Sitio en modo estático</AlertTitle>
            <AlertDescription>
              Este formulario está configurado para despliegue estático. En un entorno de producción, 
              se integraría con un servicio de backend para procesar los mensajes.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
