import { useState } from "react";

import { ChevronDown, Home, Panel } from "@/icons/Icons";
import { SIDEBAR_LINKS } from "@/lib/constants";
import "@/styles/scrollbar.css";

export function SideBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <aside className="fixed flex flex-col gap-6 px-4 w-md border-r-2 border-white/20 h-screen py-4">
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-end w-full"
      >
        <Panel className="size-11 p-2 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors" />
      </button>
      <header>
        <a
          className="flex items-center gap-4 text-xl font-semibold tracking-wide py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors"
          href="/"
        >
          <Home className="size-7" />
          Inicio
        </a>
      </header>
      <div className="flex flex-col gap-6">
        <ul>
          {SIDEBAR_LINKS.map(({ id, icon: Icon, label, sections }) => (
            <li
              className="flex flex-col gap-4 text-xl font-semibold tracking-wide"
              key={id}
            >
              <button
                onClick={() => toggleDropdown(id)}
                className="flex items-center justify-between w-full py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-4 ">
                  <Icon className="size-7" />
                  {label}
                </span>
                <ChevronDown className="size-5" />
              </button>
              <ul
                className={`flex flex-col gap-4 overflow-hidden transition-all mb-4 scrollbar-custom ${
                  openDropdown === id
                    ? "max-h-[36rem] translate-y-0 opacity-100 overflow-y-auto"
                    : "max-h-0 -translate-y-4 opacity-0"
                }`}
              >
                {sections.map(({ itemId, icon: Icon, label }) => (
                  <li key={itemId}>
                    <a
                      className="flex items-center gap-4 py-2 px-8 text-lg font-medium rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                      href={`/${id}#${itemId}`}
                    >
                      <Icon className="size-6" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
