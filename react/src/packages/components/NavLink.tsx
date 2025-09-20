interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  active?: number;
  index?: number;
  theme?: "dark" | "light";
  className?: string;
}

const themes = {
  dark: "hover:text-sky-300 hover:border-sky-300",
  light: "hover:text-blue-500 hover:border-blue-500",
};

export function NavLink({
  children,
  href,
  active = 0,
  index,
  theme = "light",
  className,
}: NavLinkProps) {
  return (
    <li>
      <a
        className={`text-lg font-medium pb-2 border-b-2 border-transparent transition-all ${
          themes[theme]
        } ${
          active === index
            ? theme === "dark"
              ? "text-sky-300 border-sky-300"
              : "text-blue-500 border-blue-500"
            : ""
        } ${className}`}
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
