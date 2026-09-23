# Taquería Beltrán

Sitio web informativo desarrollado para **Taquería Beltrán**, un negocio
gastronómico local ubicado en **La Huerta, Jalisco, México**.

El proyecto tiene como finalidad proporcionar una presencia digital para
el establecimiento mediante un sitio web responsivo, accesible y
visualmente consistente con la identidad del negocio.

El sitio permite consultar información general de Taquería Beltrán,
conocer su menú y precios, visualizar la promoción semanal, consultar
la galería de productos y acceder a los medios de contacto del
establecimiento.

---

## 1. Información general del proyecto

### Empresa

**Taquería Beltrán**

### Giro

Negocio gastronómico local.

### Ubicación

La Huerta, Jalisco, México.

### Teléfono

357 383 0226

### Fundación

Agosto de 2015.

### Horario de atención

- Lunes: 7:00 PM - 12:00 AM
- Martes: 7:00 PM - 12:00 AM
- Miércoles: Cerrado
- Jueves: Cerrado
- Viernes: 7:00 PM - 12:00 AM
- Sábado: 7:00 PM - 12:00 AM
- Domingo: 7:00 PM - 12:00 AM

---

## 2. Objetivo del proyecto

Desarrollar y desplegar un sitio web informativo para una empresa real
de la región, aplicando principios de diseño web responsivo,
identidad visual, organización de información y despliegue de
infraestructura en la nube.

El proyecto busca integrar el desarrollo del frontend con prácticas
básicas de administración de servidores, configuración de seguridad,
publicación de servicios web y pruebas de rendimiento.

---

## 3. Características del sitio

El sitio web incluye las siguientes características:

- Página de inicio con identidad visual y presentación del negocio.
- Eslogan y propuesta visual relacionada con la actividad gastronómica.
- Sección informativa sobre Taquería Beltrán.
- Historia del establecimiento.
- Misión.
- Visión.
- Menú de productos.
- Categorías de productos.
- Precios de los productos.
- Descripciones de los productos.
- Promoción semanal.
- Galería de fotografías.
- Información de contacto.
- Ubicación general del establecimiento.
- Horarios de atención.
- Días de descanso.
- Navegación responsive.
- Menú adaptable para dispositivos móviles.
- Filtros para consultar productos por categoría.
- Modal para consultar información adicional de los productos.
- Galería con ampliación de imágenes.
- Botón para regresar al inicio.
- Animaciones e interacciones mediante JavaScript.
- Diseño adaptable a diferentes tamaños de pantalla.
- Identidad gráfica consistente mediante colores, tipografía y logotipo.

---

## 4. Identidad visual

El diseño del sitio busca mantener una identidad visual relacionada con
la naturaleza gastronómica de Taquería Beltrán.

La interfaz utiliza principalmente una combinación de:

- Rojo oscuro.
- Tonos crema.
- Blanco.
- Café.
- Tonos dorados.

Estos colores se utilizan para establecer una jerarquía visual entre
las diferentes secciones del sitio y mantener una apariencia uniforme.

El logotipo del establecimiento se utiliza como elemento principal de
identificación visual dentro del encabezado y pie de página.

---

## 5. Tecnologías utilizadas

### Frontend

El sitio fue desarrollado utilizando tecnologías web estándar:

- HTML5.
- CSS3.
- JavaScript Vanilla.

### HTML5

Se utiliza HTML5 para construir la estructura y contenido del sitio
mediante elementos semánticos y una organización clara de las
diferentes secciones.

### CSS3

CSS3 se utiliza para:

- Diseño visual.
- Colores.
- Tipografía.
- Espaciado.
- Animaciones.
- Transiciones.
- Diseño responsive.
- Organización mediante CSS Grid.
- Organización mediante Flexbox.
- Media Queries.
- Unidades relativas.
- `clamp()`.
- `minmax()`.
- `aspect-ratio`.

### JavaScript Vanilla

JavaScript se utiliza para proporcionar las interacciones del sitio,
entre ellas:

- Menú de navegación para dispositivos móviles.
- Filtrado de productos.
- Apertura y cierre de modales.
- Visualización ampliada de imágenes.
- Botón de regreso al inicio.
- Actualización dinámica de algunos elementos de la interfaz.
- Manejo de eventos de interacción.

No se utilizan frameworks frontend como:

- React.
- Angular.
- Vue.
- Bootstrap.
- Tailwind.

La implementación se mantiene basada en tecnologías web nativas.

---

## 6. Diseño responsive

El sitio fue desarrollado para adaptarse a diferentes tamaños de
pantalla.

La distribución utiliza CSS Grid, Flexbox y Media Queries para
reorganizar el contenido de acuerdo con el espacio disponible.

Los principales rangos considerados son:

- Móviles.
- Tabletas.
- Laptops.
- Computadoras de escritorio.

La estructura utiliza unidades relativas y funciones como `clamp()`,
`minmax()` y `aspect-ratio` para evitar que el contenido mantenga
dimensiones rígidas en diferentes resoluciones.

El menú de productos también modifica el número de columnas de acuerdo
con el ancho disponible.

La distribución de productos utiliza:

- 4 columnas en pantallas amplias.
- 3 columnas en pantallas intermedias.
- 2 columnas en tabletas.
- 1 columna en pantallas pequeñas.

---
## 8. Información del negocio

Taquería Beltrán
La Huerta, Jalisco, México.
Teléfono: 357 383 0226

## 9. Horario:
Lunes, martes y viernes a domingo, de 7:00 PM a 12:00 AM.

Días de descanso: miércoles y jueves.

Fundación: agosto de 2015.

## 10. Promoción

Los martes, en la compra de 10 tacos se incluye:

1/2 orden de carne asada con verduras.
2 quesadillas.
1/2 litro de agua del día.
Despliegue

El proyecto está preparado para su despliegue en infraestructura
Cloud mediante una máquina virtual con Ubuntu Server y Nginx.

El proceso de configuración, seguridad, despliegue y pruebas de carga
se documentará en el informe técnico del proyecto.

## 11. Autor

Raúl Alejandro Beltrán Callejas

Proyecto académico.

## 12. Estructura del proyecto

La estructura principal del proyecto es la siguiente:

```text
PAGINAWEB/
│
├── index.html
├── README.md
├── .gitignore
│
├── css/
│   └── estilos.css
│
├── js/
│   └── script.js
│
└── images/
    ├── logo.jpeg
    ├── taco de azada.jpg
    ├── taco de adobada.jpg
    ├── taco de chorizo.jpg
    ├── taco de tripa guisado.jpg
    ├── taco de tripa torteado.jpg
    ├── taco de camaron.jpg
    ├── taco de pescado.jpg
    ├── orden de carne azada.jpg
    ├── doradita de azada.jpg
    ├── pellizcada de azada.jpg
    └── aguas frescas.jpg