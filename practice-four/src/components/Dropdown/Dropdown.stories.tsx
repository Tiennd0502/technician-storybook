import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from '.';
import emptyAvatar from '@/assets/images/empty-avatar.svg';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    name: 'Belle',
    avatar: emptyAvatar,
  },
};
