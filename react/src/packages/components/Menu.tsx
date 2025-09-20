import { useState } from "react";

interface MenuProps {
  theme: "dark" | "light";
  links: {
    id: number;
    href: string;
    label: string;
  }[];
}

export function Menu({ theme = "light", links }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleMenu} className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`p-2 size-11 rounded-lg transition-all cursor-pointer ${
            theme === "dark" ? "hover:bg-slate-600" : "hover:bg-gray-300"
          }`}
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>

      <article
        className={`absolute top-19 left-0 z-50 w-full h-auto p-6 flex flex-col gap-4
           transition-all duration-300 ease-in-out ${
             isOpen ? "visible opacity-100" : "invisible opacity-0"
           } ${
          theme === "dark"
            ? "bg-slate-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        <ul className="flex flex-col justify-center gap-6 w-full">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className={`flex text-lg font-medium rounded-lg w-full px-4 py-2  transition-all ${
                  theme === "dark"
                    ? "bg-slate-700 hover:bg-slate-800"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
