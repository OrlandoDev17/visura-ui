const prompts = require("prompts");
const { execSync } = require("child_process");

(async () => {
  console.log("\n🚀 Gracias por instalar VisuraUIAstro!");
  console.log(
    "⚠️ Esta librería requiere TailwindCSS para funcionar correctamente.\n"
  );

  const response = await prompts({
    type: "confirm",
    name: "install",
    message: "¿Querés que instalemos TailwindCSS por vos?",
    initial: true,
  });

  const response2 = await prompts({
    type: "select",
    name: "packageManager",
    message: "¿Con qué paquete manager querés que instalemos TailwindCSS?",
    choices: [
      { title: "npm", value: "npm install" },
      { title: "pnpm", value: "pnpm add" },
      { title: "yarn", value: "yarn add" },
    ],
    initial: true,
  });

  if (response.install) {
    console.log("\n📦 Instalando TailwindCSS...");
    execSync(`${response2.packageManager} tailwindcss @tailwindcss/vite`, {
      stdio: "inherit",
    });
    console.log(`\nAhora debes agregar esto en tu vite.config.js`);
    console.log(`plugins: [
    tailwindcss(),
  ],`);
    console.log(`\nY luego debes agregar esto en tu global.css`);
    console.log(`@import "@tailwindcss"`);
    console.log(
      `\nY finalmente debes importar global.css en tu archivo principal`
    );
    console.log(`import "./src/styles/global.css"`);
  } else {
    console.log(
      "\n⚠️ Recordá instalarlo manualmente para que VisuraUI funcione correctamente."
    );
  }
})();
