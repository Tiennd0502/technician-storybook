import { Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import { CircleIcon } from '@/assets/icons';

const ProductStatistics = () => (
  <Flex
    flexDirection='column'
    justifyContent='space-between'
    borderRadius='md'
    p='7'
    borderWidth='1px'
    borderColor='border.primary'
    h='100%'
  >
    <Flex justifyContent='space-between' alignItems='center'>
      <Heading as='h3' variant='headingXl'>
        Total Products
      </Heading>
      <Text variant='text3Xl'>350</Text>
    </Flex>
    <Image src='total-product.png' alt='Total product' />
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
  </Flex>
);

export default ProductStatistics;
