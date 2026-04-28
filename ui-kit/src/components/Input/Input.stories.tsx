import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { label: 'Имя', placeholder: 'Введите имя' },
  decorators: [(Story) => <div style={{ width: 320 }}><Story /></div>],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Base: Story = {};
export const WithIcon: Story = { args: { iconLeft: 'search', placeholder: 'Найти урок' } };
export const Help: Story = { args: { help: 'От 2 до 32 символов' } };
export const Error: Story = { args: { error: 'Поле обязательно', defaultValue: '' } };
export const Large: Story = { args: { size: 'lg' } };
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Иван' } };
