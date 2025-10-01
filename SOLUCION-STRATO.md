# 🚨 Solución para Error "Decompressed greater than 500MB"

## El Problema
Strato tiene un límite de 500MB para archivos descomprimidos. La carpeta `_next` de Next.js es muy pesada.

## ✅ Solución: Subida por Partes

### **Paso 1: Archivos Principales (Subir PRIMERO)**
Estos son los archivos esenciales que debes subir primero:

```
📁 Directorio raíz de tu sitio web:
├── index.html (OBLIGATORIO - página principal)
├── favicon.ico
├── 404.html

📁 Carpetas de páginas:
├── contacto/index.html
├── proyectos/index.html  
├── servicios/index.html
├── sobre-mi/index.html
└── politica-privacidad/index.html
```

### **Paso 2: Archivos de Imágenes**
```
📁 images/
└── 73824E49-1107-4E8D-BD76-7A6C0A492A05.JPG
```

### **Paso 3: Archivos de Next.js (Los más pesados)**
La carpeta `_next` contiene los estilos y JavaScript. Súbela al final:

1. **Crear la carpeta `_next` en Strato**
2. **Subir `_next/static/` por partes:**
   - `_next/static/css/` (archivos CSS)
   - `_next/static/chunks/` (archivos JavaScript)
   - Otros archivos en `_next/static/`

## 🎯 **Estrategia Alternativa: Hosting Gratuito**

Dado que Strato tiene estas limitaciones, te recomiendo **Vercel** (100% gratuito):

### **Opción A: Vercel (Recomendado)**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar
vercel

# Seguir las instrucciones
```

**Ventajas de Vercel:**
- ✅ **Gratuito** para proyectos personales
- ✅ **Sin límites** de tamaño razonables
- ✅ **HTTPS automático**
- ✅ **CDN global**
- ✅ **Despliegue desde GitHub automático**
- ✅ **Dominio gratis** (.vercel.app)

### **Opción B: Netlify (También gratuito)**
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `out` completa
3. ¡Listo!

### **Opción C: GitHub Pages**
1. Sube tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona la carpeta `out` como fuente

## 📋 **Si insistes en Strato - Lista de Prioridades**

### **Prioridad 1 (CRÍTICO):**
- `index.html` (página principal)
- `contacto/index.html`
- `proyectos/index.html`
- `servicios/index.html`
- `sobre-mi/index.html`

### **Prioridad 2 (IMPORTANTE):**
- `_next/static/css/` (estilos - sin esto se ve feo)
- `favicon.ico`

### **Prioridad 3 (OPCIONAL):**
- `_next/static/chunks/` (JavaScript - funcionalidad)
- Resto de archivos

## 🔍 **Verificar el Tamaño**

Para ver qué archivos son más pesados, ve a la carpeta `out` y ordena por tamaño:
1. Ve a `C:\Users\ivegher\Clon-Firebase\vega-dev-portfolio\out`
2. Clic derecho → Ver → Detalles
3. Ordena por "Tamaño" para ver los archivos más pesados

## 💡 **Mi Recomendación**

**Usa Vercel** - Es mucho más fácil, rápido y gratuito. En 2 minutos tendrás tu sitio online sin limitaciones.

¿Quieres que te ayude a configurar Vercel en su lugar?