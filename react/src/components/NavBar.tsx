interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  return (
    <nav>
      <ul className="flex gap-6">{children}</ul>
    </nav>
  );
}
