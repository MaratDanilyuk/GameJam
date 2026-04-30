import type { Meta, StoryObj } from '@storybook/react';
import { ChosenMaterial } from './ChosenMaterial';
import { useState } from 'react';

const meta: Meta<typeof ChosenMaterial> = { title: 'Components/ChosenMaterial', component: ChosenMaterial };
export default meta;
type S = StoryObj<typeof ChosenMaterial>;

export const Default: S = { args: { title: 'Бумага акварельная', subtitle: 'Плотность 300 г/м²', glyph: '◆' } };
export const Selected: S = { args: { selected: true, title: 'Холст на подрамнике', subtitle: '40 × 50 см', glyph: '▣' } };
export const List: S = {
  render: () => {
    const [sel, setSel] = useState(1);
    const items = [
      { t: 'Акрил', s: '12 цветов', g: '●' },
      { t: 'Акварель', s: '24 цвета', g: '◐' },
      { t: 'Масло', s: '18 цветов', g: '◑' },
    ];
    return (
      <div style={{ display: 'grid', gap: 8, width: 360 }}>
        {items.map((it, i) => (
          <ChosenMaterial key={i} title={it.t} subtitle={it.s} glyph={it.g} selected={sel === i} onClick={() => setSel(i)} />
        ))}
      </div>
    );
  },
};
