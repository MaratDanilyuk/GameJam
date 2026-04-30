import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: { children: 'Урок сохранён' },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const All: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      <Toast tone="info">Сообщение для пользователя</Toast>
      <Toast tone="success" actionLabel="Открыть" onAction={() => {}}>Урок завершён</Toast>
      <Toast tone="warn">Не забудь отдохнуть</Toast>
      <Toast tone="danger" onClose={() => {}}>Не удалось загрузить</Toast>
    </div>
  ),
};
