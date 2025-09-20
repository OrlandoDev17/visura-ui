import React, { useState, useRef } from "react";

type Position = "top" | "right" | "bottom" | "left";
type Theme = "dark" | "light";

interface TooltipProps {
  content: React.ReactNode;
  position?: Position;
  children: React.ReactElement;
  theme?: Theme;
  className?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
};

const themeClasses = {
  dark: "bg-gray-800 text-white",
  light: "bg-white text-gray-800 border border-gray-200",
};

export function Tooltip({
  content,
  position = "top",
  children,
  className = "",
  theme = "light",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        ref={tooltipRef}
        className={`
          absolute z-50 px-3 py-1.5 text-sm rounded-md shadow-lg whitespace-nowrap
          transition-opacity duration-200 ${
            isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }
          ${positionClasses[position]}
          ${themeClasses[theme]}
          ${className}
        `}
        style={{
          transform: "translateZ(0)",
          willChange: "opacity, transform",
        }}
      >
        {content}
      </div>
    </div>
  );
}
