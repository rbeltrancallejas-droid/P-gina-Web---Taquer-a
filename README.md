# Taquería Beltrán

Sitio web informativo desarrollado para **Taquería Beltrán**, un negocio gastronómico local ubicado en **La Huerta, Jalisco, México**.

El proyecto tiene como finalidad proporcionar una presencia digital para el establecimiento mediante un sitio web responsivo, accesible y visualmente consistente con la identidad del negocio.

El sitio permite consultar información general de Taquería Beltrán, conocer su menú y precios, visualizar la promoción semanal, consultar la galería de productos, reproducir un video de presentación y acceder a los medios de contacto del establecimiento.

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

Desarrollar y desplegar un sitio web informativo para una empresa real de la región, aplicando principios de diseño web responsivo, identidad visual y organización de información.

El proyecto también busca integrar el desarrollo del frontend con prácticas básicas de administración de servidores, configuración de seguridad, publicación de servicios web y utilización de servicios de almacenamiento en la nube.

---

## 3. Características del sitio

El sitio web incluye las siguientes características:

- Página de inicio con identidad visual y presentación del negocio.
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
- Sección de video.
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

El diseño del sitio busca mantener una identidad visual relacionada con la naturaleza gastronómica de Taquería Beltrán.

La interfaz utiliza principalmente una combinación de:

- Rojo oscuro.
- Tonos crema.
- Blanco.
- Café.
- Tonos dorados.

Estos colores se utilizan para establecer una jerarquía visual entre las diferentes secciones del sitio y mantener una apariencia uniforme.

El logotipo del establecimiento se utiliza como elemento principal de identificación visual dentro del encabezado y pie de página.

---

## 5. Tecnologías utilizadas

### HTML5

Se utiliza HTML5 para construir la estructura y contenido del sitio mediante elementos semánticos y una organización clara de las diferentes secciones.

### CSS3

CSS3 se utiliza para:

- Diseño visual.
- Colores.
- Tipografía.
- Espaciado.
- Animaciones.
- Transiciones.
- Diseño responsive.
- CSS Grid.
- Flexbox.
- Media Queries.
- Unidades relativas.
- `clamp()`.
- `minmax()`.
- `aspect-ratio`.

### JavaScript Vanilla

JavaScript se utiliza para proporcionar las interacciones del sitio, entre ellas:

- Menú de navegación para dispositivos móviles.
- Filtrado de productos.
- Apertura y cierre de modales.
- Visualización ampliada de imágenes.
- Botón de regreso al inicio.
- Manejo de eventos de interacción.
- Actualización dinámica de algunos elementos de la interfaz.

No se utilizan frameworks frontend como React, Angular, Vue, Bootstrap o Tailwind.

La implementación se mantiene basada en tecnologías web nativas.

---

## 6. Diseño responsive

El sitio fue desarrollado para adaptarse a diferentes tamaños de pantalla.

La distribución utiliza CSS Grid, Flexbox y Media Queries para reorganizar el contenido de acuerdo con el espacio disponible.

Los principales rangos considerados son:

- Móviles.
- Tabletas.
- Laptops.
- Computadoras de escritorio.

La estructura utiliza unidades relativas y funciones como `clamp()`, `minmax()` y `aspect-ratio` para evitar dimensiones rígidas en diferentes resoluciones.

La distribución de productos se adapta al ancho disponible mediante diferentes cantidades de columnas.

---

# 7. Práctica 03 — Amazon S3

Como parte de la Práctica 03 se trabajó con **Amazon Simple Storage Service (Amazon S3)** para comprender el almacenamiento de objetos, el control de acceso y la integración de recursos almacenados en la nube con una aplicación web.

La práctica se dividió en tres partes:

1. Bucket público.
2. Bucket privado y acceso autorizado.
3. Landing page con recursos almacenados en S3.

---

## 7. Desarrollo de la Práctica

### 7.1 Bucket Público
Se creó y configuró el bucket denominado `raulbuckets3`. En esta fase se trabajó con objetos de acceso público, configurando una política de bucket (*Bucket Policy*) que permite la lectura de los objetos mediante la acción:
* `s3:GetObject`

**Validación:** Se comprobó el correcto funcionamiento y la apertura del acceso mediante la navegación directa a la URL pública de uno de los objetos almacenados.

### 7.2 Bucket Privado y Acceso Autorizado
Se creó el bucket privado denominado `raulbucketprivate`, manteniendo activo el **Bloqueo de acceso público (Public Access Block)**.

Para validar el acceso controlado, se configuró la identidad de IAM `usuario-s3-privado` con las siguientes políticas y permisos específicos:
* `s3:ListBucket`
* `s3:GetObject`

**Resultados de las pruebas de conectividad:**
* **AWS CLI (vía CloudShell):** Acceso autorizado exitoso para listar y descargar objetos.
* **Acceso Anónimo:** Enrutamiento rechazado correctamente (Error *Access Denied*).
* **Acceso Temporal:** Se generó exitosamente una **Presigned URL** para permitir el acceso por tiempo limitado a un objeto privado.

### 7.3 Landing Page con Recursos Almacenados en S3
Se creó el bucket público `raulbucketwebsite` para almacenar y servir la multimedia de la página web. La estructura de almacenamiento quedó organizada de la siguiente manera:

```text
raulbucketwebsite/
├── images/
└── videos/
    └── presentacion.mp4
```

> **Nota de Integración:** Las rutas locales del código fuente fueron sustituidas por las **URL del objeto de Amazon S3**. Las imágenes del menú, las galerías, los modales y el video de presentación se cargan directamente desde la infraestructura de AWS.

---

## 8. Servicios AWS Utilizados

* **Amazon S3:** Administración de buckets, almacenamiento de objetos, organización de carpetas y configuración de políticas de acceso público/privado.
* **AWS IAM:** Creación de usuarios y asignación de políticas con el principio de menor privilegio (`ListBucket` y `GetObject`).
* **AWS CLI:** Ejecutado desde CloudShell para operaciones de diagnóstico, listado y generación de URLs firmadas.

---

## 9. Acceso y Seguridad

* **Recursos Públicos (Landing Page):** Configurados con acceso público de lectura obligatorio, ya que los navegadores de los clientes finales necesitan renderizar las imágenes y el video.
* **Recursos Privados:** Bloqueo de acceso público estricto. El acceso queda restringido a identidades IAM autorizadas y firmas temporales (**Presigned URLs**).
* **Escalabilidad Futura:** Para entornos de producción masivos, se contempla la implementación de **Amazon CloudFront** junto con **Origin Access Control (OAC)** para optimizar la distribución global y mejorar la seguridad del origen.

---

## 10. Evidencias Documentadas

La documentación independiente de la práctica incluye capturas y registros de:
1. Configuración de buckets públicos y sus políticas de lectura.
2. Pruebas de denegación de acceso anónimo en recursos privados.
3. Generación de *Presigned URLs* funcionales.
4. Código HTML integrado con los enlaces directos a Amazon S3.
5. Despliegue visual de la *Landing Page* interactuando con AWS.

---

## 11. Información del Negocio

* **Nombre:** Taquería Beltrán
* **Ubicación:** La Huerta, Jalisco, México
* **Teléfono:** 357 383 0226
* **Fundación:** Agosto de 2015

### Horario de Atención

| Día | Horario |
| :--- | :--- |
| **Lunes** | 7:00 PM - 12:00 AM |
| **Martes** | 7:00 PM - 12:00 AM |
| **Miércoles** | *Cerrado* |
| **Jueves** | *Cerrado* |
| **Viernes** | 7:00 PM - 12:00 AM |
| **Sábado** | 7:00 PM - 12:00 AM |
| **Domingo** | 7:00 PM - 12:00 AM |

---

## 12. Promociones Especiales

* **Martes de Tacos:** En la compra de **10 tacos**, se incluye sin costo adicional:
  * ½ orden de carne asada con verduras.
  * 2 quesadillas.
  * ½ litro de agua del día (sabor variable).

---

## 13. Despliegue de la Infraestructura

El proyecto está diseñado y preparado para producción bajo un entorno Web en la nube utilizando:
* **Sistema Operativo:** Ubuntu Server (Máquina Virtual / EC2).
* **Servidor Web:** Nginx.
* **Almacenamiento de Multimedia:** Amazon S3 (Desacoplado del servidor de aplicaciones).

---

## 14. Estructura del Proyecto Local

```text
PAGINAWEB/
│
├── css/
│   └── estilos.css
│
├── images/
│   ├── aguas frescas.jpg
│   ├── combinada de adobada.jpg
│   ├── combinada de asada.jpg
│   ├── combinada de chorizo.jpg
│   ├── combinada de tripa.jpg
│   ├── doradita de asada.jpg
│   ├── logo.jpeg
│   ├── orden de carne asada.jpg
│   ├── pellizcada de asada.jpg
│   ├── taco de adobada.jpg
│   ├── taco de asada.jpg
│   ├── taco de camaron.jpg
│   ├── taco de chorizo.jpg
│   ├── taco de pescado.jpg
│   ├── taco de tripa guisado.jpg
│   └── taco de tripa torteado.jpg
│
├── js/
│   └── script.js
│
├── video/
│   └── presentacion.mp4
│
├── .gitignore
├── index.html
└── README.md
```

---

## 15. Autor

* **Raúl Alejandro Beltrán Callejas**
* *Proyecto de Carácter Académico*

## 15. Colaborador

* **Ernesto Reynaga Morales**