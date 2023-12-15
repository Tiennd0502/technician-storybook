import type { Meta, StoryObj } from '@storybook/react';

import UserCard from '.';
import emptyAvatar from '@/assets/images/empty-avatar.svg';

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Default: Story = {
  args: {
    name: 'Belle',
    avatar: emptyAvatar,
  },
};
