/* Лоскутная Реальность — Common visual primitives */
import React, { CSSProperties } from 'react';
import { Mood, FragmentKind, IslandTone } from './types';

// ============================================================
// Patch — small sticker tile
// ============================================================
interface PatchProps {
  x: number;
  y: number;
  w?: number;
  h?: number;
  color?: string;
  rot?: number;
  dotted?: boolean;
}

export function Patch({ x, y, w = 36, h = 36, color = '#ff6170', rot = 0, dotted = true }: PatchProps) {
  return (
    <div
      className="patch"
      style={{
        left: x, top: y, width: w, height: h, background: color,
        transform: `rotate(${rot}deg)`,
        outline: dotted ? '2px dashed rgba(255,255,255,0.6)' : 'none',
        outlineOffset: -5,
      }}
    />
  );
}

// ============================================================
// PatchworkLogo
// ============================================================
interface PatchworkLogoProps {
  size?: 'lg' | 'sm';
}

export function PatchworkLogo({ size = 'lg' }: PatchworkLogoProps) {
  const big = size === 'lg';
  return (
    <div style={{
      fontFamily: 'var(--f-display)',
      fontWeight: 700,
      fontSize: big ? 56 : 28,
      lineHeight: 1.05,
      color: '#1f1533',
      textShadow: '0 3px 0 rgba(255,255,255,0.6)',
      letterSpacing: '-0.01em',
      textAlign: 'center',
    }}>
      Лоскутная<br />реальность
    </div>
  );
}

// ============================================================
// Cloud
// ============================================================
interface CloudProps {
  x: number;
  y: number;
  w?: number;
  opacity?: number;
  anim?: string;
}

export function Cloud({ x, y, w = 120, opacity = 0.95, anim = 'float-slow' }: CloudProps) {
  return (
    <div
      className={`cloud ${anim}`}
      style={{ left: x, top: y, width: w, height: w * 0.42, opacity }}
    />
  );
}

// ============================================================
// Sparkle
// ============================================================
interface SparkleProps {
  x: number;
  y: number;
  size?: number;
  color?: string;
  delay?: number;
}

export function Sparkle({ x, y, size = 24, color = '#ffb020', delay = 0 }: SparkleProps) {
  return (
    <svg
      className="sparkle"
      style={{ left: x, top: y, width: size, height: size, animationDelay: `${delay}s` }}
      viewBox="0 0 24 24"
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill={color} />
    </svg>
  );
}

// ============================================================
// Keeper — Хранитель Историй
// ============================================================
interface KeeperProps {
  x?: number;
  y?: number;
  scale?: number;
  broken?: boolean;
  mood?: Mood;
}

export function Keeper({ x = 0, y = 0, scale = 1, broken = true, mood = 'sad' }: KeeperProps) {
  const skin = broken ? '#9a9eb0' : '#ffd7a8';
  const cloak = broken ? '#5b5d72' : '#7c5edc';
  const cloakAlt = broken ? '#7e8298' : '#a487f0';
  const eye = broken ? '#3a3a52' : '#1f1533';
  const cheek = broken ? 'transparent' : '#ff97a7';
  const patches = broken
    ? ['#6b6d80', '#7e8298', '#5b5d72']
    : ['#ff6170', '#88d883', '#ffd166'];

  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: 320 * scale, height: 380 * scale,
      transform: `scale(${scale})`, transformOrigin: 'top left',
    }}>
      <svg width="320" height="380" viewBox="0 0 320 380">
        <ellipse cx="160" cy="358" rx="120" ry="14" fill="rgba(0,0,0,0.18)" />
        <path
          d="M70 220 Q60 130 160 90 Q260 130 250 220 L270 360 Q160 380 50 360 Z"
          fill={cloak}
        />
        <path
          d="M86 240 Q90 200 120 200 L120 360 L86 360 Z"
          fill={cloakAlt} opacity="0.7"
        />
        <rect x="120" y="270" width="34" height="34" fill={patches[0]} transform="rotate(-8 137 287)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="3 3" />
        <rect x="190" y="240" width="28" height="28" fill={patches[1]} transform="rotate(10 204 254)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="3 3" />
        <rect x="170" y="320" width="22" height="22" fill={patches[2]} transform="rotate(-15 181 331)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeDasharray="3 3" />
        <ellipse cx="160" cy="135" rx="78" ry="86" fill={skin} />
        <path d="M118 80 Q135 50 160 60 Q190 50 210 80 Q200 60 160 50 Q120 60 118 80 Z" fill={broken ? '#7a7a8c' : '#5e3a8a'} />
        <circle cx="138" cy="140" r="20" fill="none" stroke="#1f1533" strokeWidth="3" />
        <circle cx="184" cy="140" r="20" fill="none" stroke="#1f1533" strokeWidth="3" />
        <line x1="158" y1="140" x2="164" y2="140" stroke="#1f1533" strokeWidth="3" />
        <circle cx="138" cy="142" r="4" fill={eye} />
        <circle cx="184" cy="142" r="4" fill={eye} />
        <circle cx="118" cy="160" r="8" fill={cheek} opacity="0.6" />
        <circle cx="204" cy="160" r="8" fill={cheek} opacity="0.6" />
        {mood === 'sad' && <path d="M148 178 Q160 170 174 178" stroke={eye} strokeWidth="3" fill="none" strokeLinecap="round" />}
        {mood === 'happy' && <path d="M146 174 Q160 188 176 174" stroke={eye} strokeWidth="3" fill="none" strokeLinecap="round" />}
        {mood === 'neutral' && <line x1="148" y1="178" x2="174" y2="178" stroke={eye} strokeWidth="3" strokeLinecap="round" />}
        {broken && <path d="M138 158 Q138 170 136 178 Q133 170 138 158 Z" fill="#7fc6ff" />}
        <ellipse cx="58" cy="248" rx="22" ry="36" fill={cloak} transform="rotate(-15 58 248)" />
        <ellipse cx="262" cy="248" rx="22" ry="36" fill={cloak} transform="rotate(15 262 248)" />
      </svg>
    </div>
  );
}

// ============================================================
// Icon Button
// ============================================================
interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: number;
  style?: CSSProperties;
}

export function IconButton({ children, onClick, size = 48, style }: IconButtonProps) {
  const cls = size === 56 ? 'icon-btn icon-btn--lg' : size === 40 ? 'icon-btn icon-btn--sm' : 'icon-btn';
  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
}

// ============================================================
// Icons
// ============================================================
export function SettingsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M19.4 13a7.5 7.5 0 0 0 0-2l2-1.6-2-3.5-2.4.9a7 7 0 0 0-1.7-1L15 3h-4l-.3 2.6a7 7 0 0 0-1.7 1L6.6 5.9l-2 3.5L6.6 11a7.5 7.5 0 0 0 0 2L4.6 14.6l2 3.5 2.4-.9a7 7 0 0 0 1.7 1L11 21h4l.3-2.6a7 7 0 0 0 1.7-1l2.4.9 2-3.5L19.4 13Z" stroke="#3a3a52" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="#3a3a52" strokeWidth="1.6" />
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M15 5l-7 7 7 7" stroke="#3a3a52" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" stroke="#1f1533" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function MicIcon({ color = 'white' }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="3" width="6" height="12" rx="3" fill={color} />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ============================================================
// FragmentChip
// ============================================================
interface FragmentChipProps {
  kind: FragmentKind;
  count?: number;
  locked?: boolean;
}

export function FragmentChip({ kind, count = 0, locked = false }: FragmentChipProps) {
  const colors: Record<FragmentKind, { bg: string; emoji: string }> = {
    color:    { bg: '#ffd6df', emoji: '🎨' },
    sound:    { bg: '#cfe9ff', emoji: '🎵' },
    shape:    { bg: '#ffe4b8', emoji: '🔷' },
    movement: { bg: '#d2f0c8', emoji: '🏃' },
    special:  { bg: 'linear-gradient(135deg,#ffd6df,#cfe9ff,#ffe4b8,#d2f0c8)', emoji: '✨' },
  };
  const c = colors[kind] ?? { bg: '#eee', emoji: '?' };

  return (
    <div className="fragment" style={{ background: c.bg, opacity: locked ? 0.45 : 1 }}>
      <span style={{ fontSize: 22 }}>{c.emoji}</span>
      {count > 0 && <span className="fragment-badge">{count}</span>}
    </div>
  );
}

// ============================================================
// PatchIsland
// ============================================================
interface PatchIslandProps {
  x: number;
  y: number;
  size?: number;
  anim?: string;
  tone?: IslandTone;
}

export function PatchIsland({ x, y, size = 220, anim = 'float-slow', tone = 'warm' }: PatchIslandProps) {
  const palettes: Record<IslandTone, string[]> = {
    warm:   ['#ffce6a', '#ff9b6a', '#88d883', '#ffd6df'],
    cool:   ['#7cc1f0', '#a487f0', '#88d883', '#ffd6df'],
    purple: ['#a487f0', '#7c5edc', '#cfe9ff', '#ffd6df'],
  };
  const p = palettes[tone];
  return (
    <div className={anim} style={{ position: 'absolute', left: x, top: y, width: size, height: size * 0.7 }}>
      <svg width={size} height={size * 0.7} viewBox="0 0 220 154">
        <path d="M30 60 Q20 30 60 25 Q90 5 130 18 Q190 8 200 50 Q220 90 180 100 Q150 130 100 120 Q40 130 30 95 Q10 80 30 60 Z" fill={p[0]} stroke="rgba(0,0,0,0.15)" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M60 70 Q40 60 50 100 Q90 130 130 115 Q180 100 180 70 Q140 60 60 70 Z" fill={p[1]} opacity="0.6" />
        <rect x="80" y="20" width="50" height="40" fill={p[2]} />
        <path d="M70 22 L105 0 L140 22 Z" fill={p[3]} />
        <rect x="98" y="40" width="14" height="20" fill="#5b3a8a" />
        <rect x="150" y="35" width="6" height="20" fill="#7a4f25" />
        <circle cx="153" cy="32" r="14" fill="#5fb35a" />
      </svg>
    </div>
  );
}

// ============================================================
// ChatBubble
// ============================================================
interface ChatBubbleProps {
  children: React.ReactNode;
  x: number;
  y: number;
  w?: number;
}

export function ChatBubble({ children, x, y, w = 360 }: ChatBubbleProps) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: w,
      background: 'white', borderRadius: 24, padding: '18px 22px',
      boxShadow: 'var(--sh-2)',
      fontSize: 18, lineHeight: 1.4, color: 'var(--c-text)',
    }}>
      {children}
      <div style={{
        position: 'absolute', bottom: -10, left: 36, width: 24, height: 16,
        background: 'white', clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
      }} />
    </div>
  );
}
