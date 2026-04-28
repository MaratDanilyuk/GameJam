import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: 'Соглашаюсь с условиями' },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Indeterminate: Story = { args: { indeterminate: true, defaultChecked: true } };
export const Error: Story = { args: { error: true, label: 'Это поле обязательно' } };
export const Disabled: Story = { args: { disabled: true } };

export const Group: Story = {
  render: () => {
    const Demo = () => {
      const [a, setA] = useState(true);
      const [b, setB] = useState(false);
      const [c, setC] = useState(true);
      return (
        <div style={{ display: 'grid', gap: 8 }}>
          <Checkbox checked={a && b && c} indeterminate={!(a && b && c) && (a || b || c)} onChange={e => { const v = e.target.checked; setA(v); setB(v); setC(v); }} label="Все темы" />
          <div style={{ display: 'grid', gap: 8, paddingLeft: 32 }}>
            <Checkbox checked={a} onChange={e => setA(e.target.checked)} label="Математика" />
            <Checkbox checked={b} onChange={e => setB(e.target.checked)} label="Русский язык" />
            <Checkbox checked={c} onChange={e => setC(e.target.checked)} label="Окружающий мир" />
          </div>
        </div>
      );
    };
    return <Demo />;
  },
};
