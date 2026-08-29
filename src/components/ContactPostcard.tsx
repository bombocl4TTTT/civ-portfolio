'use client';
import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Calendar, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { DoodlePaperPlane, DoodleSparkle, DoodleStar, DoodleTwirlyArrow } from './Doodles/Doodles';

export default function ContactPostcard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'SaaS / Tech Startup',
    primaryNeed: 'Executive Calendar & Inbox Control',
    weeklyHours: '10–15 hrs/week (Core)',
    timezone: 'US (EST / PST)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState('stamp-1');
  const [currentTimeManila, setCurrentTimeManila] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTimeManila(new Intl.DateTimeFormat([], options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C45B3A', '#1A1615', '#3D4A3E', '#E5C378'],
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBF8F3] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono-custom font-bold uppercase tracking-widest text-[#C45B3A] block mb-1">
            START A CONVERSATION
          </span>
          <h2 className="font-playfair text-3xl sm:text-5xl font-black text-[#1A1615] tracking-tight mb-2">
            Request an Executive <span className="italic font-normal text-[#3D4A3E]">Discovery Briefing.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#524B43] max-w-lg mx-auto">
            Share your operational bottlenecks below. I will respond within 24 business hours.
          </p>
        </motion.div>

        {/* 2-Column Stationery Postcard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Postcard Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 bg-[#FDFBF7] rounded-3xl border-2 border-[#1A1615] p-6 sm:p-10 shadow-2xl relative"
          >
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-12 transform -rotate-1">
              <div className="bg-[#C45B3A] text-white text-[10px] font-mono-custom font-bold px-4 py-1 uppercase tracking-wider shadow">
                DIRECT INQUIRY FORM
              </div>
            </div>

            {/* Cute Paper Plane Flying into Postcard (Visible on Mobile & Desktop) */}
            <div className="absolute -top-6 right-4 sm:right-32 pointer-events-none transform -rotate-12 z-20">
              <DoodlePaperPlane size={40} color="#C45B3A" />
            </div>

            {/* Top Right Postcard Stamp Box */}
            <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center">

              <div
                onClick={() => setSelectedStamp(selectedStamp === 'stamp-1' ? 'stamp-2' : 'stamp-1')}
                className="w-20 h-24 border-2 border-dashed border-[#C45B3A] bg-[#F4EFE6] rounded p-1 flex flex-col items-center justify-between cursor-pointer hover:scale-105 transition-transform shadow-sm"
                title="Click to change postage stamp"
              >
                <span className="text-[7px] font-mono-custom text-[#756D63] uppercase">AIR MAIL</span>
                <div className="w-8 h-8 rounded-full bg-[#1A1615] text-[#E5C378] flex items-center justify-center font-serif font-bold text-xs">
                  CMF
                </div>
                <span className="text-[8px] font-mono-custom font-bold text-[#C45B3A]">₱ 20.26</span>
              </div>
              <span className="text-[8px] font-mono-custom text-[#8C8275] mt-1">CLICK STAMP</span>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#3D4A3E] text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-[#1A1615]">
                  Dispatch Received!
                </h3>
                <p className="text-sm text-[#524B43] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1A1615]">{formData.name || 'Visionary'}</strong>. Your inquiry has been logged into Civrel’s priority queue. Expect a custom onboarding proposal and meeting link within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono-custom font-bold uppercase text-[#C45B3A] underline underline-offset-4"
                  >
                    Send Another Dispatch →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 pt-4 sm:pt-2">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Your Name / Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera, Founder"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] placeholder-stone-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] placeholder-stone-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Business Type & Primary Need */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Company / Organization Type
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>SaaS / Tech Startup</option>
                      <option>Creative Agency / Studio</option>
                      <option>E-Commerce / Direct-to-Consumer</option>
                      <option>Venture Capital / Investment Fund</option>
                      <option>Solo Creator / Public Figure</option>
                      <option>Boutique Consultancy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Primary Operational Focus
                    </label>
                    <select
                      value={formData.primaryNeed}
                      onChange={(e) => setFormData({ ...formData, primaryNeed: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>Executive Calendar &amp; Inbox Control</option>
                      <option>Notion Architecture &amp; SOP Engineering</option>
                      <option>Creative Asset Production (Figma/Social)</option>
                      <option>E-Commerce Ops &amp; Klaviyo Flow Buildout</option>
                      <option>Comprehensive Fractional COO Retainer</option>
                    </select>
                  </div>
                </div>

                {/* Capacity & Timezone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Estimated Weekly Support
                    </label>
                    <select
                      value={formData.weeklyHours}
                      onChange={(e) => setFormData({ ...formData, weeklyHours: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>10–15 hrs/week (Core Retainer)</option>
                      <option>20–25 hrs/week (Executive Retainer)</option>
                      <option>30+ hrs/week (Dedicated White-Glove)</option>
                      <option>One-Time Project Sprint</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                      Your Primary Timezone
                    </label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg px-3.5 py-2.5 text-sm text-[#1A1615] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option>US Pacific (PST / UTC-8)</option>
                      <option>US Eastern (EST / UTC-5)</option>
                      <option>UK / Europe (GMT / CET)</option>
                      <option>Australia / NZ (AEST / NZST)</option>
                      <option>Asia / Singapore (SGT / UTC+8)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono-custom font-bold uppercase text-[#1A1615] mb-1.5">
                    What is currently causing the biggest operational friction?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="e.g. My inbox has 500+ unread emails, scheduling is taking 5 hours every week, and our team needs a unified Notion workspace..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F4EFE6] border border-[#D8CFC4] focus:border-[#1A1615] rounded-lg p-3.5 text-sm text-[#1A1615] placeholder-stone-400 focus:outline-none transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1A1615] text-[#FBF8F3] hover:bg-[#C45B3A] text-xs font-mono-custom font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    <span>Dispatch Executive Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Dispatch Info & Live Timezone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Live Manila Time Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#E5DCD2] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-custom text-[#756D63]">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C45B3A]" />
                  <span>MANILA, PHILIPPINES</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded">
                  ONLINE
                </span>
              </div>
              <div className="font-mono-custom font-bold text-2xl text-[#1A1615]">
                {currentTimeManila || '10:45:00 AM'}
              </div>
              <p className="text-xs text-[#524B43] leading-relaxed">
                Operating with seamless async overlap across North America, Europe, and Asia-Pacific.
              </p>
            </div>

            {/* Direct Email & Cal Booking */}
            <div className="bg-[#EFE9DF] p-6 rounded-2xl border border-[#D3C9BD] space-y-4">
              <span className="text-[10px] font-mono-custom font-bold uppercase text-[#3D4A3E] block">
                DIRECT CHANNELS
              </span>
              
              <a
                href="mailto:civrelmarlynette@gmail.com"
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#E5DCD2] hover:border-[#1A1615] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F4EFE6] flex items-center justify-center text-[#C45B3A] group-hover:bg-[#1A1615] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-custom text-[#756D63] block">EMAIL DIRECTLY</span>
                  <span className="text-xs font-mono-custom font-bold text-[#1A1615]">civrelmarlynette@gmail.com</span>
                </div>
              </a>

              <div className="p-3 bg-white rounded-xl border border-[#E5DCD2] flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#3D4A3E] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#524B43] leading-snug">
                  Mutual NDA signed prior to systems access. Encrypted 1Password vault transfer.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
