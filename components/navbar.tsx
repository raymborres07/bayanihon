"use client";

import Link from "next/link";
import { useState } from "react";

function BayanihonLogo() {
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <span className="text-xl font-medium tracking-tight text-foreground">
        bayanih
        <span className="relative inline-block">
          o
          <svg
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="10" r="5" fill="#E07B54" />
            <path
              d="M8 5 Q10 3, 12 4"
              stroke="#3D4A3A"
              strokeWidth="1.5"
              fill="none"
            />
            <ellipse cx="12" cy="4" rx="2" ry="1" fill="#6B7B5B" />
          </svg>
        </span>
        n
      </span>
    </Link>
  );
}

export function Navbar() {
  const [language, setLanguage] = useState<"EN" | "JP">("EN");

  return (
    <header className="w-full py-6 px-6 md:px-12 lg:px-20">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <BayanihonLogo />

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link
              href="#about"
              className="hover:text-foreground transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link
              href="#projects"
              className="hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <span className="text-muted-foreground/50">•</span>
            <Link
              href="#community"
              className="hover:text-foreground transition-colors"
            >
              Community
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#connect"
            className="px-5 py-2 rounded-full border-2 border-accent text-accent font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Connect
          </Link>

          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLanguage("EN")}
              className={`${language === "EN"
                ? "text-accent font-medium"
                : "text-muted-foreground"
                } hover:text-accent transition-colors`}
            >
              EN
            </button>
            <span className="text-muted-foreground">/</span>
            <button
              onClick={() => setLanguage("JP")}
              className={`${language === "JP"
                ? "text-accent font-medium"
                : "text-muted-foreground"
                } hover:text-accent transition-colors`}
            >
              JP
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
