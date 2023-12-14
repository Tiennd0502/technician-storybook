import type { Meta, StoryObj } from '@storybook/react';

import ProductStatistics from '.';

const meta: Meta<typeof ProductStatistics> = {
  title: 'Components/ProductStatistics',
  component: ProductStatistics,
};

export default meta;

type Story = StoryObj<typeof ProductStatistics>;

export const Default: Story = {
  args: {},
};
