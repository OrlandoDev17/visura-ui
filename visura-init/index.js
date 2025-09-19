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

  if (response.install) {
    console.log("\n📦 Instalando TailwindCSS...");
    execSync("npm install -D tailwindcss @tailwindcss/vite", {
      stdio: "inherit",
    });
    execSync("mkdir src/styles", { stdio: "inherit" });
    execSync("touch src/styles/global.css", { stdio: "inherit" });
    console.log("\n✅ TailwindCSS instalado y configurado.");
  } else {
    console.log(
      "\n⚠️ Recordá instalarlo manualmente para que VisuraUI funcione correctamente."
    );
    console.log("👉 npm install -D tailwindcss @tailwindcss/vite");
    console.log("👉 mkdir src/styles");
    console.log("👉 touch src/styles/global.css\n");
    console.log("👉 Agrega esta linea a global.css\n");
    console.log("import @tailwindcss");
    console.log(
      "E importa ese archivo en el archivo en tu raiz Ej. src/main.ts o src/layout.astro\n"
    );
  }
})();
