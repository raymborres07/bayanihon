"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function BayanihonLogo() {
  return (
    <Link href="/" className="flex items-center group -ml-4">
      <div className="relative h-20 w-64">
        <Image
          src="/logo.png"
          alt="Bayanihon"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}

interface NavItemProps {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

function NavItem({ label, href, children }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) {
    return (
      <Link
        href={href || "#"}
        className="hover:opacity-80 transition-opacity whitespace-nowrap"
      >
        {label}
      </Link>
    );
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:opacity-80 transition-opacity whitespace-nowrap">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 pt-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
        <div className="bg-background border border-highlight/20 rounded-2xl shadow-xl p-4 min-w-[200px] flex flex-col gap-3">
          {children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              className="text-sm hover:text-accent transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [language, setLanguage] = useState<"EN" | "JP" | "PH">("EN");

  const navItems: NavItemProps[] = [
    { label: "About Us", href: "#about" },
    {
      label: "JUMPStart!",
      children: [
        { label: "Program Details", href: "#program-details" },
        { label: "Application Form", href: "#application-form" },
        { label: "Testimonials", href: "#testimonials" },
      ]
    },
    {
      label: "Resources",
      children: [
        { label: "Application Guides", href: "#guides" },
        { label: "Info Session Recordings", href: "#recordings" },
        { label: "Japan 101", href: "#japan-101" },
      ]
    },
    {
      label: "Community",
      children: [
        { label: "Meet the Team", href: "#team" },
      ]
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full py-6 px-6 md:px-12 lg:px-20 z-50 bg-transparent">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <BayanihonLogo />

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-highlight font-bold">
            {navItems.map((item, index) => (
              <div key={item.label} className="flex items-center gap-4">
                <NavItem {...item} />
                {index < navItems.length - 1 && (
                  <span className="text-highlight/40 text-xs">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="#connect"
            className="px-8 py-2.5 rounded-full border border-highlight text-highlight font-bold hover:bg-highlight hover:text-white transition-all duration-300"
          >
            Connect
          </Link>

          <div className="flex items-center gap-2 text-sm font-black text-highlight">
            <button
              onClick={() => setLanguage("EN")}
              className={`${language === "EN" ? "opacity-100 underline underline-offset-4" : "opacity-50"
                } hover:opacity-100 transition-opacity`}
            >
              EN
            </button>
            <span className="opacity-50">/</span>
            <button
              onClick={() => setLanguage("PH")}
              className={`${language === "PH" ? "opacity-100 underline underline-offset-4" : "opacity-50"
                } hover:opacity-100 transition-opacity`}
            >
              PH
            </button>
            <span className="opacity-50">/</span>
            <button
              onClick={() => setLanguage("JP")}
              className={`${language === "JP" ? "opacity-100 underline underline-offset-4" : "opacity-50"
                } hover:opacity-100 transition-opacity`}
            >
              JP
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
