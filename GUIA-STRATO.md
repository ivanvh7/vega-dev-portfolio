# 📋 Guía para Subir tu Portfolio a Strato

## ✅ Configuración Completada

Tu proyecto Next.js ya está configurado para exportación estática. Los cambios realizados:

1. **next.config.ts** - Configurado para exportación estática
2. **Formulario de contacto** - Adaptado para funcionar sin servidor
3. **Build generado** - Carpeta `out/` creada con archivos estáticos

## 🚀 Pasos para Subir a Strato

### 1. Acceder a tu Panel de Strato
- Ve a tu cuenta de Strato
- Accede al panel de control de hosting
- Busca "Administración de archivos" o "File Manager"

### 2. Preparar los Archivos
Los archivos listos para subir están en la carpeta `out/`:
```
out/
├── index.html
├── contacto/
├── proyectos/
├── servicios/
├── sobre-mi/
├── politica-privacidad/
├── _next/
└── ...otros archivos
```

### 3. Subir los Archivos

#### Opción A: File Manager Web (Más Fácil)
1. Ve al File Manager de Strato
2. Navega a tu directorio web (generalmente `html/` o `public_html/`)
3. **SUBE TODO EL CONTENIDO** de la carpeta `out/` (no la carpeta, sino su contenido)
4. Asegúrate de que `index.html` esté en la raíz

#### Opción B: FTP
1. Usa los datos FTP de Strato:
   - **Host**: tu-dominio.com (o IP proporcionada)
   - **Usuario**: tu usuario FTP
   - **Contraseña**: tu contraseña FTP
   - **Puerto**: 21 (o el proporcionado)

2. Conecta con FileZilla u otro cliente FTP
3. Sube todo el contenido de `out/` al directorio web

### 4. Verificar el Despliegue
- Ve a tu dominio en el navegador
- Verifica que todas las páginas funcionan:
  - `/` - Página principal
  - `/proyectos` - Página de proyectos
  - `/sobre-mi` - Página sobre ti
  - `/servicios` - Página de servicios
  - `/contacto` - Página de contacto

## 🔧 Configuración del Dominio

### Si usas un subdominio o subdirectorio:
Si planeas usar algo como `tudominio.com/portfolio/`, necesitas:

1. Modificar `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // Cambia por tu path
  trailingSlash: true,
  // ... resto de la configuración
};
```

2. Volver a generar el build:
```bash
npm run build:static
```

## 📝 Estructura de Archivos en Strato

Tu directorio web debería verse así:
```
html/ (o public_html/)
├── index.html
├── favicon.ico
├── contacto/
│   └── index.html
├── proyectos/
│   └── index.html
├── servicios/
│   └── index.html
├── sobre-mi/
│   └── index.html
├── politica-privacidad/
│   └── index.html
└── _next/
    ├── static/
    └── ...
```

## ⚠️ Limitaciones del Despliegue Estático

- ❌ **No funciona**: El análisis AI del formulario de contacto
- ❌ **No funciona**: Server Actions de Next.js
- ✅ **Sí funciona**: Todo el contenido estático, navegación, diseño responsive
- ✅ **Sí funciona**: Formulario de contacto (solo frontend)

## 🚨 Solución de Problemas

### Problema: Las imágenes no cargan
- Verifica que la carpeta `_next/` se haya subido completamente
- Asegúrate de que los permisos del servidor permitan acceso a los archivos

### Problema: Las rutas no funcionan
- Verifica que cada carpeta tenga su archivo `index.html`
- Configura redirects en el panel de Strato si es necesario

### Problema: Estilos no se aplican
- Asegúrate de que `_next/static/` se haya subido con todos los archivos CSS

## 🔄 Para Futuras Actualizaciones

Cuando hagas cambios:
1. Ejecuta: `npm run build:static`
2. Sube el nuevo contenido de `out/` a Strato
3. Reemplaza los archivos existentes

## 🎯 Alternativa Recomendada: Vercel

Si tienes problemas con Strato, considera **Vercel** (gratuito):
```bash
npm i -g vercel
vercel
```

Vercel está optimizado para Next.js y ofrece:
- ✅ Despliegue automático desde GitHub
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Soporte completo para funciones

---

¡Tu portfolio está listo para Strato! 🎉