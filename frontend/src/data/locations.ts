import { LocationId } from '../types';

export const LOCATION_META: Record<LocationId, {
  title: string; titleOK: string;
  wall: string; wallSoft: string;
  task: string; minutes: number;
}> = {
  library:  { title: 'Разорванная библиотека', titleOK: 'Восстановленная библиотека', wall: '#a487f0', wallSoft: '#cfb6ff', task: 'Прочитай 5 страниц книги',        minutes: 10 },
  workshop: { title: 'Стёртая мастерская',     titleOK: 'Восстановленная мастерская', wall: '#ffce6a', wallSoft: '#ffe4b8', task: 'Нарисуй своё настроение',          minutes: 15 },
  city:     { title: 'Замёрший город',         titleOK: 'Оживший город',              wall: '#7cc1f0', wallSoft: '#cfe9ff', task: '20 прыжков на месте',              minutes: 5  },
  valley:   { title: 'Тихая долина',           titleOK: 'Поющая долина',              wall: '#88d883', wallSoft: '#d2f0c8', task: 'Запиши звук природы',              minutes: 1  },
  lost:     { title: 'Мир пропавших объектов', titleOK: 'Мир найденных объектов',     wall: '#ff97a7', wallSoft: '#ffd6df', task: 'Найди и сфотографируй 3 предмета', minutes: 10 },
};

// Row 1 (2 cards): (1280 − 2×260 − 20) / 2 = 370
// Row 2 (3 cards): (1280 − 3×260 − 2×20) / 2 = 230
export const MAP_CARDS_STATIC = [
  { id: 'library'  as LocationId, label: 'Разорванная библиотека', x: 370, y: 160, w: 260, h: 248, total: 10, locked: false, art: 'assets/img/illus-library.png' },
  { id: 'lost'     as LocationId, label: 'Мир потеряшек',          x: 650, y: 160, w: 260, h: 248, total: 10, locked: true,  art: 'assets/img/illus-lost.png' },
  { id: 'city'     as LocationId, label: 'Замёрший город',         x: 230, y: 440, w: 260, h: 248, total: 10, locked: true,  art: 'assets/img/illus-city.png' },
  { id: 'workshop' as LocationId, label: 'Стёртая мастерская',     x: 510, y: 440, w: 260, h: 248, total: 10, locked: true,  art: 'assets/img/illus-workshop.png' },
  { id: 'valley'   as LocationId, label: 'Тихая долина',           x: 790, y: 440, w: 260, h: 248, total: 10, locked: true,  art: 'assets/img/illus-valley.png' },
];

export const LOC_LABEL: Record<LocationId, string> = {
  library: 'Библиотека', lost: 'Мир потеряшек',
  city: 'Город', workshop: 'Мастерская', valley: 'Долина',
};

export const SKILL_ICONS = [
  { src: 'assets/img/icon-creative.svg', alt: 'Творчество' },
  { src: 'assets/img/icon-hearing.svg',  alt: 'Слух' },
  { src: 'assets/img/icon-vision.svg',   alt: 'Зрение' },
  { src: 'assets/img/icon-palette.svg',  alt: 'Краски' },
  { src: 'assets/img/icon-body.svg',     alt: 'Моторика' },
];
