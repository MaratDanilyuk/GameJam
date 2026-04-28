import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './CloseButton';

const meta: Meta<typeof CloseButton> = { title: 'Components/CloseButton', component: CloseButton, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof CloseButton>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, padding: 16, background: '#222', alignItems: 'center', borderRadius: 12 }}>
      <CloseButton size={32} />
      <CloseButton size={40} />
      <CloseButton size={48} />
      <CloseButton tone="light" />
      <CloseButton tone="dark" />
      <CloseButton tone="soft" />
    </div>
  ),
};
