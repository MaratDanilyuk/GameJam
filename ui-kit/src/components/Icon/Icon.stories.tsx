import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';

const allIcons: IconName[] = [
  'add', 'check', 'close', 'remove', 'more', 'menu',
  'expand-more', 'expand-less', 'arrow-back', 'arrow-forward',
  'play', 'pause', 'star', 'star-filled', 'heart', 'heart-filled',
  'help', 'info', 'warning', 'success', 'error',
  'message', 'bell', 'search', 'home', 'user',
];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'select', options: allIcons },
    size: { control: 'number' },
  },
  args: { name: 'home', size: 24 },
};
export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Large: Story = { args: { size: 48 } };

export const Colored: Story = { args: { style: { color: '#FF3347' } } };

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 80px)', gap: 12 }}>
      {allIcons.map(name => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, fontSize: 11, color: '#888' }}>
          <Icon name={name} size={24} />
          <span>{name}</span>
        </div>
      ))}
    </div>
  ),
};
