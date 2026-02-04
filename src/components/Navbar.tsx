"use client";

import { useState } from "react";
import { Zap, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#areas", label: "Service Areas" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-electric-blue/10 border border-electric-blue/30 flex items-center justify-center group-hover:bg-electric-blue/20 transition-colors">
              <Zap className="w-5 h-5 text-electric-yellow" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight">
                Power<span className="text-electric-blue">Flow</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted leading-none">
                Electric
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-light"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+12065550187"
              className="flex items-center gap-2 text-sm text-electric-yellow font-semibold hover:text-electric-yellow-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              (206) 555-0187
            </a>
            <a
              href="#contact"
              className="bg-electric-blue hover:bg-electric-blue-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-electric-blue/25"
            >
              Free Estimate
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-surface border-t border-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm text-muted hover:text-foreground hover:bg-surface-light rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-border mt-3 space-y-3">
              <a
                href="tel:+12065550187"
                className="flex items-center gap-2 px-4 py-3 text-electric-yellow font-semibold"
              >
                <Phone className="w-4 h-4" />
                (206) 555-0187
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-electric-blue text-white px-5 py-3 rounded-lg font-semibold"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
