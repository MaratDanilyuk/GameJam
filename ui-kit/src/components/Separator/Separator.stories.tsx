import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = { title: 'Components/Separator', component: Separator, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = { render: () => <div style={{ width: 320 }}><Separator /></div> };
export const Dashed: Story = { render: () => <div style={{ width: 320 }}><Separator variant="dashed" /></div> };
export const Vertical: Story = {
  render: () => <div style={{ display: 'flex', height: 40, gap: 16, alignItems: 'center' }}>Лево<Separator orientation="vertical" />Право</div>,
};
