import type { Meta, StoryObj } from '@storybook/react';
import { LikeButton } from './LikeButton';

const meta: Meta<typeof LikeButton> = { title: 'Components/LikeButton', component: LikeButton, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof LikeButton>;

export const Base: Story = { args: { count: 12 } };
export const PreLiked: Story = { args: { defaultLiked: true, count: 13 } };
export const NoCount: Story = {};
