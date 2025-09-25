import OpenBook from "@/icons/OpenBook.astro";
import Settings from "@/icons/Settings.astro";
import Zap from "@/icons/Zap.astro";

export const documentation = {
  introduction: {
    title: "Introducción",
    paragraph:
      "VisuraUI nace de una necesidad real: crear interfaces hermosas sin sacrificar velocidad de desarrollo. No es solo otra biblioteca de componentes—es tu aliado para construir productos que se sienten únicos, profesionales y listos para el futuro.",
    adventages: [
      {
        title: "Para cualquier proyecto",
        text: "Landing pages, dashboards, e-commerce, aplicaciones SaaS. VisuraUI se adapta a tu visión.",
      },
      {
        title: "Totalmente editables",
        text: "Componentes diseñados para que puedas editarlos dependiendo de tus necesidades, flujo de trabajo y tipo de proyecto.",
      },
    ],
    tags: [
      "TypeScript First",
      "Accesible",
      "Modo Claro y Oscuro",
      "Customizable",
    ],
  },
  whyVisuraui: {
    title: "¿Por qué VisuraUI?",
    itemList: [
      {
        icon: Zap,
        title: "Desarrollo Ágil",
        text: "Componentes listos para usar que no necesitan configuración compleja. Implementa en minutos, no en horas.",
        bgColor: "bg-light-blue/10",
        textColor: "text-light-blue",
      },
      {
        icon: Settings,
        title: "Personalización Total",
        text: "Sistema de temas avanzado con tailwindCSS. tu marca, tu estilo, sin limitaciones ni compromisos.",
        bgColor: "bg-purple-400/10",
        textColor: "text-purple-400",
      },
      {
        icon: OpenBook,
        title: "Documentación Real",
        text: "Ejemplos prácticos, casos de uso reales y guías paso a paso. Documentación hecha por desarrolladores, para desarrolladores.",
        bgColor: "bg-green-400/10",
        textColor: "text-green-400",
      },
    ],
  },
  instalation: {
    title: "Instalación",
    requirementsTitle: "Requisitos de Instalación",
    requirements: [
      "React 18+, Astro o Vue (Según el stack que elijas)",
      "TailwindCSS instalado y configurado",
      "Tipografía Montserrat Variable instalada (Es opcional pero se recomienda para una mejor experiencia)",
    ],
    stepsTitle: "Pasos de Instalación",
    steps: [
      {
        number: 1,
        text: "Instala el paquete con npm, pnpm o yarn",
        command: "pnpm add visura-ui-{react,astro,vue}",
      },
      {
        number: 2,
        text: "Agrega la fuente Montserrat Variable a tu proyecto con",
        command: "pnpm add @fontsource-variable/montserrat",
      },
      {
        number: 3,
        text: "Ahora importala en tu archivo global.css",
        command: '@import "@fontsource-variable/montserrat"',
      },
      {
        number: 4,
        text: "Haz que tailwind lea las clases de VisuraUI. En global.css agrega",
        command: '@source "../node_modules/visura-ui-{react,astro,vue}"',
      },
      {
        number: 5,
        text: "Ahora puedes importar los componentes en tu proyecto",
        command: "import { Button } from 'visura-ui-{react,astro,vue}'",
      },
    ],
  },
  changelog: {
    title: "Changelog",
    info: [
      {
        version: "VisuraUI React v1.0.1",
        date: "2025-09-22",
        state: "Publicado",
        changes: [
          {
            change: "Publicación inicial del paquete",
            componentsTitle: "Componentes: ",
            components: [
              "Button, Modal, Typography, Input, Card, Tooltip, Header, Badge, Button Group, Dropdown",
            ],
          },
        ],
        featuresTitle: "Características",
        features: [
          "Soporte para variantes, temas y tipografia Montserrat Variable, altamente personalizable",
        ],
      },
    ],
  },
};
