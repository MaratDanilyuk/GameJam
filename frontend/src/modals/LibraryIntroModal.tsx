import { asset } from '../asset';
import { Button } from '../../../ui-kit/src/components/Button/Button';

interface LibraryIntroModalProps { onStart: () => void; onClose: () => void; }

export function LibraryIntroModal({ onStart, onClose }: LibraryIntroModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div style={{ position: 'relative', width: 480 }} onClick={(e) => e.stopPropagation()}>

        <div style={{
          display: 'flex', justifyContent: 'center',
          position: 'relative', zIndex: 2,
          marginBottom: -80,
          pointerEvents: 'none',
        }}>
          <img
            src={asset('assets/img/dino-teacher.svg')}
            alt="Динозаврик"
            style={{ height: 210, width: 'auto' }}
            draggable={false}
          />
        </div>

        <div style={{
          background: 'white',
          borderRadius: 24,
          boxShadow: '0 12px 32px rgba(57,78,127,0.16), 0 2px 8px rgba(28,25,51,0.08)',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16, zIndex: 5,
              width: 36, height: 36, borderRadius: '50%',
              background: '#F0EEF8', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24">
              <path d="M6 6l12 12M18 6 6 18" stroke="#555" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>

          <div style={{ padding: '88px 32px 12px', textAlign: 'center' }}>
            <div style={{
              fontFamily: 'var(--f-display)', fontWeight: 800, fontSize: 28,
              color: 'var(--c-text-strong)', lineHeight: 1.25,
            }}>
              Вернем слова в книги!
            </div>
            <div style={{
              fontSize: 16, color: 'var(--c-text-muted)',
              marginTop: 10, lineHeight: 1.5,
            }}>
              Читай вслух в течении 1 минуты
            </div>
          </div>

          <div style={{ padding: '20px 32px 28px' }}>
            <Button size={56} color="primary" block onClick={onStart}>
              Читать вслух
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
