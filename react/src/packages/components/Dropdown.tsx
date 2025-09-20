interface DropdownProps {
  theme: "dark" | "light";
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
  toggleDropdown?: () => void;
}

export function Dropdown({
  theme = "dark",
  title,
  isOpen,
  children,
  toggleDropdown,
}: DropdownProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between gap-2 px-6 py-3 min-w-md max-w-lg w-full rounded-lg text-lg font-semibold ${
          theme === "dark"
            ? "bg-slate-700 text-white"
            : "bg-gray-200 text-black"
        } `}
      >
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <ul
        className={`flex flex-col gap-2 transition-all duration-300 p-4 rounded-lg overflow-hidden ${
          theme === "dark"
            ? "bg-slate-700 text-white"
            : "bg-gray-200 text-black"
        } ${isOpen ? "visible opacity-100 h-full" : "invisible opacity-0 h-0"}`}
      >
        {children}
      </ul>
    </div>
  );
}
