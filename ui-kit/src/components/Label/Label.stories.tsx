import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Новое' },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Label tone="neutral" dot>Черновик</Label>
      <Label tone="primary" dot>В процессе</Label>
      <Label tone="success" dot>Готово</Label>
      <Label tone="warn"    dot>Ожидает</Label>
      <Label tone="danger"  dot>Ошибка</Label>
      <Label tone="info"    dot>Инфо</Label>
    </div>
  ),
};
