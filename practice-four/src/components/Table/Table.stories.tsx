import type { Meta, StoryObj } from '@storybook/react';

import Table from '.';
import { PRODUCTS } from '@/__mocks__';
import { PRODUCT_HEADER_COLUMNS } from '@/constants';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    title: 'Products listing',
    columns: PRODUCT_HEADER_COLUMNS,
    data: PRODUCTS,
  },
};
