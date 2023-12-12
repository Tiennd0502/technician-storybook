import { ThemeOverride, ColorHues } from '@chakra-ui/react';

export const colors: ThemeOverride['colors'] &
  Record<string, Partial<ColorHues> & Record<number, string>> = {
  primary: {
    500: '#4c52bc',
    600: '#363975',
  },

  secondary: {
    500: '#f8d9af',
  },

  success: {
    500: '#b4e55c',
  },

  error: {
    500: '#f45744',
  },

  background: {
    body: {
      primary: {
        default: '#fff',
      },
    },
    section: {
      primary: {
        default: '#f3f3f3',
      },
    },

    component: {
      primary: {
        default: '#fff',
      },
      secondary: {
        default: '#f7fafc',
      },
    },
  },

  border: {
    primary: {
      default: '#eaeaea',
    },
    secondary: {
      default: '#e1e1e1',
    },
    tertiary: {
      default: '#4c52bc1a',
    },
  },

  text: {
    primary: {
      default: '#222',
      _dark: '#fff',
    },
    secondary: {
      default: '#2d2d2d',
    },
  },
};
