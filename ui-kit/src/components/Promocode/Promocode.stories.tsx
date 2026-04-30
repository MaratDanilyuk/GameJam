import type { Meta, StoryObj } from '@storybook/react';
import { Promocode } from './Promocode';

const meta: Meta<typeof Promocode> = {
  title: 'Components/Promocode',
  component: Promocode,
  tags: ['autodocs'],
  args: { code: 'UCHI2026' },
};
export default meta;
type Story = StoryObj<typeof Promocode>;

export const Default: Story = {};

export const LongCode: Story = {
  args: { code: 'WELCOME-BACK-50-OFF' },
};
