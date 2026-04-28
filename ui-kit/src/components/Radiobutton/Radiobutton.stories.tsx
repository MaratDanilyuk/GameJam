import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radiobutton } from './Radiobutton';

const meta: Meta<typeof Radiobutton> = {
  title: 'Components/Radiobutton',
  component: Radiobutton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Radiobutton>;

export const Group: Story = {
  render: () => {
    const Demo = () => {
      const [v, setV] = useState('b');
      const opts = [
        { id: 'a', label: '1 класс' },
        { id: 'b', label: '2 класс' },
        { id: 'c', label: '3 класс' },
        { id: 'd', label: '4 класс' },
      ];
      return (
        <div style={{ display: 'grid', gap: 12 }}>
          {opts.map(o => (
            <Radiobutton key={o.id} name="grade" value={o.id} checked={v === o.id} onChange={() => setV(o.id)} label={o.label} />
          ))}
        </div>
      );
    };
    return <Demo />;
  },
};

export const Disabled: Story = { args: { disabled: true, label: 'Недоступно', defaultChecked: true } };
export const Error: Story = { args: { error: true, label: 'Выберите вариант' } };
