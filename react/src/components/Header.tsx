interface HeaderProps {
  children: React.ReactNode;
  theme?: "dark" | "light";
}

const themes = {
  dark: "bg-slate-700 text-white",
  light: "border-gray-200 bg-slate-50",
};

export function Header({ children, theme = "light" }: HeaderProps) {
  return (
    <header className={`border-y ${themes[theme]} w-full`}>
      <div className="flex justify-between items-center py-4 max-w-9/12 mx-auto w-full">
        {children}
      </div>
    </header>
  );
}
