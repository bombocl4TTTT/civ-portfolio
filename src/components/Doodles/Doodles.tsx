'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Cute Hand-Drawn 4-Point Sparkle Star
export const DoodleSparkle: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 24,
  color = '#C45B3A'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2C12.5 7.5 16.5 11.5 22 12C16.5 12.5 12.5 16.5 12 22C11.5 16.5 7.5 12.5 2 12C7.5 11.5 11.5 7.5 12 2Z"
      fill={color}
    />
  </svg>
);

// Cute Hand-Drawn 5-Point Sketch Star
export const DoodleStar: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 24,
  color = '#C45B3A'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 3L19.5 11.5L28.5 12.5L22 18.5L24 27.5L16 23L8 27.5L10 18.5L3.5 12.5L12.5 11.5L16 3Z" />
  </svg>
);

// Twirly Loop-de-Loop Arrow
export const DoodleTwirlyArrow: React.FC<{
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  flipX?: boolean;
}> = ({ className = '', color = '#C45B3A', width = 60, height = 40, flipX = false }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 70 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipX ? 'scale-x-[-1]' : ''}`}
  >
    <path
      d="M5 10 C 25 5, 45 15, 35 32 C 28 42, 18 35, 25 22 C 32 10, 52 18, 62 38"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M52 35 L 62 38 L 65 28"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Smooth Curving Arrow with Arrowhead
export const DoodleCurvedArrow: React.FC<{
  className?: string;
  color?: string;
  width?: number;
  height?: number;
  flipX?: boolean;
}> = ({ className = '', color = '#C45B3A', width = 50, height = 35, flipX = false }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flipX ? 'scale-x-[-1]' : ''}`}
  >
    <path
      d="M8 8 C 22 4, 42 12, 48 30"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M38 28 L 48 30 L 48 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Cute Hand-Drawn Paper Airplane with Dashed Trail
export const DoodlePaperPlane: React.FC<{
  className?: string;
  color?: string;
  size?: number;
}> = ({ className = '', color = '#C45B3A', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Dashed flight loop */}
    <path
      d="M6 52 C 16 58, 26 44, 22 36 C 18 28, 12 36, 20 42 C 28 48, 38 42, 44 26"
      stroke={color}
      strokeWidth="1.6"
      strokeDasharray="3 3"
      strokeLinecap="round"
      fill="none"
      opacity="0.75"
    />
    {/* Paper Plane Silhouette */}
    <g transform="translate(36, 10) rotate(15)">
      <path
        d="M0 8 L 22 0 L 12 18 L 8 11 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M22 0 L 8 11"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

// Cute Scribble Circle / Underline
export const DoodleScribbleUnderline: React.FC<{
  className?: string;
  color?: string;
  width?: number;
}> = ({ className = '', color = '#C45B3A', width = 120 }) => (
  <svg
    width={width}
    height="16"
    viewBox="0 0 140 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4 10 C 35 4, 90 3, 136 7 C 100 12, 45 13, 10 12"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
