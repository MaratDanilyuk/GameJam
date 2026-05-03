import { useState, useEffect } from 'react';
import { CloseIcon, MicIcon } from '../primitives';

type RecPhase = 'idle' | 'rec' | 'done';
interface SoundRecordSceneProps { onComplete: () => void; onCancel: () => void; }

export function SoundRecordScene({ onComplete, onCancel }: SoundRecordSceneProps) {
  const [phase, setPhase] = useState<RecPhase>('idle');
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (phase !== 'rec') return;
    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) { clearInterval(id); setPhase('done'); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [phase]);

  const mm = String(Math.floor(seconds / 60)).padStart(1, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="overlay" onClick={phase === 'rec' ? undefined : onCancel}>
      <div className="modal scene-enter" onClick={(e) => e.stopPropagation()} style={{ width: 440, height: 604, display: 'flex', flexDirection: 'column' }}>
        <button className="icon-btn icon-btn--sm" onClick={onCancel} style={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </button>
        <div style={{ flex: 1, display: 'grid', placeItems: 'center', gap: 24 }}>
          <div style={{
            background: phase === 'rec' ? '#ffe2e6' : 'var(--c-purple-300)',
            color:      phase === 'rec' ? 'var(--c-danger-press)' : 'var(--c-primary-soft)',
            padding: '16px 32px', borderRadius: 16, fontWeight: 800, fontSize: 32, fontStyle: 'italic',
          }}>
            {mm} : {ss}
          </div>
          <div className={`mic-ring${phase === 'rec' ? ' mic-ring--on' : ''}`}>
            <MicIcon />
          </div>
          {phase === 'rec' && (
            <div className="wave">
              {Array.from({ length: 28 }, (_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.05}s`, height: 56 }} />
              ))}
            </div>
          )}
          <div style={{ textAlign: 'center', maxWidth: 320, color: 'var(--c-text-muted)', fontSize: 16, fontWeight: 600 }}>
            {phase === 'idle' && 'Нажми старт, чтобы начать запись'}
            {phase === 'rec'  && 'Идёт запись... Послушай как звучит мир вокруг тебя'}
            {phase === 'done' && 'Запись готова! Звук собран в фрагмент.'}
          </div>
        </div>
        <div style={{ padding: 24 }}>
          {phase === 'idle' && <button className="btn btn--56 btn--primary btn--block" onClick={() => setPhase('rec')}>Старт</button>}
          {phase === 'rec'  && <button className="btn btn--56 btn--brand btn--block"   onClick={() => setPhase('done')}>Остановить</button>}
          {phase === 'done' && <button className="btn btn--56 btn--primary btn--block" onClick={onComplete}>Сохранить и продолжить</button>}
        </div>
      </div>
    </div>
  );
}
