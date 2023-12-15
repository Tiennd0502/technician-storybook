import type { Meta, StoryObj } from '@storybook/react';

import ConfirmModal from '.';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
};

export default meta;
type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirm modal',
    description: 'Are you sure to delete it?',
    onClose: () => null,
    onSubmit: () => null,
  },
};
