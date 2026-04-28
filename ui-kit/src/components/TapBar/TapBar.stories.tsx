import type { Meta, StoryObj } from '@storybook/react';
import { TapBar } from './TapBar';

const meta: Meta<typeof TapBar> = { title: 'Components/TapBar', component: TapBar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof TapBar>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 360, border: '1px solid #eee', borderRadius: 16, overflow: 'hidden' }}>
      <TapBar
        items={[
          { id: 'home', icon: 'home',    label: 'Главная' },
          { id: 'msg',  icon: 'message', label: 'Чаты', badge: 3 },
          { id: 'bell', icon: 'bell',    label: 'События' },
          { id: 'me',   icon: 'user',    label: 'Профиль' },
        ]}
      />
    </div>
  ),
};
