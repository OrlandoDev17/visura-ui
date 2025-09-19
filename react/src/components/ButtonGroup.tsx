import type { ComponentType } from "react";

interface ButtonGroupProps {
  buttons: {
    id: number;
    icon?: ComponentType;
    label: string;
    href: string;
  }[];
  className?: string;
  theme?: "dark" | "light";
}

const themes = {
  dark: "bg-gray-600 hover:bg-gray-700 text-white",
  light: "bg-gray-200 hover:bg-gray-300 text-black",
};

export function ButtonGroup({
  buttons,
  className,
  theme = "light",
}: ButtonGroupProps) {
  return (
    <div
      className={`flex items-center ${
        theme === "dark" ? "bg-gray-600" : "bg-gray-200"
      } text-white rounded-xl border border-gray-300 ${className}`}
    >
      {buttons.map((button) => (
        <>
          <a
            className={`${themes[theme]} px-6 py-3 font-medium rounded-xl transition-all`}
            href={button.href}
            key={button.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button.icon && <button.icon />}
            {button.label}
          </a>
        </>
      ))}
    </div>
  );
}
