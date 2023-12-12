import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { configThemes } from '@/themes';

interface ChakraProvider {
  children: ReactNode;
}

const ThemesProvider = ({ children }: ChakraProvider): JSX.Element => (
  <ChakraProvider theme={configThemes}>{children}</ChakraProvider>
);

export default ThemesProvider;
