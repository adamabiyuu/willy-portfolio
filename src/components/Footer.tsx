import { ArrowUp } from "lucide-react";
import { portfolio } from "../data/portfolio";

type Props = { dark: boolean };

export default function Footer({ dark }: Props) {
  return (
    <footer className={`border-t px-5 py-6 sm:px-8 lg:px-12 ${dark ? "border-white/10" : "border-gray-200"}`}>
      <div className="mx-auto flex w-full flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a href="#beranda" className="font-bold">
          {portfolio.name}
          <span className="text-lime-400">.</span>
        </a>

        <p className="text-xs text-gray-500 sm:text-sm">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>

        <a href="#beranda" className="inline-flex items-center gap-2 text-sm text-lime-500 hover:text-lime-400">
          Kembali ke atas <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
