import type { ElementType } from 'react';

interface TypographyProps {
  variant: "heading" | "subheading" | "body" | "caption";
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
}

const typographyStyles = {
  heading: "text-4xl font-bold",
  subheading: "text-3xl font-medium",
  body: "text-lg",
  caption: "text-sm font-light",
};

export function Typography({
  variant = "body",
  children,
  className,
  as: Component = "span",
}: TypographyProps) {
  return (
    <Component className={`${typographyStyles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
