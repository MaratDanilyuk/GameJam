import { asset } from '../asset';
import { Button } from '../../../ui-kit/src/components/Button/Button';

export function LibraryArtifactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="overlay">
      <style>{`
        @keyframes lib-sun-spin {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
      `}</style>

      <div
        className="scene-enter"
        style={{
          background: 'white',
          borderRadius: 24,
          boxShadow: '0 12px 32px rgba(57,78,127,0.16), 0 2px 8px rgba(28,25,51,0.08)',
          width: 460,
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 18, right: 20, zIndex: 10,
            background: 'none', border: 'none', cursor: 'pointer', padding: 4,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6 6 18" stroke="var(--c-text-strong)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>

        <div style={{
          position: 'relative', height: 280,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg
            width="200" height="200" viewBox="-290 -290 580 580"
            style={{
              position: 'absolute', top: '50%', left: '50%',
              animation: 'lib-sun-spin 16s linear infinite',
              pointerEvents: 'none', zIndex: 0,
            }}
          >
            {Array.from({ length: 18 }, (_, i) => (
              <polygon
                key={i}
                points="-5,52 5,52 2,275 -2,275"
                transform={`rotate(${i * (360 / 18)})`}
                fill="#C8EEF8"
              />
            ))}
          </svg>

          <img
            src={asset('assets/img/word-rabbit.svg')}
            alt="Артефакт"
            style={{ width: 164, height: 'auto', position: 'relative', zIndex: 1 }}
            draggable={false}
          />
        </div>

        <div style={{ padding: '4px 36px 12px' }}>
          <div style={{
            fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 28,
            color: 'var(--c-text-strong)', lineHeight: 1.2,
          }}>
            Получен новый артефакт!
          </div>
          <div style={{
            fontSize: 16, color: 'var(--c-text-muted)',
            marginTop: 10, lineHeight: 1.5,
          }}>
            Используй его<br />для восстановления персонажа
          </div>
        </div>

        <div style={{ padding: '8px 36px 32px' }}>
          <Button size={56} color="primary" block onClick={onClose}>
            Отлично
          </Button>
        </div>
      </div>
    </div>
  );
}
