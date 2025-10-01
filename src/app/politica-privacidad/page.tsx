import type { Metadata } from 'next';
import { privacyPolicyPage } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad del portfolio de Iván Vega Hernández.',
  robots: 'noindex, nofollow', // Good practice for privacy pages
};

export default function PrivacyPolicyPage() {
  const { title, summary, lastUpdated } = privacyPolicyPage;
  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl prose dark:prose-invert">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">{title}</h1>
        <p className="text-sm text-muted-foreground">Última actualización: {lastUpdated}</p>
        <p className="lead">{summary}</p>
        <h2>1. Responsable del tratamiento</h2>
        <p>Iván Vega Hernández. Contacto: a través del formulario en este sitio web.</p>
        <h2>2. Finalidad</h2>
        <p>Los datos personales que nos facilites a través del formulario de contacto serán tratados con la única finalidad de gestionar tu consulta, ponernos en contacto contigo y facilitarte la información que nos hayas solicitado.</p>
        <h2>3. Legitimación</h2>
        <p>La base legal para el tratamiento de tus datos es tu consentimiento explícito, que otorgas al marcar la casilla de aceptación de la política de privacidad antes de enviar el formulario.</p>
        <h2>4. Conservación de los datos</h2>
        <p>Los datos se conservarán durante el tiempo estrictamente necesario para responder a tu consulta y, posteriormente, serán eliminados de forma segura.</p>
        <h2>5. Cesión de datos</h2>
        <p>Tus datos no serán cedidos a terceros en ningún caso, salvo por obligación legal.</p>
        <h2>6. Derechos</h2>
        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición, así como otros derechos, contactando a través del formulario de este sitio web. Tienes derecho a retirar el consentimiento en cualquier momento.</p>
      </div>
    </div>
  );
}
