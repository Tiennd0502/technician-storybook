import { ReactNode } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

import { configThemes } from '@/themes';
import Fonts from '@/themes/components/Fonts';

interface ChakraProvider {
  children: ReactNode;
}

const ThemesProvider = ({ children }: ChakraProvider): JSX.Element => (
  <ChakraProvider theme={configThemes}>
    <CSSReset />
    <Fonts />
    {children}
  </ChakraProvider>
);

export default ThemesProvider;
