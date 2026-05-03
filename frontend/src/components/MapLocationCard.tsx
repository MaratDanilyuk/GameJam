import { LocationId } from '../types';
import { asset } from '../asset';
import { ProgressBar10 } from './ProgressBar10';

export interface CardData {
  id: LocationId; label: string;
  x: number; y: number; w: number; h: number;
  total: number; value: number; locked: boolean; art: string;
}

export function MapLocationCard({ card, onClick }: { card: CardData; onClick?: () => void }) {
  const { label, value, total, locked, art, w, h } = card;
  return (
    <button
      type="button"
      className={`map-card${locked ? ' map-card--locked' : ''}`}
      style={{ position: 'absolute', left: card.x, top: card.y, width: w, height: h }}
      onClick={() => !locked && onClick?.()}
      aria-disabled={locked}
    >
      <div className="map-card__label">{label}</div>
      <div className="map-card__art">
        <img src={asset(art)} alt="" draggable={false} />
        {locked && (
          <div className="map-card__lock">
            <svg width="40" height="44" viewBox="0 0 20 22" fill="none">
              <path d="M5 10V6C5 4.67 5.53 3.4 6.46 2.46 7.4 1.53 8.67 1 10 1c1.33 0 2.6.53 3.54 1.46C14.47 3.4 15 4.67 15 6v4M3 10h14c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2z"
                stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <div style={{ padding: '10px 14px 14px' }}>
        <ProgressBar10 value={value} total={total} />
      </div>
    </button>
  );
}
