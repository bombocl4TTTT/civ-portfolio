'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Lanyard from './Lanyard';
import CurvedLoop from './CurvedLoop';
import { DoodleSparkle, DoodleStar, DoodleCurvedArrow, DoodleTwirlyArrow } from './Doodles/Doodles';

const CAPABILITIES = [
  {
    title: 'Executive Calendar & Inbox Control',
    desc: 'Guarding calendar focus buffers, priority triage, and maintaining Inbox Zero daily before 9:00 AM.',
  },
  {
    title: 'Notion Systems & SOP Architecture',
    desc: 'Engineering relational workspaces, client portals, and documented operating procedures.',
  },
  {
    title: 'Creative Direction & Brand Assets',
    desc: 'Producing high-taste pitch decks, Figma templates, newsletters, and editorial social carousels.',
  },
  {
    title: 'Launch Orchestration & VIP Care',
    desc: 'Managing timeline sprints, digital product drops, and white-glove client concierge support.',
  },
];

const TOOLS = ['Notion', 'Asana', 'Figma', 'Slack', 'Zapier', 'Google Workspace', 'Shopify', 'Klaviyo'];

export default function AboutCollage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-80px' });

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#E5DCD2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative pb-6 mb-8 border-b border-[#1A1615]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4"
        >
          <div>
            <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A] block mb-1">
              OPERATIONAL MANIFESTO
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
              Civrel Marlynette Fetalino
            </h2>
          </div>
          <div className="text-left sm:text-right pt-1 sm:pt-0">
            <span className="font-serif italic text-base sm:text-xl text-[#3D4A3E] block">
              Strategic Executive &amp; Creative Right Hand
            </span>
          </div>
        </motion.div>

        {/* 2-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pt-0">
          
          {/* Left Column: Lanyard Hanging with Connected Lace and Scroll Bounce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex flex-col items-center select-none pointer-events-auto -mt-8 sm:-mt-8"
          >
            {/* Minimalist Mount Ring on the Horizontal Line */}
            <div className="w-4 h-4 rounded-full bg-[#1A1615] border-2 border-[#F4EFE6] shadow-sm flex items-center justify-center z-30">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C45B3A]"></div>
            </div>

            {/* Continuous Lace Strap Connector Fusing the Ring to 3D Lanyard */}
            <div className="w-3.5 h-10 sm:h-12 bg-[#1A1615] -mt-2 rounded-b-xs shadow-xs z-20 border-x border-stone-800"></div>

            {/* 3D Lanyard Canvas (Compact on Mobile - Zero Empty Space) */}
            <div className="w-full h-[260px] sm:h-[400px] -mt-8 sm:-mt-10 relative">
              <Lanyard
                position={[0, 0.4, 20]}
                gravity={[0, -40, 0]}
                fov={22}
                frontImage="/assets/badge-front.png"
                backImage="/assets/badge-back.png"
                imageFit="cover"
                lanyardImage="/assets/lanyard/lanyard.png"
                lanyardWidth={1.3}
                triggerBounce={isInView}
              />

              {/* Cute Handwritten Note & Arrow beside Lanyard */}
              <div className="hidden sm:flex items-center gap-1.5 absolute bottom-4 right-4 z-20 transform rotate-6 pointer-events-none">
                <DoodleCurvedArrow width={28} height={20} color="#C45B3A" flipX />
                <span className="font-handwriting text-base text-[#C45B3A] font-bold">
                  grab &amp; swing me! 🏷️
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 pt-0 lg:pt-4"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#1A1615] leading-relaxed font-normal">
              I partner with founders, creative directors, and boutique agencies to transform operational friction into calm, automated clarity — reclaiming <span className="text-[#C45B3A] font-semibold underline decoration-1 underline-offset-4">15+ hours every week</span> for deep strategic vision.
            </p>

            {/* Editorial Typographic Capability Rows */}
            <div className="border-t border-[#1A1615]/20 divide-y divide-[#1A1615]/10">
              {CAPABILITIES.map((cap, idx) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
                >
                  <h3 className="sm:col-span-5 font-mono-custom text-xs font-bold text-[#1A1615] uppercase tracking-wider">
                    {cap.title}
                  </h3>
                  <p className="sm:col-span-7 text-xs text-[#524B43] leading-relaxed">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

        {/* Full-Width Wavy Curved Loop Marquee */}
        <div className="w-screen relative left-1/2 -translate-x-1/2 mt-6 pt-4 pb-2 border-t border-[#1A1615]/15 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
            <span className="text-[10px] sm:text-xs font-mono-custom font-bold text-[#756D63] uppercase tracking-widest">
              CORE TOOL STACK &amp; SYSTEMS ARCHITECTURE
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono-custom text-[#C45B3A] uppercase tracking-wider">
              ✦ INTERACTIVE MARQUEE (DRAG TO SCROLL)
            </span>
          </div>
          <div className="w-full py-2">
            <CurvedLoop
              marqueeText="NOTION • ASANA • FIGMA • SLACK • ZAPIER • GOOGLE WORKSPACE • SHOPIFY • KLAVIYO • "
              speed={2.2}
              curveAmount={35}
              direction="left"
              interactive={true}
              className="font-mono-custom font-black tracking-widest fill-[#1A1615] hover:fill-[#C45B3A] transition-colors"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
