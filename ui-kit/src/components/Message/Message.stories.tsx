import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'inline-radio', options: ['in', 'out'] },
  },
  args: {
    children: 'Привет! Как дела?',
    direction: 'in',
    author: 'Аня',
    time: '12:30',
  },
};
export default meta;
type Story = StoryObj<typeof Message>;

export const Incoming: Story = {};

export const Outgoing: Story = {
  args: { direction: 'out', children: 'Привет, всё хорошо!' },
};

export const Conversation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
      <Message direction="in" author="Аня" time="12:30">Привет! Как дела?</Message>
      <Message direction="out" time="12:31">Привет! Отлично, спасибо 😊</Message>
      <Message direction="in" author="Аня" time="12:32">Что делаешь сегодня?</Message>
      <Message direction="out" time="12:33">Работаю над проектом</Message>
    </div>
  ),
};
