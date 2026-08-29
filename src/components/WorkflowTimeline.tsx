'use client';
import React from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    phase: 'AUDIT & ONBOARD',
    title: 'Systems & Access Mapping',
    desc: '90-min deep dive, credential transfer via 1Password, and priority channels established.',
  },
  {
    num: '02',
    phase: 'QUICK-WIN SPRINT',
    title: 'Week-1 Backlog Cleanup',
    desc: 'First 5 core SOPs documented, inbox triage rules set, and 5–10 hours immediately reclaimed.',
  },
  {
    num: '03',
    phase: 'DAILY ASYNC CADENCE',
    title: 'Morning Briefs & Handoffs',
    desc: 'Daily prioritized summaries, bite-sized Loom walkthroughs, and 24h standard request turnaround.',
  },
  {
    num: '04',
    phase: 'SCALE & AUTOMATE',
    title: 'Compounding Efficiency',
    desc: 'Bi-weekly async retrospectives to eliminate recurring friction and automate workflows.',
  },
];

export default function WorkflowTimeline() {
  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#E5DCD2] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-[#1A1615]/20"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A]">
                COLLABORATION PROTOCOL
              </span>
              <span className="font-handwriting text-lg text-[#C45B3A] font-bold -rotate-2">
                ✦ simple &amp; seamless ⚡
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
              Frictionless Onboarding. <span className="text-[#C45B3A]">Asynchronous Precision.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono-custom font-bold text-[#1A1615]">
              100% ASYNC READY
            </span>
          </div>
        </motion.div>

        {/* Editorial Horizontal Step Flow with Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 border-t-2 border-[#1A1615]">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="space-y-2"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-playfair font-black text-3xl text-[#C45B3A]">
                  {s.num}
                </span>
                <span className="text-[10px] font-mono-custom font-bold text-[#756D63] uppercase tracking-wider">
                  {s.phase}
                </span>
              </div>
              <h3 className="font-playfair font-bold text-lg text-[#1A1615] leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-[#524B43] leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
