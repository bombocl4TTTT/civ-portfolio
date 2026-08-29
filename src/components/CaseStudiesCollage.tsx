'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  tag: string;
  metric: string;
  metricLabel: string;
  image: string;
  summary: string;
  before: string;
  after: string;
  tools: string[];
}

const CASES: CaseStudy[] = [
  {
    id: 'case-01',
    client: 'Silicon Valley SaaS Founder',
    industry: 'Tech & Venture',
    title: 'Executive Calendar & Inbox Restructure',
    tag: 'EXECUTIVE OPS',
    metric: '+14 hrs/wk',
    metricLabel: 'Focus Time Reclaimed',
    image: '/assets/collage/executive-desk.jpg',
    summary: 'Audited 800+ email backlog, introduced triage filters, and established strict meeting buffers.',
    before: 'Overwhelmed with 60+ weekly meeting requests and 200+ unread emails daily.',
    after: 'Consistent Inbox Zero by 9:00 AM and 3 dedicated deep-work blocks protected every week.',
    tools: ['Google Workspace', 'Superhuman', 'Notion', 'Slack'],
  },
  {
    id: 'case-02',
    client: 'Creative Branding Agency',
    industry: 'Design & Marketing',
    title: 'Multi-Client Notion Master OS & Wiki',
    tag: 'SYSTEMS ARCHITECTURE',
    metric: '40+ SOPs',
    metricLabel: 'Automated Workflows',
    image: '/assets/collage/studio-office.jpg',
    summary: 'Engineered a unified relational Notion workspace connecting client pipelines, briefs, and contractor tasks.',
    before: 'Scattered Google Docs, lost client feedback, and messy contractor handoffs.',
    after: 'Single source of truth with automated progress sync and Loom-guided SOP library.',
    tools: ['Notion', 'Loom', 'Figma', 'Zapier'],
  },
  {
    id: 'case-03',
    client: 'DTC E-Commerce Apparel Brand',
    industry: 'Lifestyle & Retail',
    title: 'Black Friday Campaign Launch Command',
    tag: 'LAUNCH SPRINT',
    metric: '100% On-Time',
    metricLabel: 'Multi-Channel Drop',
    image: '/assets/collage/laptop-work.jpg',
    summary: 'Orchestrated inventory drops, email broadcasts, and VIP customer concierge escalation flows.',
    before: 'High anxiety around cart drops, inventory sync errors, and unorganized email scheduling.',
    after: 'Flawless 3-day product drop with zero checkout errors and 2h average customer support resolution.',
    tools: ['Shopify', 'Klaviyo', 'Canva Pro', 'Asana'],
  },
  {
    id: 'case-04',
    client: 'Executive Coaching Practice',
    industry: 'Consulting & Education',
    title: 'VIP Client Concierge & Onboarding Flow',
    tag: 'CLIENT EXPERIENCE',
    metric: '4.9 / 5.0',
    metricLabel: 'Client Satisfaction',
    image: '/assets/collage/coffee-journal.jpg',
    summary: 'Built an automated onboarding pipeline handling welcome packages, scheduling, and invoicing.',
    before: 'Manual back-and-forth emails, missed contract signatures, and clunky client setup.',
    after: 'Automated 1-click welcome sequence, instant contract signing, and branded onboarding portals.',
    tools: ['Notion', 'Stripe', 'Google Drive', 'Calendly'],
  },
];

export default function CaseStudiesCollage() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] border-b border-[#E5DCD2] relative">
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
                SELECTED CASE STUDIES
              </span>
              <span className="font-handwriting text-lg text-[#C45B3A] font-bold -rotate-2">
                ✦ real systems in action ✨
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
              Measurable Outcomes. <span className="italic font-normal text-[#3D4A3E]">Proven Track Record.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono-custom font-bold text-[#1A1615]">
              VERIFIED PORTFOLIO
            </span>
          </div>
        </motion.div>

        {/* Compact 4-Card Grid with Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CASES.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedCase(cs)}
              className="bg-white rounded-xl border border-[#E5DCD2] p-4 shadow-sm hover:shadow-md hover:border-[#1A1615] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail with Metric Overlay */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-3 border border-[#E5DCD2] bg-stone-100">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#1A1615]/90 backdrop-blur-sm text-white px-2.5 py-1 rounded shadow text-[10px] font-mono-custom flex items-center gap-1.5">
                    <span className="font-bold text-[#E5C378]">{cs.metric}</span>
                    <span className="text-stone-300 text-[9px]">• {cs.metricLabel}</span>
                  </div>
                </div>

                {/* Subtitle */}
                <span className="text-[10px] font-mono-custom font-bold uppercase text-[#C45B3A] block mb-1">
                  {cs.industry}
                </span>

                {/* Title */}
                <h3 className="font-playfair font-bold text-base text-[#1A1615] leading-snug mb-2 group-hover:text-[#C45B3A] transition-colors">
                  {cs.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-[#524B43] leading-relaxed line-clamp-2 mb-3">
                  {cs.summary}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-2.5 border-t border-[#E5DCD2]/70 flex items-center justify-between text-[11px] font-mono-custom font-semibold text-[#1A1615]">
                <span>View Results</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C45B3A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1615]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#1A1615] relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono-custom font-bold uppercase text-[#C45B3A] block mb-1">
                CASE STUDY // {selectedCase.industry}
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#1A1615] mb-2 leading-tight">
                {selectedCase.title}
              </h3>
              <p className="text-xs text-[#756D63] font-medium mb-4">
                Client: {selectedCase.client}
              </p>

              <div className="bg-[#1A1615] text-[#FBF8F3] p-4 rounded-xl mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-custom text-stone-400 block uppercase">
                    OUTCOME
                  </span>
                  <span className="text-2xl font-playfair font-black text-[#E5C378]">
                    {selectedCase.metric}
                  </span>
                </div>
                <span className="text-xs font-mono-custom text-stone-300">
                  {selectedCase.metricLabel}
                </span>
              </div>

              <div className="space-y-3 mb-6 text-xs text-[#524B43]">
                <div className="bg-red-50/70 p-3 rounded-lg border border-red-200/60">
                  <span className="font-mono-custom font-bold text-red-800 uppercase block mb-1">
                    The Problem
                  </span>
                  <p>{selectedCase.before}</p>
                </div>
                <div className="bg-emerald-50/70 p-3 rounded-lg border border-emerald-200/60">
                  <span className="font-mono-custom font-bold text-emerald-800 uppercase block mb-1">
                    The Solution &amp; Impact
                  </span>
                  <p>{selectedCase.after}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedCase.tools.map((t) => (
                  <span key={t} className="bg-[#F4EFE6] text-[#1A1615] px-2.5 py-1 rounded text-[10px] font-mono-custom border border-[#E5DCD2]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedCase(null)}
                  className="flex-1 py-2.5 bg-[#1A1615] text-white text-xs font-mono-custom font-bold uppercase rounded text-center hover:bg-[#C45B3A] transition-colors"
                >
                  Discuss a Similar Scope
                </a>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-xs font-mono-custom font-bold uppercase rounded text-stone-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
