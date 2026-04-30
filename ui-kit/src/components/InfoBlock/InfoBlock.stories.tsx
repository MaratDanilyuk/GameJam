import type { Meta, StoryObj } from '@storybook/react';
import { InfoBlock } from './InfoBlock';

const meta: Meta<typeof InfoBlock> = { title: 'Components/InfoBlock', component: InfoBlock, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof InfoBlock>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, width: 480 }}>
      <InfoBlock tone="info"    title="Подсказка">Прочитай задание вслух перед началом</InfoBlock>
      <InfoBlock tone="success" title="Готово">Все шаги выполнены</InfoBlock>
      <InfoBlock tone="warn"    title="Скоро перерыв">Осталось 5 минут до конца занятия</InfoBlock>
      <InfoBlock tone="danger"  title="Ошибка">Не удалось загрузить материалы</InfoBlock>
      <InfoBlock tone="neutral" title="Информация">Курс рассчитан на 30 минут</InfoBlock>
    </div>
  ),
};
