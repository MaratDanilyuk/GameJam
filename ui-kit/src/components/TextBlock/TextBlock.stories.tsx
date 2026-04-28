import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from './TextBlock';

const meta: Meta<typeof TextBlock> = { title: 'Components/TextBlock', component: TextBlock };
export default meta;
type S = StoryObj<typeof TextBlock>;

export const Default: S = {
  render: () => (
    <TextBlock style={{ maxWidth: 560 }}>
      <h2>Условия конкурса</h2>
      <p>Прочитайте правила перед тем, как отправить работу. Вы сможете редактировать заявку до окончания приёма.</p>
      <h3>Что важно</h3>
      <ul>
        <li>Уникальность работы и соблюдение темы;</li>
        <li>Качество подачи и оформление;</li>
        <li>Соответствие техническим требованиям.</li>
      </ul>
      <blockquote>Победителей объявим в прямом эфире сообщества.</blockquote>
      <p>Подробнее — на <a href="#">странице конкурса</a>.</p>
    </TextBlock>
  ),
};

export const Small: S = {
  render: () => (
    <TextBlock size="sm" style={{ maxWidth: 420 }}>
      <h4>Короткая заметка</h4>
      <p>Уменьшенный размер для подсказок и сносок.</p>
    </TextBlock>
  ),
};
