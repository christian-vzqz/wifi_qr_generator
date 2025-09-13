# 📱 Generador de QR WiFi

Una aplicación web moderna y simple para generar códigos QR que permiten conectarse automáticamente a redes WiFi.

## ✨ Características

- 🔒 **Completamente privado**: Todo el procesamiento se realiza localmente en tu navegador
- 📱 **Responsive**: Funciona perfectamente en cualquier dispositivo
- 🎨 **UI moderna**: Interfaz elegante con Tailwind CSS
- ⚡ **Rápido**: Generación instantánea de códigos QR
- 📥 **Descarga fácil**: Guarda el código QR como imagen PNG
- 📋 **Copia al portapapeles**: Copia la imagen directamente
- 🔧 **Flexible**: Soporta diferentes tipos de seguridad WiFi

## 🚀 Tecnologías utilizadas

- **Vite**: Build tool rápido y moderno
- **React 19**: Framework de UI
- **Tailwind CSS**: Framework de CSS utilitario
- **qrcode**: Librería para generar códigos QR
- **Lucide React**: Iconos modernos

## 📦 Instalación y uso

### Prerrequisitos
- Node.js (versión 18 o superior)
- pnpm

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone [url-del-repo]
   cd wifi_qr_generator
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**
   ```bash
   pnpm run dev
   ```

4. **Abre tu navegador**
   - Visita `http://localhost:5173`

### Scripts disponibles

- `pnpm run dev` - Inicia el servidor de desarrollo
- `pnpm run build` - Construye la aplicación para producción
- `pnpm run preview` - Previsualiza la build de producción

## 🖥️ Cómo usar la aplicación

1. **Ingresa los datos de tu WiFi**:
   - Nombre de la red (SSID)
   - Contraseña (si aplica)
   - Tipo de seguridad (WPA/WPA2, WEP, o sin contraseña)
   - Marca si es una red oculta (opcional)

2. **Genera el código QR**:
   - Haz clic en "Generar Código QR"
   - El código se genera instantáneamente

3. **Descarga o comparte**:
   - Personaliza el nombre del archivo
   - Descarga como imagen PNG
   - O cópialo al portapapeles

4. **Usa el código QR**:
   - Escanea con cualquier dispositivo móvil
   - La conexión WiFi se realizará automáticamente

## 🔧 Personalización

### Colores y tema
Los colores se pueden modificar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Agrega tus colores personalizados aquí
    }
  }
}
```

### Configuración del QR
Modifica las opciones del QR en `src/utils/qrUtils.js`:

```javascript
const qrCodeDataURL = await QRCode.toDataURL(wifiString, {
  errorCorrectionLevel: 'M', // L, M, Q, H
  width: 256,                // Tamaño en píxeles
  margin: 1,                 // Margen alrededor del QR
  color: {
    dark: '#000000',         // Color del QR
    light: '#FFFFFF'         // Color de fondo
  }
});
```

## 🏗️ Estructura del proyecto

```
wifi_qr_generator/
├── src/
│   ├── components/
│   │   ├── QRGenerator.jsx    # Componente principal
│   │   ├── WiFiForm.jsx       # Formulario para datos WiFi
│   │   └── QRDisplay.jsx      # Mostrar y descargar QR
│   ├── utils/
│   │   └── qrUtils.js         # Utilidades para generar QR
│   ├── App.jsx                # Componente raíz
│   ├── main.jsx               # Punto de entrada
│   └── index.css              # Estilos base (Tailwind)
├── index.html                 # HTML base
├── package.json               # Dependencias y scripts
├── tailwind.config.js         # Configuración de Tailwind
└── vite.config.js             # Configuración de Vite
```

## 🔒 Privacidad y seguridad

- ✅ **Sin servidor**: Todo funciona localmente
- ✅ **Sin recopilación de datos**: No se guardan ni envían datos
- ✅ **Sin analytics**: No hay seguimiento de usuarios
- ✅ **Código abierto**: Puedes revisar todo el código

## 🌍 Deployment

### Netlify, Vercel, o GitHub Pages

1. **Build de producción**:
   ```bash
   pnpm run build
   ```

2. **Sube la carpeta `dist/`** a tu servicio de hosting preferido

### Usando Netlify CLI

```bash
pnpm run build
npx netlify deploy --prod --dir=dist
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes ideas para mejorar la aplicación:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ❓ FAQ

**¿Es seguro ingresar mi contraseña WiFi?**
Sí, completamente. Toda la generación del QR ocurre en tu navegador y nada se envía a servidores externos.

**¿Qué dispositivos pueden escanear estos códigos QR?**
Cualquier smartphone moderno con iOS o Android puede escanear y conectarse automáticamente.

**¿Puedo usar esto en mi empresa?**
Sí, al ser completamente local y sin dependencias externas, es perfecto para uso empresarial.

**¿Funciona sin internet?**
Una vez cargada la página, la aplicación funciona completamente offline.