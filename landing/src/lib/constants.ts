import Badge from "@/icons/Badge.astro";
import Angular from "@/icons/brands/Angular.astro";
import AstroJs from "@/icons/brands/AstroJs.astro";
import NextJs from "@/icons/brands/NextJs.astro";
import React from "@/icons/brands/React.astro";
import Svelte from "@/icons/brands/Svelte.astro";
import Vue from "@/icons/brands/Vue.astro";
import Card from "@/icons/Card.astro";
import Code from "@/icons/Code.astro";
import Layers from "@/icons/Layers.astro";
import Layout from "@/icons/Layout.astro";
import Loader from "@/icons/Loader.astro";
import Message from "@/icons/Message.astro";
import Mouse from "@/icons/Mouse.astro";
import Robot from "@/icons/Robot.astro";

export const NAV_ITEMS = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Documentación",
    href: "/docs",
  },
  {
    label: "Componentes",
    href: "/components",
  },
];

export const TAGS = [
  {
    id: 1,
    label: "Codigo limpio",
    icon: Code,
  },
  {
    id: 2,
    label: "Escalables",
    icon: Layers,
  },
  {
    id: 3,
    label: "Listos para IA",
    icon: Robot,
  },
];

export const WHY_CARDS = [
  {
    id: 1,
    icon: Code,
    iconColor: "text-blue-600",
    title: "Para desarrolladores técnicos",
    text: "Documentación clara con props, variantes y ejemplos visuales. Integración perfecta con TypeScript, React y Tailwind.",
    reveal: "left",
  },
  {
    id: 2,
    icon: Layers,
    iconColor: "text-accent",
    title: "Escalable y adaptable",
    text: "Diseñado para crecer con tu proyecto. Desde landing pages simples hasta dashboards complejos.",
    reveal: "top",
  },
  {
    id: 3,
    icon: Robot,
    iconColor: "text-light-blue",
    title: "Preparado para el futuro",
    text: "Compatible con IA y automatización, pero funcional independientemente. Listo para cualquier stack moderno.",
    reveal: "right",
  },
];

export const LIST = [
  "Componentes técnicos con múltiples variantes",
  "Documentación completa para desarrolladores",
  "Integración con Astro, React y frameworks modernos",
  "Preparado para backend, IA y automatización",
  "Diseño responsive y accesible por defecto",
  "Sistema de temas personalizable",
];

export const INFO = [
  {
    id: 1,
    target: 50,
    prefix: "+",
    title: "Componentes",
    color: "text-light-blue",
    reveal: "left",
  },
  {
    id: 2,
    target: 15,
    prefix: "",
    title: "Categorías",
    color: "text-accent",
    reveal: "top",
  },
  {
    id: 3,
    target: 200,
    prefix: "+",
    title: "Variantes",
    color: "text-red-500",
    reveal: "right",
  },
];

export const COMPONENTS = [
  {
    id: 1,
    icon: Layout,
    title: "Header",
    description: "Cabeceras modernas y adaptables",
    variants: [
      {
        name: "Simple",
        link: "/components/header",
      },
      {
        name: "Con navegación",
        link: "/components/header#nav",
      },
      {
        name: "Sticky",
        link: "/components/header#sticky",
      },
    ],
    link: "/components/header",
    iconColor: "text-light-blue",
  },
  {
    id: 2,
    icon: Mouse,
    title: "Button",
    description: "Botones con estados y transiciones",
    variants: [
      {
        name: "Simple",
        link: "/components/button",
      },
      {
        name: "Outlined",
        link: "/components/button#outlined",
      },
      {
        name: "Disabled",
        link: "/components/button#disabled",
      },
      {
        name: "Link",
        link: "/components/button#link",
      },
    ],
    link: "/components/button",
    iconColor: "text-orange-400",
  },
  {
    id: 3,
    icon: Card,
    title: "Card",
    description: "Tarjetas versatiles para contenido",
    variants: [
      {
        name: "Básica",
        link: "/components/card",
      },
      {
        name: "Con imagen",
        link: "/components/card#image",
      },
      {
        name: "Acción",
        link: "/components/card#action",
      },
    ],
    link: "/components/card",
    iconColor: "text-green-500",
  },
  {
    id: 4,
    icon: Badge,
    title: "Badge",
    description: "Indicadores de estado y categorías",
    variants: [
      {
        name: "Default",
        link: "/components/badge",
      },
      {
        name: "Outlined",
        link: "/components/badge#outlined",
      },
      {
        name: "Success",
        link: "/components/badge#success",
      },
      {
        name: "Warning",
        link: "/components/badge#warning",
      },
      {
        name: "Error",
        link: "/components/badge#error",
      },
    ],
    link: "/components/badge",
    iconColor: "text-yellow-300",
  },
  {
    id: 5,
    icon: Message,
    title: "Message",
    description: "Diálogos y modales interactivos",
    variants: [
      {
        name: "Simple",
        link: "/components/modal",
      },
      {
        name: "Alert",
        link: "/components/modal#alert",
      },
      {
        name: "Confirm",
        link: "/components/modal#confirm",
      },
    ],
    link: "/components/modal",
    iconColor: "text-pink-300",
  },
  {
    id: 6,
    icon: Loader,
    title: "Loading",
    description: "Indicadores de carga animados",
    variants: [
      {
        name: "spinner",
        link: "/components/loading",
      },
      {
        name: "dots",
        link: "/components/loading#dots",
      },
      {
        name: "Skeleton",
        link: "/components/loading#skeleton",
      },
      {
        name: "Progress",
        link: "/components/loading#progress",
      },
    ],
    link: "/components/loading",
    iconColor: "text-sky-400",
  },
];

export const TECHS = [
  {
    id: 1,
    icon: AstroJs,
    name: "Astro",
    url: "/docs/techs#astro",
  },
  {
    id: 2,
    icon: React,
    name: "React",
    url: "/docs/techs#react",
  },
  {
    id: 3,
    icon: NextJs,
    name: "NextJs",
    url: "/docs/techs#nextjs",
  },
  {
    id: 4,
    icon: Vue,
    name: "Vue",
    url: "/docs/techs#vue",
  },
  {
    id: 5,
    icon: Svelte,
    name: "Svelte",
    url: "/docs/techs#svelte",
  },
  {
    id: 6,
    icon: Angular,
    name: "Angular",
    url: "/docs/techs#angular",
  },
];
