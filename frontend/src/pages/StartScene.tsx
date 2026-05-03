import { asset } from '../asset';

interface StartSceneProps { onPlay: () => void; onParents: () => void; }

export function StartScene({ onPlay, onParents }: StartSceneProps) {
  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, width: 1280, height: 832,
      background: '#7fc8ee', overflow: 'hidden',
    }}>
      <img src={asset('assets/img/start-bg.png')} alt=""
        style={{ position: 'absolute', left: 0, top: 0, width: 1280, height: 832, objectFit: 'cover', objectPosition: 'center top', pointerEvents: 'none' }}
        draggable={false}
      />

      <div style={{ position: 'absolute', left: 244, top: 269, width: 473, height: 473, pointerEvents: 'none' }}>
        <img src={asset('assets/img/dragon-stage1.png')} alt=""
          style={{ position: 'absolute', left: (12 / 550) * 473, top: (42 / 550) * 473, width: 473, height: 473, objectFit: 'cover' }}
          draggable={false}
        />
      </div>

      <div style={{
        position: 'absolute', left: 489, top: 229, width: 325, height: 40,
        fontFamily: '"Nunito", "Lapsus Pro", sans-serif', fontWeight: 800, fontSize: 36,
        lineHeight: '40px', color: 'rgb(0,0,0)', whiteSpace: 'nowrap', letterSpacing: '-0.01em',
      }}>
        Лоскутная реальность
      </div>

      <button className="btn-start btn-start--primary"
        onClick={onPlay}
        style={{ position: 'absolute', left: 850, top: 550, width: 282 }}
      >
        Играть
      </button>
      <button className="btn-start btn-start--secondary"
        onClick={onParents}
        style={{ position: 'absolute', left: 850, top: 626, width: 282 }}
      >
        Родителям
      </button>
    </div>
  );
}
