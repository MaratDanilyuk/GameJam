import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ModalCongrat } from './ModalCongrat';
import { Button } from '../Button/Button';

const meta: Meta<typeof ModalCongrat> = { title: 'Components/ModalCongrat', component: ModalCongrat, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof ModalCongrat>;

export const Default: Story = {
  render: () => {
    const Demo = () => {
      const [o, setO] = useState(true);
      return (
        <>
          <Button onClick={() => setO(true)}>Показать поздравление</Button>
          <ModalCongrat
            open={o}
            onClose={() => setO(false)}
            title="Отлично!"
            subtitle="Ты прошёл урок и заработал 25 звёзд"
            actions={<>
              <Button color="second" onClick={() => setO(false)}>Закрыть</Button>
              <Button onClick={() => setO(false)}>Дальше</Button>
            </>}
          />
        </>
      );
    };
    return <Demo />;
  },
};
