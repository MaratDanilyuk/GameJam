import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const options = [
  { value: 'moscow', label: 'Москва' },
  { value: 'spb', label: 'Санкт-Петербург' },
  { value: 'kazan', label: 'Казань' },
  { value: 'novosibirsk', label: 'Новосибирск' },
];

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: { options, placeholder: 'Выберите город…' },
};
export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export const WithDefaultValue: Story = {
  args: { defaultValue: 'spb' },
};

export const WithPlaceholder: Story = {
  args: { placeholder: 'Нажмите для выбора…' },
};
