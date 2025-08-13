# 🦷 OneDental - Instrucciones de Deployment CORREGIDAS

## ✅ YA TIENES TODO LISTO

**Tu proyecto Supabase ya está configurado:**
- URL: `https://blckweozswboboyyechu.supabase.co`
- Ya tienes las credenciales necesarias
- Base de datos ya configurada

**Solo necesitas desplegar el website.**

---

## 🚀 DEPLOYMENT SÚPER SIMPLE (2 pasos)

### PASO 1: Preparar los archivos (1 minuto)

1. **Descarga la carpeta** `onedental-final` completa a tu computadora
2. **Crea un archivo** llamado `.env` en la carpeta principal
3. **Copia y pega esto** dentro del archivo `.env`:

```
VITE_SUPABASE_URL=https://blckweozswboboyyechu.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsY2t3ZW96c3dib2JveXllY2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNzQ1NTYsImV4cCI6MjA3MDY1MDU1Nn0.ZsS3fRz1FBDSsx2De3Ub_TqasRtRTMenetS8QQNkas0
```

### PASO 2: Subir a Vercel (2 minutos)

1. **Ve a** [vercel.com](https://vercel.com)
2. **Crea cuenta** (con GitHub, Google, o email)
3. **Click "New Project"**
4. **Arrastra y suelta** tu carpeta `onedental-final`
5. **Antes de hacer deploy**, en "Environment Variables" agrega:
   - `VITE_SUPABASE_URL` = `https://blckweozswboboyyechu.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsY2t3ZW96c3dib2JveXllY2h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNzQ1NTYsImV4cCI6MjA3MDY1MDU1Nn0.ZsS3fRz1FBDSsx2De3Ub_TqasRtRTMenetS8QQNkas0`
6. **Click "Deploy"**
7. **¡LISTO!** Tu website estará en una URL como `https://onedental-xyz.vercel.app`

---

## 🔑 ACCESO ADMIN

Para acceder al panel de administración:

1. **Ve a tu website** `/admin`
2. **Email:** `admin@onedental.es`
3. **Contraseña:** La que configuraste en Supabase

**Si no tienes contraseña admin:**
1. Ve a [app.supabase.com](https://app.supabase.com)
2. Abre tu proyecto `blckweozswboboyyechu`
3. Click "Authentication" → "Users"
4. Click "Add user"
5. Email: `admin@onedental.es`
6. Contraseña: [elige una fuerte]
7. Click "Add user"

---

## ✅ TESTING

Una vez desplegado, verifica:
- ✅ Homepage carga correctamente
- ✅ Navegación funciona
- ✅ Formularios funcionan
- ✅ Sistema de citas funciona
- ✅ Admin panel funciona (`/admin`)

---

## 🆘 AYUDA

**Si algo no funciona:**
- Verifica que las variables de entorno estén correctas
- Comprueba que subiste todos los archivos
- Revisa los logs en Vercel dashboard

**¡Eso es todo!** No necesitas crear nada nuevo en Supabase - ya está todo configurado.