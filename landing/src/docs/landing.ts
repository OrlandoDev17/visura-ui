export const landingDoc = {
  introduction: {
    title: "Introduccion",
    content:
      "VisuraUI es una librería de componentes visuales diseñada para desarrolladores que buscan claridad, modularidad y una experiencia de usuario coherente. Aunque su núcleo actual está construido en React, el proyecto está pensado para expandirse hacia otras tecnologías modernas como Astro, Vue y más. Todos los componentes están estilizados con TailwindCSS y utilizan tipografía Montserrat Variable, lo que garantiza una estética limpia y adaptable desde el primer momento. Esta documentación te permitirá explorar cada componente en profundidad: ver ejemplos visuales, copiar fragmentos de código, entender sus variantes y editar sus props con facilidad. VisuraUI no es solo una colección de bloques reutilizables, es una base visual pensada para escalar y adaptarse a cualquier stack moderno.",
  },
  whyVisuraUI: {
    title: "¿Porque VisuraUI?",
    content:
      "VisuraUI nace de la necesidad de tener una librería que combine diseño limpio y edición directa. Está pensada para desarrolladores que no quieren perder tiempo peleando con estilos ni estructuras innecesarias. Cada componente está construido con TailwindCSS, lo que permite una personalización rápida y coherente. Además, la modularidad del proyecto permite que cada parte se adapte a tu flujo de trabajo, sin imponer convenciones rígidas.",
  },
  instalation: {
    title: "Instalación",
    requirements: [
      "React 18+, Astro o Vue (Segun el stack que elijas)",
      "TailwindCSS instalado y configurado",
      "Typografia Montserrat Variable instalada (Es opcional pero se recomienda para una mejor experiencia)",
    ],
    steps: [
      {
        step: "Instalá el paquete con npm, pnpm o yarn con",
        code: "pnpm add visura-ui-{react,astro,vue}",
      },
      {
        step: "Agrega la fuente Montserrat Variable a tu proyecto con",
        code: "pnpm add @fontsource-variable/montserrat",
      },
      {
        step: "Haz que tailwind lea las clases de VisuraUI. En global.css agregá",
        code: "@source '../node_modules/visura-ui-{react,astro,vue}';",
      },
      {
        step: "Importa los componentes desde `visura-ui-{react,astro,vue} y usalos directamente en tu proyecto`",
        code: "import { Button } from 'visura-ui-{react,astro,vue}';",
      },
    ],
  },
  changelog: {
    title: "Changelog",
    changes: [
      {
        version: "v1.0.1",
        date: "2025-09-20",
        changes: [
          "Publicación inicial del paquete",
          "Componentes: Button, Modal, Typography, Input, Card, Tooltip, Header, Badge, Button Group, Dropdown, NavBar",
          "Soporte para variantes, temas y tipografía Montserrat",
        ],
      },
    ],
  },
};
