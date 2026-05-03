export type LocationId = 'library' | 'lost' | 'city' | 'workshop' | 'valley';
export type SceneName = 'loading' | 'start' | 'map' | 'location' | 'parents';
export type ModalName =
  | 'reading'
  | 'sound'
  | 'artifact'
  | 'reward'
  | 'settings'
  | 'libIntro'
  | 'libRecord'
  | 'libWait'
  | 'libHero'
  | 'libArtifact'
  | null;
export type Mood = 'sad' | 'happy' | 'neutral';
export type FragmentKind = 'color' | 'sound' | 'shape' | 'movement' | 'special';
export type IslandTone = 'warm' | 'cool' | 'purple';

export interface GameProgress {
  level: number;
  worldPct: number;
  color: number;
  sound: number;
  shape: number;
  movement: number;
  special: number;
  library?: number;
  lost?: number;
  city?: number;
  workshop?: number;
  valley?: number;
}

export interface TweakValues {
  skipLoading: boolean;
  startScreen: SceneName;
  showFragments: boolean;
  heroVariant: string;
  mapVariant: string;
  rewardVariant: string;
  progLibrary: number;
  progLost: number;
  progCity: number;
  progWorkshop: number;
  progValley: number;
}
