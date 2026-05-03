import { asset } from '../asset';
import { CloseIcon } from '../primitives';

const INTRO_STEPS = [
  '1. Видишь, что сломалось',
  '2. Получаешь задание',
  '3. Выполняешь задание',
  '4. Жмёшь «Сделал»',
  '5. Получаешь награду',
  '6. Видишь, как мир восстанавливается',
];

interface IntroModalProps { onStart: () => void; onClose: () => void; }

export function IntroModal({ onStart, onClose }: IntroModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal scene-enter"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 560, position: 'relative' }}
      >
        <button
          className="icon-btn icon-btn--sm"
          onClick={onClose}
          style={{ position: 'absolute', right: 16, top: 16, zIndex: 1 }}
        >
          <CloseIcon />
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 28 }}>
          <img
            src={asset('assets/img/bykvik-modal-welcome.svg')}
            alt="Буквик"
            style={{ height: 160, width: 'auto' }}
            draggable={false}
          />
        </div>

        <div style={{ padding: '0 36px 36px', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--f-display)',
            fontWeight: 700,
            fontSize: 24,
            color: 'var(--c-text-strong)',
            lineHeight: 1.25,
          }}>
            Привет, маленький спасатель
          </div>

          <div style={{
            fontSize: 15,
            color: 'var(--c-text-muted)',
            marginTop: 8,
            lineHeight: 1.5,
          }}>
            Лоскутный мир развалился на кусочки. Но ты можешь его собрать&nbsp;— своими действиями.
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            justifyContent: 'center',
            marginTop: 18,
          }}>
            {INTRO_STEPS.map((step) => (
              <div
                key={step}
                style={{
                  padding: '7px 14px',
                  borderRadius: 100,
                  fontSize: 13,
                  color: 'var(--c-text-strong)',
                  background: '#F5F6F7',
                  lineHeight: 1.4,
                  whiteSpace: 'nowrap',
                }}
              >
                {step}
              </div>
            ))}
          </div>

          <div style={{
            fontSize: 15,
            fontWeight: 700,
            color: 'var(--c-text-strong)',
            marginTop: 20,
          }}>
            Каждое твоё действие оживляет мир. Готов?
          </div>

          <button
            className="btn btn--56 btn--primary btn--block"
            style={{ marginTop: 16 }}
            onClick={onStart}
          >
            Начать спасение
          </button>
        </div>
      </div>
    </div>
  );
}
