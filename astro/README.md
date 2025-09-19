# VisuraUI Astro Components

## ¿Qué es VisuraUI Astro?

VisuraUI Astro es una biblioteca de componentes UI reutilizables y accesibles diseñados específicamente para proyectos Astro. Ofrece un conjunto de componentes modernos, personalizables y listos para usar que te permitirán acelerar el desarrollo de tus aplicaciones web.

## Instalación

Instala el paquete usando npm o yarn:

```bash
npm install visura-ui-astro
# o
yarn add visura-ui-astro


# Puedes ejecutar el CLI para configurar TailwindCSS
npx visura-init

# Componentes base
import { Button, Input, Select } from 'visura-ui-astro/base';

# Componentes de interacción
import { Spinner, Tooltip } from 'visura-ui-astro/interaction';

# Componentes de layout
import { Card, Modal, Accordeon } from 'visura-ui-astro/layout';

# Componentes de navegación
import { Header, HeaderActions, HeaderWithDropdown } from 'visura-ui-astro/navigation';
```

### Componentes disponibles

#### Base

- Button - Botón versátil con múltiples variantes
- Input - Campo de entrada de texto
- Select - Menú desplegable personalizable

#### Interacción

- Spinner - Indicador de carga
- Tooltip - Información emergente al pasar el cursor

#### Layout

- Card - Contenedor de contenido con sombra y bordes redondeados
- Modal - Ventana emergente
- Accordeon - Acordeón plegable

#### Navegación

- Header - Barra de navegación superior
- HeaderActions - Contenedor para acciones en el header
- HeaderWithDropdown - Header con menús desplegables

### Personalización

Los componentes de VisuraUI Astro pueden ser personalizados usando variables CSS personalizadas o sobrescribiendo los estilos base.

### Contribución

Las contribuciones son bienvenidas. Por favor, lee nuestra guía de contribución antes de enviar un pull request.
