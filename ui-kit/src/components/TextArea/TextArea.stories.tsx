import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    showCount: { control: 'boolean' },
  },
  args: {
    label: 'Комментарий',
    placeholder: 'Введите текст…',
  },
};
export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const WithHelp: Story = {
  args: { help: 'Не более 500 символов' },
};

export const WithError: Story = {
  args: { error: 'Поле обязательно для заполнения' },
};

export const WithCounter: Story = {
  args: { showCount: true, maxLength: 200 },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'Текст нельзя редактировать' },
};
