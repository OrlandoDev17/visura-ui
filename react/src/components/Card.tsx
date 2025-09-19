interface CardProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
}

const cardTheme = {
  dark: "bg-slate-700 text-white hover:shadow-gray-500",
  light: "border-gray-200 bg-slate-200 hover:shadow-gray-500",
};

export function Card({ children, theme = "light", className }: CardProps) {
  return (
    <article
      className={`flex flex-col gap-4 p-8 max-w-lg mx-auto rounded-lg hover:shadow-md transition-all ${cardTheme[theme]} ${className}`}
    >
      {children}
    </article>
  );
}
