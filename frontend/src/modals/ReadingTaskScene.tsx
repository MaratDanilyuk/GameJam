import { useState } from 'react';
import { CloseIcon } from '../primitives';

const READING_PAGES = [
  'Жил-был на тихом облачном острове маленький Хранитель. Каждое утро он встречал рассвет и собирал лоскутки солнца, чтобы сшить из них новый день.',
  'Однажды лоскутки рассыпались по всему миру. Каждая страница, каждый звук, каждое движение — это был кусочек мира, спрятанный в обычных делах.',
  'Чтобы вернуть их, нужно было выйти из своей башни и оглядеться вокруг. Не глазами на экране — настоящими глазами.',
  'Хранитель отложил книгу заклинаний и пошёл искать ребёнка, который умеет смотреть, слушать и придумывать.',
  'И ты — этот ребёнок. Прочитай ещё одну страницу — и в мире станет на одну заплатку светлее.',
];

interface ReadingTaskSceneProps { onComplete: () => void; onCancel: () => void; }

export function ReadingTaskScene({ onComplete, onCancel }: ReadingTaskSceneProps) {
  const [page, setPage] = useState(1);
  const TOTAL = READING_PAGES.length;
  const next = () => page < TOTAL ? setPage((p) => p + 1) : onComplete();

  return (
    <div className="overlay" onClick={onCancel}>
      <div className="reading-card scene-enter" onClick={(e) => e.stopPropagation()} style={{ width: 720 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--c-primary-soft)', textTransform: 'uppercase' }}>Задание · Чтение</div>
            <div style={{ fontFamily: 'var(--f-display)', fontWeight: 700, fontSize: 26, color: 'var(--c-text-strong)' }}>
              Страница {page} из {TOTAL}
            </div>
          </div>
          <button className="icon-btn icon-btn--sm" onClick={onCancel}><CloseIcon /></button>
        </div>
        <div className="bar-track" style={{ marginBottom: 24 }}>
          <div className="bar-fill" style={{ width: `${(page / TOTAL) * 100}%` }} />
        </div>
        <div style={{
          background: 'var(--c-purple-100)', borderRadius: 16, padding: 28,
          fontSize: 19, lineHeight: 1.55, color: 'var(--c-text)', minHeight: 220,
        }}>
          {READING_PAGES[page - 1]}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
          <button className="btn btn--48 btn--ghost" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
            ← Назад
          </button>
          <button className="btn btn--48 btn--primary" onClick={next}>
            {page === TOTAL ? 'Готово ✓' : 'Дальше →'}
          </button>
        </div>
      </div>
    </div>
  );
}
