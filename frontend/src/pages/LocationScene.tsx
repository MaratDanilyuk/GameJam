import { LocationId } from '../types';
import { asset } from '../asset';
import { Header } from '../components/Header';
import { LOCATION_META } from '../data/locations';

interface LocationSceneProps {
  id: LocationId; restored: LocationId[];
  onBack: () => void; onStart: () => void; onSettings: () => void;
}

function locationBg(id: LocationId, ok: boolean): string | null {
  if (id === 'library') return ok ? 'assets/img/library-restored.png' : 'assets/img/library-broken.png';
  return `assets/img/loc-${id}.png`;
}

export function LocationScene({ id, restored, onBack, onStart, onSettings }: LocationSceneProps) {
  const m  = LOCATION_META[id];
  const ok = restored.includes(id);
  const bg = locationBg(id, ok);

  const sceneBg = ok
    ? `linear-gradient(180deg, ${m.wallSoft} 0%, ${m.wall} 100%)`
    : 'linear-gradient(180deg, #6e5b9a 0%, #4a3d72 100%)';

  return (
    <div className="scene-enter" style={{ position: 'absolute', inset: 0, background: sceneBg }}>

      {bg && (
        <img src={asset(bg)} alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', pointerEvents: 'none' }}
          draggable={false}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      )}

      <Header showSkills onBack={onBack} onSettings={onSettings} />

      {id !== 'library' && (
        <div className="scene-tag">{ok ? m.titleOK : m.title}</div>
      )}

      {!ok && id !== 'library' && (
        <div style={{
          position: 'absolute', left: 32, bottom: 32,
          background: 'white', borderRadius: 24, padding: 20, width: 360,
          boxShadow: 'var(--sh-2)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--c-primary-soft)', textTransform: 'uppercase', letterSpacing: 0.6 }}>
            Задание
          </div>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 22, marginTop: 4, color: 'var(--c-text-strong)' }}>
            {m.task}
          </div>
          <div style={{ fontSize: 14, color: 'var(--c-text-muted)', marginTop: 6 }}>≈ {m.minutes} минут офлайн</div>
          <button className="btn btn--48 btn--primary btn--block" style={{ marginTop: 16 }} onClick={onStart}>
            Получить задание
          </button>
        </div>
      )}

      {id === 'library' && !ok && (
        <>
          <img
            src={asset('assets/img/bykvik.svg')}
            alt="Буквик"
            style={{
              position: 'absolute',
              left: '50%', transform: 'translateX(-50%)',
              bottom: 81,
              width: 550, height: 622,
              pointerEvents: 'none',
              zIndex: 1,
            }}
            draggable={false}
          />

          <div style={{
            position: 'absolute',
            left: 'calc(50% + 150px)', top: 130,
            width: 260,
            background: 'white', borderRadius: 20,
            padding: '18px 22px',
            boxShadow: 'var(--sh-2)',
            fontSize: 19, lineHeight: 1.5, fontWeight: 600,
            color: 'var(--c-text)',
            zIndex: 3,
          }}>
            слова потерялись...<br />помоги вернуть их
            <svg
              style={{ position: 'absolute', bottom: -28, left: 20, width: 40, height: 30, overflow: 'visible' }}
              viewBox="0 0 40 30"
            >
              <polygon points="0,0 40,0 0,30" fill="white" />
            </svg>
          </div>

          <button
            className="btn-start btn-start--primary"
            style={{ position: 'absolute', right: 142, bottom: 178, width: 240, zIndex: 3 }}
            onClick={onStart}
          >
            Помочь
          </button>
        </>
      )}

      {ok && (
        <div style={{ position: 'absolute', left: '50%', bottom: 60, transform: 'translateX(-50%)' }}>
          <button className="btn btn--56 btn--primary" onClick={onBack}>Карта мира</button>
        </div>
      )}
    </div>
  );
}
