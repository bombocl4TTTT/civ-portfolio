'use client';
import dynamic from 'next/dynamic';
import React from 'react';
import type { LanyardProps } from './Lanyard';

const LanyardComponent = dynamic(() => import('./Lanyard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-xs tracking-widest uppercase font-mono text-stone-500 animate-pulse">
      <div className="w-12 h-16 rounded border border-dashed border-stone-400 mb-2 flex items-center justify-center">
        <span className="text-[10px]">ID</span>
      </div>
      <span>Loading 3D Pass...</span>
    </div>
  ),
});

export default function Lanyard(props: LanyardProps) {
  return <LanyardComponent {...props} />;
}
