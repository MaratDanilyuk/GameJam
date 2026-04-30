import type { Meta, StoryObj } from '@storybook/react';
import { Counter } from './Counter';

const meta: Meta<typeof Counter> = {
  title: 'Components/Counter',
  component: Counter,
  tags: ['autodocs'],
  args: { value: 5 },
};
export default meta;
type Story = StoryObj<typeof Counter>;

export const Base: Story = {};
export const Overflow: Story = { args: { value: 124, max: 99 } };

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Counter value={1} size="sm" />
      <Counter value={9} size="md" />
      <Counter value={99} size="lg" />
      <Counter value={1099} max={999} size="lg" />
      <Counter value={5} color="primary" />
      <Counter value={5} color="success" />
      <Counter value={5} color="warn" />
      <Counter value={5} color="neutral" />
      <Counter value={5} stroke />
    </div>
  ),
};
