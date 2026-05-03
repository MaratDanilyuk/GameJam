import { Sparkle, CloseIcon } from '../primitives';

export function CongratModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="overlay">
      <div className="modal scene-enter" style={{ width: 440, padding: 32, position: 'relative' }}>
        <button className="icon-btn icon-btn--sm" onClick={onClose} style={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </button>
        <div style={{ display: 'grid', placeItems: 'center', padding: '40px 0' }}>
          <Sparkle x={120} y={20} size={28} color="#ffb020" />
          <Sparkle x={280} y={60} size={20} color="#ff6170" delay={0.3} />
          <Sparkle x={80}  y={80} size={18} color="#7c5edc" delay={0.6} />
          <svg width="180" height="180" viewBox="0 0 180 180">
            <rect x="20" y="40" width="140" height="120" fill="#cf5fc8" rx="10" />
            <path d="M30 50 L90 60 L150 50 L150 150 L90 160 L30 150 Z" fill="#a4e2ff" />
            <path d="M90 60 L90 160" stroke="#cf5fc8" strokeWidth="4" />
            <path d="M40 80 L80 84 M40 95 L78 99 M100 84 L140 80 M102 99 L140 95"
              stroke="#cf5fc8" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 26, color: 'var(--c-text-strong)' }}>
            Получен новый артефакт!
          </div>
          <div style={{ fontSize: 16, color: 'var(--c-text-muted)', marginTop: 10, lineHeight: 1.4 }}>
            Используй его для восстановления персонажа
          </div>
        </div>
        <button className="btn btn--56 btn--primary btn--block" style={{ marginTop: 28 }} onClick={onClose}>
          Отлично
        </button>
      </div>
    </div>
  );
}
