import { asset } from '../asset';

export function LibraryHeroModal({ onContinue }: { onContinue: () => void }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, overflow: 'hidden' }} className="scene-enter">
      <img src={asset('assets/img/library-restored.png')} alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        draggable={false}
      />

      <img
        src={asset('assets/img/bykvik-heart.svg')}
        alt="Буквик"
        style={{ position: 'absolute', left: 40, bottom: 0, height: 560, width: 'auto', zIndex: 1 }}
        draggable={false}
      />

      <div style={{
        position: 'absolute', left: 230, top: 180,
        background: 'white', borderRadius: 20, padding: '18px 24px',
        boxShadow: 'var(--sh-2)', fontSize: 20, fontWeight: 700,
        color: 'var(--c-text-strong)', maxWidth: 340, lineHeight: 1.45, zIndex: 2,
      }}>
        Ты настоящий герой, у меня для тебя подарок!
        <svg style={{ position: 'absolute', bottom: -26, left: 24, width: 36, height: 28, overflow: 'visible' }} viewBox="0 0 36 28">
          <polygon points="0,0 36,0 0,28" fill="white" />
        </svg>
      </div>

      <button
        className="btn btn--56 btn--primary"
        style={{ position: 'absolute', right: 80, bottom: 60, paddingLeft: 36, paddingRight: 36 }}
        onClick={onContinue}
      >
        Продолжить
      </button>
    </div>
  );
}
