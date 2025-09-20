type BadgeType = "success" | "warning" | "error" | "info";

interface BadgeProps {
  type: BadgeType;
  children: React.ReactNode;
  className?: string;
}

const badgeColors = {
  success: "bg-green-500 text-white",
  warning: "bg-yellow-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
};

export function Badge({ type, children, className }: BadgeProps) {
  return (
    <span
      className={`px-3 py-1 rounded-full font-medium tracking-wide ${badgeColors[type]} ${className}`}
    >
      {children}
    </span>
  );
}
