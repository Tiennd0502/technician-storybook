import { ChakraProvider, CSSReset } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
    </ChakraProvider>
  );
};

export default App;
