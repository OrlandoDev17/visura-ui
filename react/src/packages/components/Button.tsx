type ButtonType =
  | "default"
  | "outlined"
  | "ghost"
  | "link"
  | "success"
  | "warning"
  | "danger";

interface ButtonProps {
  type?: ButtonType;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const types = {
  default: "bg-blue-500 text-white hover:bg-blue-600",
  ghost:
    "bg-transparent text-black border border-gray-500 hover:bg-gray-500 hover:text-white",
  outlined:
    "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
  link: "bg-transparent text-gray-500 border-b-2 border-gray-500 rounded-none hover:text-blue-500 hover:border-blue-500",
  success: "bg-green-500 text-white hover:bg-green-600",
  warning: "bg-yellow-500 text-white hover:bg-yellow-600",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

export function Button({
  type = "default",
  children,
  className,
  href,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 ${
        href ? "" : "px-4 md:px-6 py-2"
      } rounded-lg text-base md:text-lg font-medium hover:-translate-y-1 transition-all cursor-pointer ${
        types[type]
      } ${className}`}
    >
      {href ? (
        <a
          className="px-4 md:px-6 py-2"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </button>
  );
}
