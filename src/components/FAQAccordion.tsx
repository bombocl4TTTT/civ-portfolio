'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: 'How do you handle timezones for US, UK, or Australia clients?',
    answer: 'I am based in Manila (GMT+8) and work with an async-first workflow: scheduled real-time overlap for US mornings/evenings, full day coverage for AU/Asia, and afternoon alignment for UK/Europe. You receive priority morning briefs regardless of location.',
  },
  {
    question: 'How do we handle passwords, API keys, and sensitive data?',
    answer: 'We sign a strict mutual Non-Disclosure Agreement (NDA) prior to kickoff. All credentials are shared exclusively via encrypted password managers (1Password / Bitwarden). I never store plaintext credentials.',
  },
  {
    question: 'What is your standard turnaround time (SLA)?',
    answer: 'Standard retainer tasks have a 24-to-48 hour turnaround. Daily operations (Inbox Zero & calendar triage) are completed every morning before 9:00 AM in your timezone.',
  },
  {
    question: 'How do we communicate on a day-to-day basis?',
    answer: 'We communicate via a dedicated private Slack channel, WhatsApp for urgent VIP pings, and shared Notion/Asana dashboards with bite-sized Loom video recordings for seamless async handoffs.',
  },
  {
    question: 'Do you offer a trial period before committing?',
    answer: 'Yes. We can start with a 7-day Paid Trial Sprint or a standalone Notion / Inbox Cleanup sprint so you can experience the speed and precision of my work firsthand.',
  },
];

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F4EFE6] border-b border-[#E5DCD2] relative">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A] block mb-1">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
            Clarity &amp; Logistics.
          </h2>
          <span className="font-handwriting text-xl text-[#C45B3A] font-bold block mt-1">
            ✦ everything you need to know 💬
          </span>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#1A1615] shadow-sm'
                    : 'bg-white/80 border-[#E5DCD2] hover:border-[#1A1615]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-playfair font-bold text-base sm:text-lg text-[#1A1615]"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#1A1615] text-white rotate-180' : 'bg-[#F4EFE6] text-[#1A1615]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#524B43] leading-relaxed border-t border-stone-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
