import React, { useState, useEffect, useCallback } from 'react';
import { LocationId, SceneName, ModalName, GameProgress } from './types';
import {
  LoadingScene,
  StartScene,
  WorldMapScene,
  LocationScene,
  ParentsScene,
  ReadingTaskScene,
  SoundRecordScene,
  CongratModal,
  RewardModal,
  SettingsModal,
  LibraryIntroModal,
  LibraryRecordModal,
  LibraryWaitModal,
  LibraryHeroModal,
  LibraryArtifactModal,
} from './scenes';

const INITIAL_PROGRESS: GameProgress = {
  level: 1, worldPct: 0,
  color: 0, sound: 0, shape: 0, movement: 0, special: 0,
  library: 0, lost: 0, city: 0, workshop: 0, valley: 0,
};

// ── Metadata ───────────────────────────────────────────────────
const LOC_NAMES: Record<LocationId, string> = {
  library:  'Библиотека',
  workshop: 'Мастерская',
  city:     'Город',
  valley:   'Долина',
  lost:     'Мир потеряшек',
};

const FRAGMENT_PER_LOC: Record<LocationId, keyof Pick<GameProgress, 'color' | 'sound' | 'shape' | 'movement' | 'special'>> = {
  library:  'color',
  valley:   'sound',
  workshop: 'shape',
  city:     'movement',
  lost:     'special',
};

// ── Component ──────────────────────────────────────────────────
export default function App() {
  const [scene,    setScene]    = useState<SceneName>('loading');
  const [modal,    setModal]    = useState<ModalName>(null);
  const [activeLoc, setActiveLoc] = useState<LocationId | null>(null);

  // Demo mode: progress resets on every page reload (no persistence).
  const [progress, setProgress] = useState<GameProgress>(INITIAL_PROGRESS);
  const [restored, setRestored] = useState<LocationId[]>([]);

  // Stage scaling — keeps 1280×832 centered in any viewport
  useEffect(() => {
    const stage = document.getElementById('stage');
    if (!stage) return;
    const fit = () => {
      const s = Math.min(window.innerWidth / 1280, window.innerHeight / 832);
      stage.style.transform = `scale(${s})`;
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  // ── Navigation helpers ────────────────────────────────────────
  const goMap = useCallback(() => {
    setActiveLoc(null);
    setScene('map');
  }, []);

  const openLocation = useCallback((id: LocationId) => {
    setActiveLoc(id);
    setScene('location');
  }, []);

  const startTask = useCallback(() => {
    if (activeLoc === 'library') { setModal('libIntro'); return; }
    setModal(activeLoc === 'valley' ? 'sound' : 'reading');
  }, [activeLoc]);

  // ── Task flow ─────────────────────────────────────────────────
  const completeTask = useCallback(() => setModal('artifact'), []);

  const grantArtifact = useCallback(() => {
    if (!activeLoc || restored.includes(activeLoc)) return;
    const fragKey = FRAGMENT_PER_LOC[activeLoc];
    setRestored((prev) => [...prev, activeLoc]);
    setProgress((p) => ({
      ...p,
      [activeLoc]: 10,
      worldPct: Math.min(100, p.worldPct + 20),
      level:    p.level + 1,
      [fragKey]: (p[fragKey] as number) + 1,
    }));
  }, [activeLoc, restored]);

  const closeArtifact = useCallback(() => {
    if (!activeLoc || restored.includes(activeLoc)) {
      setModal(null);
      return;
    }
    grantArtifact();
    setModal('reward');
  }, [activeLoc, restored, grantArtifact]);

  const closeLibArtifact = useCallback(() => {
    grantArtifact();
    setModal('reward');
  }, [grantArtifact]);

  return (
    <>
      {scene === 'loading' && (
        <LoadingScene onDone={() => setScene('start')} />
      )}

      {scene === 'start' && (
        <StartScene
          onPlay={() => setScene('map')}
          onParents={() => setScene('parents')}
        />
      )}

      {scene === 'map' && (
        <WorldMapScene
          progress={progress}
          restored={restored}
          onLocation={openLocation}
          onSettings={() => setModal('settings')}
        />
      )}

      {scene === 'location' && activeLoc && (
        <LocationScene
          id={activeLoc}
          restored={restored}
          onBack={goMap}
          onStart={startTask}
          onSettings={() => setModal('settings')}
        />
      )}

      {scene === 'parents' && (
        <ParentsScene
          progress={progress}
          restored={restored}
          onBack={() => setScene('start')}
        />
      )}

      {modal === 'reading'  && <ReadingTaskScene onComplete={completeTask} onCancel={() => setModal(null)} />}
      {modal === 'sound'    && <SoundRecordScene onComplete={completeTask} onCancel={() => setModal(null)} />}
      {modal === 'artifact' && <CongratModal onClose={closeArtifact} />}

      {modal === 'libIntro'    && <LibraryIntroModal    onStart={() => setModal('libRecord')} onClose={() => setModal(null)} />}
      {modal === 'libRecord'   && <LibraryRecordModal   onComplete={() => setModal('libWait')} />}
      {modal === 'libWait'     && <LibraryWaitModal     onContinue={() => setModal('libHero')} />}
      {modal === 'libHero'     && <LibraryHeroModal     onContinue={() => setModal('libArtifact')} />}
      {modal === 'libArtifact' && <LibraryArtifactModal onClose={closeLibArtifact} />}
      {modal === 'reward'   && (
        <RewardModal
          locName={activeLoc ? LOC_NAMES[activeLoc] : ''}
          onContinue={() => setModal(null)}
          onMap={() => { setModal(null); goMap(); }}
        />
      )}
      {modal === 'settings' && (
        <SettingsModal
          onClose={() => setModal(null)}
          onExit={() => { setModal(null); setScene('start'); }}
        />
      )}
    </>
  );
}
