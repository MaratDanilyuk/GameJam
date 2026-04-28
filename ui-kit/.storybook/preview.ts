import type { Preview } from '@storybook/react';
import '../src/styles/global.scss';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F5F6F7' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#1B1B24' },
      ],
    },
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};
export default preview;
