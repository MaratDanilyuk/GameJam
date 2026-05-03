import { CloseIcon } from '../primitives';

interface SettingsModalProps { onClose: () => void; onExit: () => void; }

export function SettingsModal({ onClose, onExit }: SettingsModalProps) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal scene-enter" onClick={(e) => e.stopPropagation()} style={{ width: 440, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 26 }}>Настройки</h2>
          <button className="icon-btn icon-btn--sm" onClick={onClose}><CloseIcon /></button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
          <button className="btn btn--56 btn--primary btn--block" onClick={onClose}>Продолжить</button>
          <button className="btn btn--56 btn--second btn--block"  onClick={onExit}>На страницу входа</button>
        </div>
      </div>
    </div>
  );
}
