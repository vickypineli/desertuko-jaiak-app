# Desertuko Jaiak

Aplicación web para mostrar el programa de actividades del festival "Desertuko Jaiak", celebrado en el Puerto de la Cruz (Desertu). La aplicación permite navegar por los diferentes días del festival y consultar los eventos programados.

## Características

- **Selección de idioma**: Soporte para español y euskera (euskara)
- **Navegación por días**: Visualización del programa por cada día del festival
- **Información de eventos**: Hora, título, ubicación y categoría de cada evento
- **Diseño responsive**: Adaptado para dispositivos móviles

## Tecnologías

- **React 19** - Framework de interfaz de usuario
- **Vite 7** - Herramienta de build y desarrollo
- **React Router DOM 7** - Enrutamiento de la aplicación
- **i18next** - Internacionalización (español y euskera)
- **Sass** - Preprocesador de CSS

## Estructura del Proyecto

```
src/
├── components/
│   ├── Button/              # Componente de botón reutilizable
│   ├── EventCard/           # Tarjeta de evento individual
│   └── layout/
│       ├── AppLayout.jsx    # Layout principal de la app
│       ├── PublicLayout.jsx # Layout público (página de idioma)
│       └── BottomNav.jsx    # Navegación inferior
├── data/
│   ├── es.json              # Programa en español
│   └── eu.json              # Programa en euskera
├── i18n/
│   ├── index.js             # Configuración de i18next
│   └── locales/
│       ├── es/common.json   # Traducciones español
│       └── eu/common.json   # Traducciones euskera
├── pages/
│   ├── Day/                 # Página de detalle de día
│   ├── Language/            # Página de selección de idioma
│   └── Schedule/            # Página del programa
├── router/
│   └── index.jsx            # Definición de rutas
├── styles/
│   ├── _mixins.scss         # Mixins de Sass
│   ├── _variables.scss     # Variables de estilos
│   └── main.scss           # Estilos globales
├── App.jsx                  # Componente raíz
└── main.jsx                # Punto de entrada
```

## Rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | `LanguageSelectorPage` | Página de selección de idioma |
| `/schedule` | `Schedule` | Programa del festival |
| `/day/:slug` | `Day` | Detalle de un día específico |

## Datos

Los eventos del festival se definen en `src/data/es.json` y `src/data/eu.json`. Cada día contiene:

- `id`: Identificador único
- `date`: Fecha del evento
- `label`: Nombre del día (localizado)
- `slug`: Identificador URL-friendly
- `events`: Array de eventos con:
  - `time`: Horario
  - `title`: Título del evento
  - `location`: Ubicación
  - `category`: Categoría (infantil, deportes, conciertos, etc.)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Ejecuta el servidor de desarrollo en `http://localhost:5173/`

## Producción

```bash
npm run build
```

Genera los archivos estáticos en la carpeta `dist/`

## Linting

```bash
npm run lint
```

Ejecuta ESLint para verificar el código.

## Personalización

### Añadir nuevos eventos

Editar los archivos `src/data/es.json` y `src/data/eu.json` con la estructura de días y eventos.

### Añadir nuevas traducciones

Editar los archivos en `src/i18n/locales/` y registrar las nuevas claves en el componente correspondiente.

### Estilos

Las variables globales están en `src/styles/_variables.scss` y los mixins en `src/styles/_mixins.scss`.

## Licencia

Desarrollado por Desertuko Jai Batzordea
