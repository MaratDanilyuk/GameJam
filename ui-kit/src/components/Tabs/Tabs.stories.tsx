import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = { title: 'Components/Tabs', component: Tabs, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  { id: 'all', label: 'Все', count: 24 },
  { id: 'math', label: 'Математика', count: 8 },
  { id: 'rus', label: 'Русский', count: 12 },
  { id: 'eng', label: 'Английский', count: 4 },
];

export const Pill: Story = { render: () => <Tabs items={items} /> };
export const Underline: Story = { render: () => <Tabs items={items} variant="underline" /> };
