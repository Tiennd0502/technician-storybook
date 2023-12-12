import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  variants: {
    solid: {
      color: 'white',
      backgroundColor: 'primary.500',
      _hover: {
        backgroundColor: 'primary.600',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
});
