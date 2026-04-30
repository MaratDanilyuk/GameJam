import type { Meta, StoryObj } from '@storybook/react';
import { TooltipPopover } from './TooltipPopover';
import { Button } from '../Button/Button';

const meta: Meta<typeof TooltipPopover> = { title: 'Components/TooltipPopover', component: TooltipPopover };
export default meta;
type S = StoryObj<typeof TooltipPopover>;

export const Default: S = {
  render: () => (
    <div style={{ padding: 80 }}>
      <TooltipPopover
        title="Что это такое?"
        body="Это всплывающая подсказка с заголовком, текстом и действием. Удобно объяснять незнакомые элементы интерфейса."
        footer={<Button size="m">Понятно</Button>}
      >
        <Button mode="secondary">Открыть подсказку</Button>
      </TooltipPopover>
    </div>
  ),
};
