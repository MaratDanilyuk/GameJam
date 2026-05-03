import { useState, useEffect } from 'react';
import { asset } from '../asset';
import { PRELOAD_ASSETS, MIN_LOAD_MS } from '../data/preload';

interface LoadingSceneProps { onDone: () => void; }

export function LoadingScene({ onDone }: LoadingSceneProps) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const total = PRELOAD_ASSETS.length;
    let loaded = 0;
    const startMs = Date.now();
    let timerId: ReturnType<typeof setTimeout>;

    const onLoad = () => {
      loaded++;
      setPct(Math.round((loaded / total) * 100));
      if (loaded >= total) {
        const elapsed = Date.now() - startMs;
        timerId = setTimeout(onDone, Math.max(0, MIN_LOAD_MS - elapsed));
      }
    };

    PRELOAD_ASSETS.forEach((src) => {
      const img = new Image();
      img.onload  = onLoad;
      img.onerror = onLoad;
      img.src = asset(src);
    });

    return () => clearTimeout(timerId);
  }, [onDone]);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, width: 1280, height: 832,
      background: '#3a4a8a', overflow: 'hidden',
    }}>
      <img src={asset('assets/img/loader-bg.png')} alt=""
        style={{ position: 'absolute', left: 0, top: 0, width: 1280, height: 832, objectFit: 'cover', pointerEvents: 'none' }}
        draggable={false}
      />
      <span style={{
        position: 'absolute', left: 492, top: 347, width: 296,
        fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 22, lineHeight: '22px',
        color: 'rgb(0,0,0)', whiteSpace: 'nowrap',
      }}>
        Загружаем Лоскутную Реальность
      </span>

      <div style={{ position: 'absolute', left: 585, top: 392, width: 110, height: 110 }}>
        <svg width="110" height="110" viewBox="0 0 110 110" className="spin" style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <linearGradient id="spin-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(58,225,128,0)" />
              <stop offset="100%" stopColor="rgb(58,225,128)" />
            </linearGradient>
          </defs>
          <circle cx="55" cy="55" r="50.4" fill="none" stroke="rgba(58,225,128,0.18)" strokeWidth="9.16" />
          <circle cx="55" cy="55" r="50.4" fill="none" stroke="rgb(58,225,128)"
            strokeWidth="9.16" strokeLinecap="round" strokeDasharray="180 320" />
        </svg>
      </div>

      <div style={{
        position: 'absolute', left: 520, top: 518,
        width: 240, height: 6,
        background: 'rgba(255,255,255,0.2)', borderRadius: 999, overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${pct}%`,
          background: 'rgb(58,225,128)', borderRadius: 999,
          transition: 'width 0.3s ease-out',
        }} />
      </div>
    </div>
  );
}
