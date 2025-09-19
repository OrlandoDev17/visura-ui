type InputType = "text" | "email" | "password";

interface InputProps {
  type: InputType;
  label?: string;
  placeholder?: string;
  className?: string;
}

export function Input({
  type = "text",
  label,
  placeholder,
  className,
}: InputProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor="inputId">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        id="inputId"
        placeholder={placeholder}
        className={`py-2 px-4 border border-slate-300 rounded-lg focus:border-slate-500 transition-all focus:outline-none ${className}`}
      />
    </label>
  );
}
