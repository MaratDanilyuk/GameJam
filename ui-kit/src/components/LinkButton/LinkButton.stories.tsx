import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'inline-radio', options: ['primary', 'muted', 'danger'] },
  },
  args: { children: 'Ссылка-кнопка', tone: 'primary' },
};
export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {};

export const Muted: Story = { args: { tone: 'muted' } };

export const Danger: Story = { args: { tone: 'danger' } };

export const WithIconLeft: Story = { args: { iconLeft: 'arrow-back', children: 'Назад' } };

export const WithIconRight: Story = { args: { iconRight: 'arrow-forward', children: 'Далее' } };

export const Disabled: Story = { args: { disabled: true } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <LinkButton tone="primary">Primary</LinkButton>
      <LinkButton tone="muted">Muted</LinkButton>
      <LinkButton tone="danger">Danger</LinkButton>
    </div>
  ),
};
