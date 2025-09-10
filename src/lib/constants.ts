import Code from "@/icons/Code.astro";
import Layers from "@/icons/Layers.astro";
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
  },
  {
    id: 2,
    icon: Layers,
    iconColor: "text-accent",
    title: "Escalable y adaptable",
    text: "Diseñado para crecer con tu proyecto. Desde landing pages simples hasta dashboards complejos.",
  },
  {
    id: 3,
    icon: Robot,
    iconColor: "text-light-blue",
    title: "Preparado para el futuro",
    text: "Compatible con IA y automatización, pero funcional independientemente. Listo para cualquier stack moderno.",
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
  },
  {
    id: 2,
    target: 15,
    prefix: "",
    title: "Categorías",
    color: "text-accent",
  },
  {
    id: 3,
    target: 200,
    prefix: "+",
    title: "Variantes",
    color: "text-red-500",
  },
];
