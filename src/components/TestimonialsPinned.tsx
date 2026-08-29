'use client';
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    author: 'Marcus Vance',
    role: 'CEO & Co-Founder, SaaS Scale ($3.2M ARR)',
    location: 'San Francisco, CA',
    quote: 'Civrel didn’t just clean up my schedule; she gave me my sanity and 20+ hours of deep strategic work back every week. She anticipates bottlenecks before they happen.',
  },
  {
    author: 'Elena Rostova',
    role: 'Creative Director & Brand Strategist',
    location: 'London, UK',
    quote: 'Her aesthetic taste is exceptional. Her Notion systems feel like boutique architecture, and her Figma social assets elevated our whole brand presence.',
  },
  {
    author: 'David Chen',
    role: 'Founder & Managing Partner, Apex Growth',
    location: 'Singapore / Remote',
    quote: 'The most reliable, proactive, and discreet executive right hand I’ve worked with. 100% confidential, zero drama, and pristine asynchronous execution.',
  },
  {
    author: 'Sarah Jenkins',
    role: 'Digital Educator & 7-Figure Creator',
    location: 'Austin, TX',
    quote: 'Our $180k product launch ran without a hitch because Civrel managed every moving part. Our customers were literally emailing to praise our support speed!',
  },
];

export default function TestimonialsPinned() {
  return (
    <section id="praise" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] border-b border-[#E5DCD2] relative">
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
            <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A] block mb-1">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight">
              Trusted by Founders. <span className="italic font-normal text-[#3D4A3E]">Praised by Visionaries.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="text-xs font-mono-custom font-bold text-[#1A1615]">
              100% 5-STAR RATED
            </span>
          </div>
        </motion.div>

        {/* Editorial Pull-Quote Spread */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 border-t-2 border-[#1A1615] pt-10">
          {REVIEWS.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4"
            >
              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif italic text-lg sm:text-xl text-[#1A1615] leading-relaxed">
                &ldquo;{rev.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-2 border-t border-[#1A1615]/10 flex items-baseline justify-between text-xs">
                <div>
                  <h4 className="font-playfair font-bold text-[#1A1615] text-base">
                    {rev.author}
                  </h4>
                  <span className="text-[#756D63] block font-medium">
                    {rev.role}
                  </span>
                </div>
                <span className="font-mono-custom text-[10px] text-[#8C8275]">
                  {rev.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
