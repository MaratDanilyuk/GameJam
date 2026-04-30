import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'flat', 'elev'] },
    hoverable: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    title: 'Заголовок карточки',
    children: 'Содержимое карточки. Здесь может быть любой текст или элементы.',
  },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Flat: Story = { args: { variant: 'flat' } };

export const Elev: Story = { args: { variant: 'elev' } };

export const Hoverable: Story = { args: { hoverable: true } };

export const WithMedia: Story = {
  args: {
    media: <img src="https://via.placeholder.com/400x200" alt="placeholder" style={{ width: '100%', display: 'block' }} />,
  },
};

export const WithFooter: Story = {
  args: {
    footer: <button>Подробнее</button>,
  },
};

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      {(['default', 'flat', 'elev'] as const).map(variant => (
        <Card key={variant} variant={variant} title={variant} hoverable>
          Вариант «{variant}»
        </Card>
      ))}
    </div>
  ),
};
