import { Flex, Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import { CircleIcon } from '@/assets/icons';

const ProductStatistics = () => (
  <Box w='fit-content' borderRadius='md' p='7' borderWidth='1px' borderColor='border.primary'>
    <Flex justifyContent='space-between' alignItems='center'>
      <Heading as='h3' variant='headingXl'>
        Total Products
      </Heading>
      <Text variant='text3Xl'>350</Text>
    </Flex>
    <Image src='public/total-product.png' alt='Total product' />
    <Flex justifyContent='space-between'>
      <Button variant='outline'>
        <CircleIcon color='background.component.quaternary' mr='2.5' />
        Activated
      </Button>
      <Button variant='outline'>
        <CircleIcon color='secondary.500' mr='2.5' />
        Deactivated
      </Button>
    </Flex>
  </Box>
);

export default ProductStatistics;
