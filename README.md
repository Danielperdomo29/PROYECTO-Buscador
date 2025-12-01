# 🚗 Buscador de Autos con Filtros Dinámicos

Este proyecto es una aplicación **puramente de frontend** (HTML, CSS, JavaScript) que simula un catálogo de autos y permite a los usuarios filtrar la lista utilizando múltiples criterios de búsqueda en tiempo real. La base de datos de los vehículos se gestiona localmente a través de un archivo de datos JavaScript.

---

## ✨ Características Principales

| Característica | Descripción |
| :--- | :--- |
| **Búsqueda Multifiltro** | Filtrado simultáneo por Marca, Año, Precio Mínimo/Máximo, Puertas, Transmisión y Color. |
| **Experiencia Dinámica** | Los resultados se actualizan instantáneamente sin recargar la página gracias a la manipulación del DOM y el uso de *Event Listeners*. |
| **Base de Datos Local** | Los datos de los vehículos (`autos`) se almacenan en el archivo `db.js`. |
| **Diseño Limpio** | Utiliza los frameworks **Skeleton** y **Normalize** para una interfaz de usuario ordenada y consistente. |

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito | Archivo(s) Clave |
| :--- | :--- | :--- |
| **JavaScript (ES6)** | Lógica principal, manejo de eventos, y aplicación de filtros mediante la función encadenada `filtarAutos()`. | `app.js`, `db.js` |
| **HTML5** | Estructura de la página, incluyendo el formulario de búsqueda (`#buscador`) y el contenedor de resultados (`#resultado`). | `index.html` |
| **Skeleton CSS** | Framework CSS ligero para el diseño *responsive* de la cuadrícula y formularios. | `skeleton.css` |
| **Normalize CSS** | Estándar de reset de estilos para asegurar la uniformidad en diferentes navegadores. | `normalize.css` |
| **CSS Custom** | Estilos específicos para el fondo, tipografía (`Staatliches`) y la presentación de cada auto. | `app.css` |

---

## 🚀 Instalación y Ejecución

Al ser un proyecto de desarrollo **únicamente frontend**, no requiere instalación de dependencias ni un servidor.

### 1. Obtener el Proyecto

Clona el repositorio en tu máquina local:

```bash
git clone [https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)
cd [Nombre del Repositorio]
