import { useMemo } from 'react';
import { LocationId, GameProgress } from '../types';
import { asset } from '../asset';
import { Header } from '../components/Header';
import { MapLocationCard } from '../components/MapLocationCard';
import { MAP_CARDS_STATIC } from '../data/locations';

interface WorldMapSceneProps {
  progress: GameProgress;
  restored: LocationId[];
  onLocation: (id: LocationId) => void;
  onSettings: () => void;
}

export function WorldMapScene({ progress, onLocation, onSettings }: WorldMapSceneProps) {
  const cards = useMemo(() => MAP_CARDS_STATIC.map((c) => ({
    ...c,
    value: (progress[c.id] as number | undefined) ?? 0,
  })), [progress]);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, width: 1280, height: 832,
      background: '#a8d2ee', overflow: 'hidden',
    }}>
      <img src={asset('assets/img/world-map.png')} alt=""
        style={{ position: 'absolute', left: 0, top: 88, width: 1280, height: 744, objectFit: 'cover', pointerEvents: 'none' }}
        draggable={false}
      />

      <Header showSkills onBack={onSettings} onSettings={onSettings} />

      {cards.map((c) => (
        <MapLocationCard key={c.id} card={c} onClick={() => onLocation(c.id)} />
      ))}
    </div>
  );
}
