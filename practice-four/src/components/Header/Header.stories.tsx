import type { Meta, StoryObj } from '@storybook/react';

import Header from '.';
import emptyAvatar from '@/assets/images/empty-avatar.svg';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    user: {
      name: 'Belle',
      avatar: emptyAvatar,
    },
    title: 'Product & Services',
  },
};
