'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'The Dossier', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Praise', href: '#praise' },
  { label: 'FAQ', href: '#faq' },
];

export default function HeaderNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FBF8F3]/90 backdrop-blur-md border-b border-[#E5DCD2] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Editorial Brand Masthead */}
        <Link href="/" className="group flex flex-col flex-shrink-0">
          <span className="font-playfair font-black text-xl sm:text-2xl tracking-tight text-[#1A1615] group-hover:text-[#C45B3A] transition-colors">
            CIVREL MARLYNETTE
          </span>
          <span className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-[#8C8275]">
            Executive &amp; Creative VA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 flex-shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold tracking-wider uppercase text-[#524B43] hover:text-[#C45B3A] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C45B3A] hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <a
            href="#contact"
            className="text-xs font-bold tracking-wider uppercase px-4 py-2 bg-[#1A1615] text-[#FBF8F3] hover:bg-[#C45B3A] transition-all rounded shadow-sm flex items-center gap-1.5 group whitespace-nowrap flex-shrink-0"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#1A1615] hover:text-[#C45B3A] transition-colors flex-shrink-0"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F4EFE6] border-b border-[#E5DCD2] px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold tracking-wider uppercase text-[#1A1615] hover:text-[#C45B3A] py-1 border-b border-[#E5DCD2]/60"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center text-xs font-bold uppercase py-3 bg-[#1A1615] text-[#FBF8F3] rounded"
              >
                Book Discovery Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
