import { defineStyleConfig } from '@chakra-ui/react';

export const Text = defineStyleConfig({
  baseStyle: {
    color: 'text.primary',
    fontWeight: 'bold',
  },
  variants: {
    textXs: {
      fontSize: 'xs',
    },
    textXsExtra: {
      fontSize: 'sxExtra',
    },
    textSm: {
      fontSize: 'sm',
    },
    textSmExtra: {
      fontSize: 'smExtra',
    },
    textMd: {
      fontSize: 'md',
    },
    textLg: {
      fontSize: 'lg',
    },
    textXl: {
      fontSize: 'xl',
    },
    text2Xl: {
      fontSize: '2xl',
    },
    text3Xl: {
      fontSize: '3xl',
    },
  },
  defaultProps: {
    variant: 'textMd',
  },
});
