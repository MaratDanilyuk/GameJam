import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: { value: 60, label: 'Прогресс урока', showValue: true },
  decorators: [(S) => <div style={{ width: 360 }}><S /></div>],
};
export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Base: Story = {};
export const Tones: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <ProgressBar value={40} tone="primary" label="Primary" showValue />
      <ProgressBar value={70} tone="success" label="Success" showValue />
      <ProgressBar value={50} tone="warn"    label="Warn" showValue />
      <ProgressBar value={20} tone="danger"  label="Danger" showValue />
    </div>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <ProgressBar value={60} size="sm" />
      <ProgressBar value={60} size="md" />
      <ProgressBar value={60} size="lg" shimmer />
    </div>
  ),
};
