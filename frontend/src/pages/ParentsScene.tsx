import { LocationId, GameProgress } from '../types';
import { Header } from '../components/Header';
import { MAP_CARDS_STATIC, LOC_LABEL } from '../data/locations';

interface ParentsSceneProps {
  onBack: () => void;
  progress: GameProgress;
  restored: LocationId[];
}

export function ParentsScene({ onBack, progress, restored }: ParentsSceneProps) {
  const totalFragments = progress.color + progress.sound + progress.shape + progress.movement + progress.special;

  const stats = [
    { lbl: 'Уровень мира',  val: String(progress.level),   sub: `заработан в игре`,           color: '#7c5edc' },
    { lbl: 'Восстановлено', val: `${progress.worldPct}%`,  sub: `${restored.length} из 5 локаций`, color: '#3d8a5a' },
    { lbl: 'Фрагментов',   val: String(totalFragments),    sub: 'собрано всего',               color: '#ffb020' },
    { lbl: 'Локаций',      val: String(restored.length),   sub: 'завершено из 5',              color: '#ff6170' },
  ];

  return (
    <div className="scene-enter" style={{ position: 'absolute', inset: 0, background: '#f5f4f1' }}>

      <Header showSkills onBack={onBack} title="Родительский кабинет" />

      <div style={{ padding: '108px 32px 0' }}>
        <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 32, color: '#1a1918' }}>
          Прогресс мира — Дракоша
        </div>
        <div style={{ color: '#6d6c6a', fontSize: 14, marginTop: 4 }}>
          Выполнено заданий: {restored.length} · Осталось: {5 - restored.length}
        </div>
      </div>

      <div style={{ padding: '24px 32px 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {stats.map((s) => (
          <div key={s.lbl} style={{ background: 'white', borderRadius: 16, padding: 20, boxShadow: '0 1px 4px rgba(26,25,24,0.05)' }}>
            <div style={{ fontSize: 12, color: '#6d6c6a', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>{s.lbl}</div>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 36, color: s.color, marginTop: 4 }}>{s.val}</div>
            <div style={{ fontSize: 13, color: '#6d6c6a' }}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '20px 32px 0' }}>
        <div style={{ background: 'white', borderRadius: 16, padding: 24, boxShadow: '0 1px 4px rgba(26,25,24,0.05)' }}>
          <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 20, marginBottom: 16 }}>
            Прогресс по локациям
          </div>
          {MAP_CARDS_STATIC.map((card, i) => {
            const locProg   = (progress[card.id] as number | undefined) ?? 0;
            const isDone    = restored.includes(card.id);
            return (
              <div key={card.id} style={{
                display: 'grid', gridTemplateColumns: '40px 1fr 100px 110px',
                gap: 16, padding: '12px 0',
                borderTop: i ? '1px solid #ebe9e6' : 'none', alignItems: 'center',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: isDone ? '#c8f0d8' : '#f0eef8',
                  color: isDone ? '#3d8a5a' : '#7c5edc',
                  display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13,
                }}>
                  {isDone ? '✓' : String(i + 1)}
                </div>
                <div style={{ fontWeight: 600 }}>{LOC_LABEL[card.id]}</div>
                <div style={{ color: '#6d6c6a', fontSize: 14 }}>{locProg} из 10</div>
                <div style={{
                  background: isDone ? '#c8f0d8' : '#f1eefb',
                  color: isDone ? '#3d8a5a' : '#5137c7',
                  padding: '4px 10px', borderRadius: 100, fontSize: 12, fontWeight: 700, justifySelf: 'start',
                }}>
                  {isDone ? 'Завершено' : 'В процессе'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
