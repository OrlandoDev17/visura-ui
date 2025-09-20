import { Typography } from "./Typography";

interface ModalProps {
  theme?: "light" | "dark";
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  setIsOpen: (isOpen: boolean) => void;
}

export function Modal({
  theme,
  children,
  isOpen,
  title,
  setIsOpen,
}: ModalProps) {
  const ToggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article
      className={`flex flex-col gap-6 p-8 rounded-xl max-w-lg w-full  z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-700 text-white border border-white/20"
          : "bg-slate-200 border border-black/50"
      } ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <header
        className={`flex items-center justify-between pb-4 border-b-2 ${
          theme === "dark" ? "border-white/20" : "border-black/50"
        }`}
      >
        <Typography as="h3" variant="heading">
          {title}
        </Typography>
        <button onClick={ToggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={`size-11 p-2 rounded-lg hover:text-red-500 transition-all cursor-pointer 
                  ${
                    theme === "dark"
                      ? "hover:bg-slate-600"
                      : "hover:bg-gray-300"
                  }`}
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </header>
      {children}
    </article>
  );
}
