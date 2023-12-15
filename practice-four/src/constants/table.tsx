import { CircleIcon } from '@/assets/icons';
import { STATUS } from '@/interfaces';
import { Flex, Text } from '@chakra-ui/react';

// TODO: Define update component
const customViewStatus = (value: string | number | boolean) =>
  value.toString() === STATUS.Activated.toString() ? (
    <Flex alignItems='center'>
      <CircleIcon color='background.component.quaternary' mr='1' />
      <Text variant='textSm'>Activated</Text>
    </Flex>
  ) : (
    <Flex alignItems='center'>
      <CircleIcon color='secondary.500' mr='1' />
      <Text variant='textSm'>Deactivated</Text>
    </Flex>
  );

export const PRODUCT_HEADER_COLUMNS = [
  {
    key: 'checkbox',
    label: 'Checkbox',
    width: {
      md: '30px',
      lg: '50px',
    },
    isCheckbox: true,
  },
  {
    key: 'name',
    label: 'Product name',
    width: {
      md: '100%',
      lg: '28%',
    },
    onSort: () => null,
  },
  {
    key: 'brand',
    label: 'Brand name',
    width: {
      md: '100%',
      lg: '17%',
    },
  },
  {
    key: 'service',
    label: 'Service',
    width: {
      md: '100%',
      lg: '15%',
    },
  },
  {
    key: 'status',
    label: 'Status',
    width: {
      md: '100%',
      lg: '18%',
    },
    customView: customViewStatus,
  },
  {
    key: 'actions',
    label: 'Actions',
    width: {
      md: '100%',
      lg: 'calc(32% - 35px)',
    },
    isAction: true,
  },
];
