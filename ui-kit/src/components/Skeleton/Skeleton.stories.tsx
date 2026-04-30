import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['rect', 'circle', 'text', 'title'] },
  },
  args: { variant: 'rect', width: 200, height: 100 },
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Rect: Story = {};

export const Circle: Story = { args: { variant: 'circle', width: 48, height: 48 } };

export const Text: Story = { args: { variant: 'text', width: 300, height: undefined } };

export const Title: Story = { args: { variant: 'title', width: 200, height: undefined } };

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <Skeleton variant="circle" width={48} height={48} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <Skeleton variant="title" width="60%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="80%" />
      </div>
    </div>
  ),
};
