import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = { title: 'Components/Tooltip', component: Tooltip, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, padding: 60 }}>
      <Tooltip content="Сверху"><Button color="second">Top</Button></Tooltip>
      <Tooltip content="Справа" side="right"><Button color="second">Right</Button></Tooltip>
      <Tooltip content="Снизу" side="bottom"><Button color="second">Bottom</Button></Tooltip>
      <Tooltip content="Слева" side="left"><Button color="second">Left</Button></Tooltip>
    </div>
  ),
};
