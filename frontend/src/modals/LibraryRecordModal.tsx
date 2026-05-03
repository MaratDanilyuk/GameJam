import { useState, useEffect, useRef, useCallback } from 'react';
import { asset } from '../asset';
import { Button } from '../../../ui-kit/src/components/Button/Button';

export function LibraryRecordModal({ onComplete }: { onComplete: () => void }) {
  const [started,  setStarted]  = useState(false);
  const [seconds,  setSeconds]  = useState(60);
  const [hasSound, setHasSound] = useState(false);

  const streamRef   = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const rafRef      = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        streamRef.current = stream;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;
        const src = ctx.createMediaStreamSource(stream);
        const an  = ctx.createAnalyser();
        an.fftSize = 512;
        src.connect(an);
        const data = new Uint8Array(an.frequencyBinCount);
        const tick = () => {
          an.getByteFrequencyData(data);
          const avg = data.reduce((a, b) => a + b, 0) / data.length;
          if (avg > 8) setHasSound(true);
          rafRef.current = requestAnimationFrame(tick);
        };
        tick();
      })
      .catch(() => { /* mic denied */ });

    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      audioCtxRef.current?.close();
      cancelAnimationFrame(rafRef.current);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) { clearInterval(id); onComplete(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [started, onComplete]);

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    audioCtxRef.current?.close();
    cancelAnimationFrame(rafRef.current);
    onComplete();
  }, [onComplete]);

  const mm = Math.floor(seconds / 60);
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="overlay">
      <div
        className="scene-enter"
        style={{
          background: 'white',
          borderRadius: 24,
          boxShadow: '0 12px 32px rgba(57,78,127,0.16), 0 2px 8px rgba(28,25,51,0.08)',
          width: 480,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center',
          padding: '36px 32px 32px',
          textAlign: 'center',
        }}
      >
        <div style={{
          background: '#EAE8FF',
          borderRadius: 20,
          padding: '20px 52px',
          fontFamily: 'var(--f-display)',
          fontWeight: 800,
          fontSize: 52,
          color: 'var(--c-text-strong)',
          letterSpacing: 4,
          lineHeight: 1,
        }}>
          {mm}&nbsp;:&nbsp;{ss}
        </div>

        <div style={{ margin: '28px 0 20px' }}>
          <img
            src={asset('assets/img/microfone-record.svg')}
            alt="Микрофон"
            style={{ height: 170, width: 'auto' }}
            draggable={false}
          />
        </div>

        <div style={{
          fontWeight: 700, fontSize: 18,
          color: 'var(--c-text-strong)',
          marginBottom: 28, lineHeight: 1.4,
        }}>
          {!started && 'Нажми старт, чтобы начать запись'}
          {started && (hasSound ? 'Отлично! Продолжай читать вслух...' : 'Читай вслух...')}
        </div>

        {!started ? (
          <Button size={56} color="primary" style={{ paddingLeft: 56, paddingRight: 56 }} onClick={() => setStarted(true)}>
            Старт
          </Button>
        ) : (
          <Button size={56} color="brand" style={{ paddingLeft: 44, paddingRight: 44 }} onClick={stop}>
            Завершить
          </Button>
        )}
      </div>
    </div>
  );
}
