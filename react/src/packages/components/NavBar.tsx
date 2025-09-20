interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  return (
    <nav className="hidden md:block">
      <ul className="flex justify-center gap-6">{children}</ul>
    </nav>
  );
}
