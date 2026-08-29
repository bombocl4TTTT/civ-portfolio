'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          <span className="font-handwriting text-sm tracking-wide text-[#C45B3A] font-bold -mt-0.5">
            Executive &amp; Creative VA ✦
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

        {/* Animated 3-Line Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 p-2 text-[#1A1615] hover:text-[#C45B3A] transition-colors flex-shrink-0 rounded-md focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Top Line */}
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-6 h-[2px] bg-[#1A1615] rounded-full origin-center"
          />
          {/* Middle Line */}
          <motion.span
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[2px] bg-[#1A1615] rounded-full origin-center"
          />
          {/* Bottom Line */}
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-6 h-[2px] bg-[#1A1615] rounded-full origin-center"
          />
        </button>
      </div>

      {/* Mobile Drawer with Smooth Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#F4EFE6] border-b border-[#E5DCD2] px-6 py-6 overflow-hidden"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="flex flex-col gap-3"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -10 },
                  }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold tracking-wider uppercase text-[#1A1615] hover:text-[#C45B3A] py-2 border-b border-[#E5DCD2]/60 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C45B3A] text-xs">→</span>
                </motion.a>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 10 },
                }}
                className="pt-3 flex flex-col gap-2.5"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center text-xs font-bold uppercase py-3.5 bg-[#1A1615] hover:bg-[#C45B3A] text-[#FBF8F3] rounded shadow-md transition-colors"
                >
                  Book Discovery Call
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
