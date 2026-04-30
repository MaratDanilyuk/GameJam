import type { Meta, StoryObj } from '@storybook/react';
import { Sticker } from './Sticker';

const meta: Meta<typeof Sticker> = {
  title: 'Components/Sticker',
  component: Sticker,
  tags: ['autodocs'],
  args: { children: 'Новое' },
};
export default meta;
type Story = StoryObj<typeof Sticker>;

export const Base: Story = {};

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <Sticker tone="primary" rotate={-3}>Primary</Sticker>
      <Sticker tone="brand"   rotate={2}>Brand</Sticker>
      <Sticker tone="warm"    rotate={-1}>Warm</Sticker>
      <Sticker tone="success" rotate={3}>Success</Sticker>
      <Sticker tone="info"    rotate={-2}>Info</Sticker>
      <Sticker tone="soft"    rotate={1}>Soft</Sticker>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Sticker size="sm">Small</Sticker>
      <Sticker size="md">Medium</Sticker>
      <Sticker size="lg">Large</Sticker>
    </div>
  ),
};
