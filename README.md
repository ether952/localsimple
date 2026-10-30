# LocalSimple - Soluciones Digitales y Organización para Comercios

Estructura moderna, rápida y limpia con **estética blanca minimalista**, pensada específicamente para que los dueños de locales de barrio (ferreterías, repuestos, bazares, tiendas de ropa, almacenes, etc.) escaneen un código QR desde un folleto y entiendan de inmediato qué herramientas podés brindarles para mantener el orden, controlar su inventario y agilizar el trabajo diario.

---

## Archivos del Proyecto

- **[`index.html`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/index.html)**: La web de presentación principal de LocalSimple. Presentación de Seba (5 años en sistemas), propuesta de valor enfocada en el comerciante, proceso, preguntas frecuentes y acceso directo a las herramientas.
- **[`demo-ecommerce.html`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/demo-ecommerce.html)**: **Demostración de Catálogo Digital Organizado**: Catálogo por categorías, buscador en tiempo real, códigos de producto (SKU) y consulta rápida para ahorrar tiempo en el mostrador.
- **[`demo-inventario.html`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/demo-inventario.html)**: **Demostración de Panel de Control de Stock**: Métricas en vivo (ventas del día, unidades totales, alertas de reposición), botones para registrar salidas con 1 clic, ingreso de mercadería, historial y alta rápida de productos.
- **[`panfleto.html`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/panfleto.html)**: Plantilla imprimible en hoja A4 con 4 folletos listos con código QR dinámico para cortar y repartir.
- **[`css/styles.css`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/css/styles.css)**: Estilos, animaciones sutiles y diseño blanco refinado.
- **[`js/main.js`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/js/main.js)**: Configuración general (desplazamiento suave, preguntas frecuentes en acordeón y centralización de datos de contacto).

---

## Cómo Probarlo Ahora Mismo

No requiere instalar ningún programa ni ejecutar comandos:
1. Hacé doble clic sobre **`index.html`** para abrirlo en Chrome, Edge o tu navegador favorito.
2. Abrí las herramientas de desarrollador (`F12` o `Ctrl + Shift + M`) para ver la vista de celular tal como la verá un comerciante al escanear el QR.
3. Hacé doble clic en **`panfleto.html`** para ver e imprimir tus folletos (presionando `Ctrl + P`).

---

## Cómo Personalizarlo

### 1. Datos de contacto y configuración
En el archivo **[`js/main.js`](file:///c:/Users/SebastianArias/OneDrive%20-%20FERSI%20SA/Escritorio/emprendi/js/main.js)**, en las primeras líneas encontrás este bloque configurado con tu número:

```javascript
const CONFIG = {
  whatsappNumber: "5491122456950",
  developerName: "Seba",
  neighborhood: "Villa del Parque",
  brandName: "LocalSimple"
};
```

Tu número ya está configurado en todos los archivos (`index.html`, `demo-ecommerce.html`, `demo-inventario.html`, `panfleto.html` y `js/main.js`).

### 2. Dónde alojar la web gratis para el link del QR
Podés alojarla 100% gratis en:
- **Vercel** o **Netlify**: Conectando tu repositorio de GitHub `https://github.com/ether952/localsimple` en 1 minuto.
- **GitHub Pages**: Activándolo desde la configuración del repositorio (`Settings > Pages`).

Una vez que tengas tu URL (por ejemplo: `localsimple.vercel.app`), abrís `panfleto.html`, pegás esa URL en el campo superior y los códigos QR se actualizarán automáticamente listos para imprimir.
