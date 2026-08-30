'use client';
import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export default function FooterColophon() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1615] text-[#FBF8F3] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#332C2A] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Colophon Masthead */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Editorial Bio */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-mono-custom text-[11px] text-[#E5C378] font-bold uppercase tracking-widest block">
              CIVREL MARLYNETTE FETALINO
            </span>
            <h3 className="font-playfair text-3xl sm:text-4xl font-black text-white leading-tight">
              CIVREL M. FETALINO
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Strategic Executive &amp; Creative Virtual Assistant. Engineered for high-growth founders, creative directors, and boutique agencies worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:civrelmarlynette@gmail.com"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#C45B3A] text-white flex items-center justify-center transition-colors"
                aria-label="Email Civrel"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#C45B3A] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[#C45B3A] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Nav Directory */}
          <div className="md:col-span-3 space-y-3 font-mono-custom text-xs">
            <span className="text-[#A89F91] font-bold uppercase tracking-wider block">
              PORTFOLIO SECTIONS
            </span>
            <ul className="space-y-2 text-stone-300">
              <li><a href="#about" className="hover:text-[#E5C378] transition-colors">Manifesto &amp; Bio</a></li>
              <li><a href="#services" className="hover:text-[#E5C378] transition-colors">Signature Suites</a></li>
              <li><a href="#case-studies" className="hover:text-[#E5C378] transition-colors">Case Studies</a></li>
              <li><a href="#workflow" className="hover:text-[#E5C378] transition-colors">How We Work</a></li>
              <li><a href="#praise" className="hover:text-[#E5C378] transition-colors">Client Praise</a></li>
              <li><a href="#faq" className="hover:text-[#E5C378] transition-colors">Inquiries &amp; FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#E5C378] transition-colors">Inquire &amp; Book</a></li>
            </ul>
          </div>

          {/* Core Competencies & Location */}
          <div className="md:col-span-4 space-y-3 font-mono-custom text-xs">
            <span className="text-[#A89F91] font-bold uppercase tracking-wider block">
              SPECIFICATIONS
            </span>
            <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-2 text-stone-300">
              <div className="flex justify-between">
                <span className="text-stone-500">OPERATIONAL HUB:</span>
                <span className="font-semibold text-white">Manila, PH (GMT+8)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">CLIENT COVERAGE:</span>
                <span className="font-semibold text-[#E5C378]">US • UK • AU • ASIA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">CLEARANCE:</span>
                <span className="font-semibold text-emerald-400">100% NDA Protected</span>
              </div>
            </div>
            <div className="pt-2">
              <span className="text-[10px] text-stone-500 block">
                TYPOGRAPHY: Patrick Hand, Plus Jakarta Sans &amp; Space Mono.
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-custom text-stone-500">
          <div>
            <span>© {new Date().getFullYear()} Civrel Marlynette Fetalino. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-stone-900 hover:bg-[#C45B3A] text-stone-300 hover:text-white rounded-full border border-stone-800 transition-all group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
