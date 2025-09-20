# Visura UI React

**Librería de componentes React minimalista, modular y con soporte para variantes, temas y tipografía Montserrat.**  
Diseñada para integrarse fácilmente en proyectos con TailwindCSS y React 18+ o 19+.

---

## 🚀 Instalación

```bash
pnpm add visura-ui-react
npm install visura-ui-react
yarn add visura-ui-react
```

## ⚠️ Requisitos importantes

Antes de usar visura-ui-react, asegurate de tener lo siguiente en tu proyecto:

- 1. TailwindCSS instalado y configurado
     Esta librería está diseñada para funcionar con Tailwind. Si aún no lo tenés:

```bash
pnpm add tailwindcss @tailwindcss/vite
npm install tailwindcss @tailwindcss/vite
yarn add tailwindcss @tailwindcss/vite
```

2. Tipografía Montserrat (variable)
   La librería utiliza Montserrat Variable como fuente base. Se recomienda instalarla vía Fontsource:

```bash
pnpm add @fontsource-variable/montserrat
npm install @fontsource-variable/montserrat
yarn add @fontsource-variable/montserrat
```

Y luego incluirla en tu CSS global:

```css
@import "@fontsource-variable/montserrat";
```

3. React y ReactDOM como peer dependencies
   Tu proyecto debe tener React 18 o 19 instalado:

## 🌗 Soporte para temas

Todos los componentes que lo requieren tienen soporte para modo claro y oscuro.

- A algunos componentes tienes que pasarle como prop `theme` con el valor `light` o `dark` dependiendo del tema que quieras usar.

## 📦 Componentes incluidos

- Button
- ButtonGroup
- Badge
- Typography
- Input
- Modal
- Card
- Header
- NavBar
- NavLink
- Menu
- Dropdown
- Tooltip

Cada componente incluye variantes visuales y semánticas listas para producción.

## 🧠 Uso básico

```tsx
import { Button } from "visura-ui-react";

function App() {
  return <Button type="default">Botón</Button>;
}
```

## 🛠️ Personalización

Todos los componentes están diseñados para ser editables y adaptables. Podés extender estilos con Tailwind, pasar clases personalizadas o usar variantes predefinidas.

## 📜 Licencia

MIT — libre para usar, modificar y contribuir.
