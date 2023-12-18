import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Logo = () => (
  <Flex gap='2.5'>
    <Image src='technician.svg' alt='Technician' />
    <Box>
      <Text
        width='fit-content'
        color='text.tertiary'
        fontWeight='normal'
        variant='textLg'
        letterSpacing='0.275px'
      >
        Technician
      </Text>
      <Text
        width='fit-content'
        fontWeight='normal'
        variant='textSm'
        color='text.tertiary'
        opacity='0.5'
        letterSpacing='0.193px'
      >
        At Home
      </Text>
    </Box>
  </Flex>
);

export default Logo;
