import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between relative bg-slate-800 text-white rounded-lg p-4 text-sm font-mono overflow-auto">
      <pre>
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className=" bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition cursor-pointer"
      >
        {copied ? "Copiado!" : "Copiar"}
      </button>
    </div>
  );
}
