import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    brand: 'Учи.ру',
    links: [
      { label: 'О проекте', href: '#' },
      { label: 'Помощь', href: '#' },
      { label: 'Контакты', href: '#' },
    ],
    copyright: '© 2026 Учи.ру',
  },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const MinimalFooter: Story = {
  args: {
    brand: undefined,
    links: undefined,
    copyright: '© 2026',
  },
};
