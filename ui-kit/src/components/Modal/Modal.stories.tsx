import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button onClick={() => setOpen(true)}>Открыть модалку</Button>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            title="Заголовок диалога"
            footer={<>
              <Button color="ghost" onClick={() => setOpen(false)}>Отмена</Button>
              <Button onClick={() => setOpen(false)}>Подтвердить</Button>
            </>}
          >
            Текст диалога. Здесь можно объяснить пользователю, что произойдёт, и попросить подтверждение.
          </Modal>
        </>
      );
    };
    return <Demo />;
  },
};
