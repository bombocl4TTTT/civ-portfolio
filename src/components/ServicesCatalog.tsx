'use client';
import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DoodleSparkle, DoodleStar } from './Doodles/Doodles';

interface ServiceSuite {
  id: string;
  number: string;
  title: string;
  tagline: string;
  turnaround: string;
  overview: string;
  deliverables: string[];
  sampleDeliverable: {
    title: string;
    description: string;
    highlights: string[];
  };
}

const SERVICES: ServiceSuite[] = [
  {
    id: 'executive-ops',
    number: '01',
    title: 'Executive Calendar & Inbox Control',
    tagline: 'Guarding calendar buffers, meeting gatekeeping & maintaining Inbox Zero daily.',
    turnaround: 'Daily by 9:00 AM',
    overview: 'Complete sovereignty over your schedule, meeting requests, and executive communication channels.',
    deliverables: [
      'Daily 2x Inbox Zero triage & VIP priority flagging',
      'Strategic calendar buffering & meeting gatekeeping',
      'VIP client booking links & travel itinerary coordination',
    ],
    sampleDeliverable: {
      title: 'Executive Inbox Protocol & Triage Filter Matrix',
      description: 'A customized email ruleset and label hierarchy categorizing 500+ daily emails into Action Required, Waiting on Others, or Archive.',
      highlights: ['Response SLA under 2 hours for tier-1 contacts', 'Zero spam or unsolicited pitch decks in main inbox', 'Daily morning 3-bullet priority briefing'],
    },
  },
  {
    id: 'notion-systems',
    number: '02',
    title: 'Notion Systems & SOP Architecture',
    tagline: 'Custom relational workspaces, client onboarding portals & documented wikis.',
    turnaround: '3–5 Day Sprints',
    overview: 'Engineering interconnected workspaces that allow your business to run like clockwork.',
    deliverables: [
      'Relational Notion workspace architecture & databases',
      'Loom-documented Standard Operating Procedures (SOPs)',
      'Client onboarding portals with automated trackers',
    ],
    sampleDeliverable: {
      title: 'Agency Master OS & Client Portal',
      description: 'An end-to-end Notion workspace unifying project roadmaps, client deliverables, contractor invoices, and knowledge bases.',
      highlights: ['Automatic progress bar sync with milestone completion', 'Role-based permission views for external clients', 'Integrated Loom SOP video library for new hires'],
    },
  },
  {
    id: 'creative-content',
    number: '03',
    title: 'Creative Direction & Content Operations',
    tagline: 'High-taste pitch decks, Figma templates, newsletters & social collateral.',
    turnaround: '24–48h SLA',
    overview: 'Producing high-taste marketing collateral, Figma templates, presentation decks, and newsletters.',
    deliverables: [
      'Figma & Canva Pro branded deck & carousel templates',
      'ConvertKit / Klaviyo newsletter formatting & scheduling',
      'Podcast, video, and audio asset coordination & clipping',
    ],
    sampleDeliverable: {
      title: 'Multi-Slide Editorial Carousel System',
      description: 'A modular 10-slide Instagram and LinkedIn carousel kit tailored to luxury typography standards.',
      highlights: ['Custom typographic hierarchy with Cormorant & Space Mono', 'Repurposed from founder podcast recordings', 'Exported in high-res ready-to-publish formats'],
    },
  },
  {
    id: 'launch-ecommerce',
    number: '04',
    title: 'Product Launch & Client Concierge',
    tagline: 'Shopify/Stripe product drops, milestone checkoffs & VIP customer care.',
    turnaround: 'Dedicated Launch Sprints',
    overview: 'Managing timeline sprints, product drops, and white-glove customer care.',
    deliverables: [
      'Pre-launch milestone tracking & asset checkoffs',
      'Shopify / Stripe product listing & discount setup',
      'Tier-1 VIP client inquiry concierge & escalation care',
    ],
    sampleDeliverable: {
      title: 'Digital Product Launch Command Board',
      description: 'A cross-functional launch timeline coordinating email countdowns, affiliate tracking, cart open/close automation, and live customer support.',
      highlights: ['100% on-time drop execution across 3 timezones', 'Zero cart friction with pre-tested checkout flows', 'Real-time revenue & refund tracking sheet'],
    },
  },
];

export default function ServicesCatalog() {
  const [modalService, setModalService] = useState<ServiceSuite | null>(null);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] border-b border-[#E5DCD2] relative">
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
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 mb-1">
              <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A]">
                SIGNATURE SERVICE SUITES
              </span>
              <span className="font-handwriting text-sm sm:text-lg text-[#C45B3A] font-bold -rotate-2 whitespace-nowrap">
                ✦ bespoke &amp; white-glove
              </span>
            </div>
            <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
              Curated Capabilities. <span className="text-[#C45B3A]">High-Leverage Execution.</span>
            </h2>
          </div>
          <div className="text-right">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono-custom font-bold uppercase px-4 py-2 bg-[#1A1615] text-[#FBF8F3] hover:bg-[#C45B3A] transition-colors rounded-sm shadow-xs"
            >
              <span>Inquire for Partnership</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Editorial Service Rows with Staggered Motion */}
        <div className="border-t-2 border-[#1A1615] divide-y divide-[#1A1615]/15">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#F4EFE6]/50 transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg group"
            >
              {/* Number & Title */}
              <div className="lg:col-span-4">
                <span className="text-xs font-mono-custom font-bold text-[#C45B3A] tracking-wider block mb-1">
                  SUITE {srv.number}
                </span>
                <h3 className="font-playfair font-bold text-2xl text-[#1A1615] group-hover:text-[#C45B3A] transition-colors leading-tight mb-2">
                  {srv.title}
                </h3>
                <span className="inline-block text-[10px] font-mono-custom font-semibold text-[#524B43] bg-[#EFE9DF] px-2.5 py-0.5 rounded">
                  {srv.turnaround}
                </span>
              </div>

              {/* Tagline & Deliverables */}
              <div className="lg:col-span-6 space-y-3">
                <p className="text-sm text-[#524B43] font-medium leading-relaxed">
                  {srv.tagline}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {srv.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1A1615]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3D4A3E] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <button
                  onClick={() => setModalService(srv)}
                  className="px-3.5 py-2 rounded border border-[#1A1615]/30 hover:border-[#1A1615] hover:bg-[#1A1615] hover:text-white text-xs font-mono-custom font-semibold transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Sample Brief</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deliverable Modal with AnimatePresence */}
      <AnimatePresence>
        {modalService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1A1615]/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setModalService(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#1A1615] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <span className="text-[10px] font-mono-custom font-bold uppercase text-[#C45B3A] block mb-1">
                SUITE {modalService.number} • SAMPLE DELIVERABLE BRIEF
              </span>
              <h3 className="font-playfair font-bold text-xl sm:text-2xl text-[#1A1615] mb-2">
                {modalService.sampleDeliverable.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#524B43] mb-4 leading-relaxed">
                {modalService.sampleDeliverable.description}
              </p>

              <div className="bg-[#F4EFE6] p-4 rounded-xl border border-[#E5DCD2] space-y-2 mb-6">
                <span className="text-[10px] font-mono-custom font-bold uppercase text-[#1A1615] block mb-1">
                  KEY HIGHLIGHTS
                </span>
                {modalService.sampleDeliverable.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1A1615]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3D4A3E] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setModalService(null)}
                  className="flex-1 py-2.5 bg-[#1A1615] text-white text-xs font-mono-custom font-bold uppercase rounded text-center hover:bg-[#C45B3A] transition-colors"
                >
                  Inquire For This Suite
                </a>
                <button
                  onClick={() => setModalService(null)}
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
