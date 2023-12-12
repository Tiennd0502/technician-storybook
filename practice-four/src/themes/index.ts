import { extendTheme } from '@chakra-ui/react';

import { radii, colors, fonts, fontSizes, fontWeights } from './bases';
import { Button, Heading, Text } from './components';

export const configThemes = {
  ...extendTheme({
    semanticTokens: {
      fonts,
      fontSizes,
      fontWeights,
      colors,
      radii,
    },
    styles: {
      global: {
        'html, body': {
          fontFamily: 'primary',
        },
      },
    },
    components: {
      Button,
      Heading,
      Text,
    },
  }),
};
