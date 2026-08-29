'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDownRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  DoodleSparkle,
  DoodleStar,
  DoodleTwirlyArrow,
  DoodleCurvedArrow,
  DoodlePaperPlane,
} from './Doodles/Doodles';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'quickFacts'>('overview');

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-16 sm:pb-24 border-b border-[#E5DCD2] bg-[#FBF8F3]">
      
      {/* Background Watermark Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-0 opacity-[0.035] text-[18vw] font-black font-playfair uppercase tracking-tighter whitespace-nowrap text-[#1A1615]">
        CIVREL MARLYNETTE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Mobile-First & 2-Column Desktop Editorial Spread */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[660px]">
          
          {/* Section 1: Editorial Headline & Manifesto (Always Top on Mobile / Left Column on Desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 pt-2 sm:pt-0 w-full order-1 relative">
            
            {/* Cute Flying Paper Plane Doodle */}
            <div className="hidden sm:block absolute -top-4 right-12 z-20 pointer-events-none">
              <DoodlePaperPlane size={56} color="#C45B3A" />
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 relative"
            >
              <h1 className="font-playfair text-3xl sm:text-5xl xl:text-7xl font-black text-[#1A1615] leading-[1.08] tracking-tight">
                The Digital <br />
                <span className="font-serif italic font-normal text-[#C45B3A]">Operating System</span> <br />
                For Visionaries.
                <DoodleSparkle className="inline-block ml-2 text-[#C45B3A] animate-pulse" size={32} />
              </h1>

              {/* Hand-written / Editorial Subtitle */}
              <div className="border-l-2 border-[#C45B3A] pl-3 sm:pl-4 py-1">
                <p className="font-serif italic text-base sm:text-xl text-[#3D4A3E] font-medium leading-snug">
                  &ldquo;Transforming executive chaos into calm clarity, seamless Notion architectures, and elevated brand execution.&rdquo;
                </p>
                <span className="text-[10px] sm:text-[11px] font-mono-custom text-[#756D63] block mt-1 uppercase tracking-wider">
                  — CIVREL MARLYNETTE FETALINO
                </span>
              </div>
            </motion.div>

            {/* Desktop Only: Value Proposition, Capabilities & CTAs */}
            <div className="hidden lg:flex flex-col space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-sm sm:text-base text-[#524B43] leading-relaxed max-w-xl"
              >
                I partner with high-growth founders, creative directors, and boutique agencies as a strategic right hand. From high-stakes calendar mastery and automated Notion workspaces to creative content production and product launches.
              </motion.p>

              {/* Quick Capability Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-xl"
              >
                {[
                  'Executive Calendar Ops',
                  'Notion Systems Architect',
                  'Creative Content & Figma',
                  'VIP Client Concierge',
                  'Launch Management',
                  'Inbox Zero Daily Protocol',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-[#F4EFE6] border border-[#E5DCD2] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-2xs hover:border-[#1A1615] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B3A] flex-shrink-0" />
                    <span className="text-[11px] font-mono-custom text-[#1A1615] font-medium truncate">
                      {skill}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Action Cluster */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap items-center gap-4 pt-2 relative"
              >
                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-[#1A1615] text-[#FBF8F3] hover:bg-[#C45B3A] text-xs font-mono-custom font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>BOOK A DISCOVERY CALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#services"
                  className="px-5 py-3.5 bg-transparent border-2 border-[#1A1615] hover:bg-[#1A1615] hover:text-[#FBF8F3] text-[#1A1615] text-xs font-mono-custom font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-2"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                {/* Cute Handwritten Note & Twirly Arrow */}
                <div className="hidden sm:flex items-center gap-1.5 pl-2">
                  <DoodleTwirlyArrow width={36} height={24} color="#C45B3A" />
                  <span className="font-handwriting text-xl text-[#C45B3A] font-bold -rotate-3">
                    let&apos;s build magic! ✦
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Section 2: Fullbody Image Showcase & Layered Collage (Directly Visible on Mobile & Right on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex items-end justify-center w-full order-2 py-4 sm:py-0"
          >
            {/* Collage Background Elements */}
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[600px] mx-auto">
              
              {/* Layer 1: Editorial Tape Clipping the Top-Left Corner of White Card */}
              <div className="absolute top-4 left-1 sm:top-7 sm:left-4 z-30 transform -rotate-[28deg]">
                <div className="bg-[#1A1615] text-[#FBF8F3] text-[8px] sm:text-[10px] font-mono-custom font-bold px-3 sm:px-4 py-0.5 sm:py-1 shadow-xl uppercase tracking-wider rounded-xs border-b border-stone-700">
                  PORTFOLIO ARCHIVE • 2026
                </div>
              </div>

              {/* Layer 2: Editorial Frame Backing */}
              <div className="absolute inset-x-2 inset-y-3 sm:inset-x-4 sm:inset-y-6 bg-[#EFE9DF] rounded-2xl border-2 border-[#D3C9BD] -rotate-1 shadow-md -z-10"></div>
              <div className="absolute inset-x-3 inset-y-4 sm:inset-x-8 sm:inset-y-8 bg-white rounded-xl border border-[#E5DCD2] rotate-2 shadow-sm -z-10"></div>

              {/* Layer 3: Main Fullbody Cutout Image with Bottom Gradient Fade */}
              <div className="relative z-10 flex justify-center items-end">
                <div className="relative w-full aspect-[3/4] h-[460px] sm:h-[620px] lg:h-[760px] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]">
                  <Image
                    src="/assets/fullbody.png"
                    alt="Civrel Marlynette Fetalino - Executive & Creative Virtual Assistant"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                    className="object-contain object-bottom drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Layer 4: Spotify Track Card (Compact & Perfectly Sized - Zero Empty Space) */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 3 }}
                animate={{ opacity: 1, x: 0, rotate: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute top-[34%] sm:top-[38%] -right-1 sm:-right-6 md:-right-10 z-20 w-[155px] sm:w-[210px] h-[84px] sm:h-[118px] hover:rotate-0 transition-transform duration-300 drop-shadow-xl overflow-hidden rounded-xl bg-[#282828]"
              >
                {/* Cute Handwritten Note Above Spotify Player */}
                <div className="w-[280px] h-[152px] origin-top-left scale-[0.55] sm:scale-[0.75]">
                  <iframe
                    data-testid="embed-iframe"
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/6aJn7Cst74cj4lNIiPRgav?utm_source=generator&theme=0"
                    width="280"
                    height="152"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="w-[280px] h-[152px]"
                  />
                </div>
              </motion.div>

              {/* Cute Handwritten Label + Arrow for Spotify Player */}
              <div className="hidden sm:flex items-center gap-1 absolute top-[30%] -right-8 z-30 transform rotate-6 pointer-events-none">
                <span className="font-handwriting text-lg text-[#C45B3A] font-bold">
                  on repeat 🎧
                </span>
                <DoodleCurvedArrow width={28} height={20} color="#C45B3A" />
              </div>

              {/* Layer 5: Floating Polaroid Badge (Positioned below forearm in open space) */}
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -8 }}
                animate={{ opacity: 1, x: 0, rotate: -4 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-[58%] sm:top-[60%] left-2 sm:left-6 md:left-8 z-20 hover:rotate-0 transition-transform duration-300"
              >
                <div className="polaroid-frame max-w-[115px] sm:max-w-[145px] bg-white rounded shadow-xl p-1.5 sm:p-2 relative">
                  <div className="relative w-full h-16 sm:h-20 bg-stone-100 rounded overflow-hidden mb-1.5 border border-stone-200">
                    <Image
                      src="/assets/collage/laptop-work.jpg"
                      alt="Operations workspace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-mono-custom font-bold text-[#1A1615] leading-tight">
                    Executive Systems
                  </div>
                  <div className="text-[7px] sm:text-[8px] font-mono-custom text-[#C45B3A] uppercase tracking-wider">
                    Notion • Asana • Slack
                  </div>

                  {/* Handwritten Mini Annotation */}
                  <div className="absolute -bottom-5 left-0 transform -rotate-6 pointer-events-none whitespace-nowrap">
                    <span className="font-handwriting text-sm text-[#3D4A3E] font-bold">
                      systems + clarity ✨
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Section 3: Mobile-Only Value Proposition, Capabilities & CTAs (Directly Following Image) */}
          <div className="lg:hidden flex flex-col space-y-6 w-full order-3 pt-2">
            <p className="text-sm text-[#524B43] leading-relaxed">
              I partner with high-growth founders, creative directors, and boutique agencies as a strategic right hand. From high-stakes calendar mastery and automated Notion workspaces to creative content production and product launches.
            </p>

            {/* Quick Capability Tags */}
            <div className="grid grid-cols-2 gap-2">
              {[
                'Executive Calendar Ops',
                'Notion Systems Architect',
                'Creative Content & Figma',
                'VIP Client Concierge',
                'Launch Management',
                'Inbox Zero Daily Protocol',
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-[#F4EFE6] border border-[#E5DCD2] rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C45B3A] flex-shrink-0" />
                  <span className="text-[10px] font-mono-custom text-[#1A1615] font-medium truncate">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Action Cluster */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#contact"
                className="px-5 py-3.5 bg-[#1A1615] text-[#FBF8F3] hover:bg-[#C45B3A] text-xs font-mono-custom font-bold uppercase tracking-wider rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group text-center"
              >
                <span>BOOK A DISCOVERY CALL</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-5 py-3.5 bg-transparent border-2 border-[#1A1615] hover:bg-[#1A1615] hover:text-[#FBF8F3] text-[#1A1615] text-xs font-mono-custom font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
