import { asset } from '../asset';
import { CloseIcon } from '../primitives';

interface RewardModalProps { locName: string; onContinue: () => void; onMap: () => void; }

export function RewardModal({ locName, onContinue, onMap }: RewardModalProps) {
  return (
    <div className="overlay">
      <div className="modal scene-enter" style={{ width: 540, padding: 36, position: 'relative' }}>
        <button className="icon-btn icon-btn--sm" onClick={onMap} style={{ position: 'absolute', right: 16, top: 16 }}>
          <CloseIcon />
        </button>
        <div style={{ display: 'grid', placeItems: 'center', marginTop: 8 }}>
          <img
              src={asset('assets/img/dino-teacher.svg')}
              alt="Динозаврик"
              style={{ height: 210, width: 'auto' }}
              draggable={false}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 32, color: 'var(--c-text-strong)', lineHeight: 1.1 }}>
            Молодец!<br />Ты помог восстановить<br />«{locName}»
          </div>
          <div style={{ fontSize: 16, color: 'var(--c-text-muted)', marginTop: 14 }}>
            Продолжай выполнять задания, чтобы спасти этот мир
          </div>
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
          <button className="btn btn--56 btn--primary" style={{ flex: 1 }} onClick={onContinue}>Продолжить</button>
          <button className="btn btn--56 btn--second"  style={{ flex: 1 }} onClick={onMap}>Карта мира</button>
        </div>
      </div>
    </div>
  );
}
