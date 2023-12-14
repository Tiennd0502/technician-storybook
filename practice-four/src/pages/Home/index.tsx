import { Flex, Box, Heading } from '@chakra-ui/react';

// Constants
import { SERVICES, CATEGORIES, PRODUCTS } from '@/__mocks__';
import { PRODUCT_HEADER_COLUMNS } from '@/constants';

// Components
import { Categories, ProductStatistics, ServiceList, Table, Technician } from '@/components';

const Home = () => (
  <Box pr='5'>
    <Flex gap='5'>
      <Flex
        w='67%'
        flexDirection='column'
        justifyContent='space-between'
        gap='5'
        borderWidth='1px'
        borderColor='border.primary'
        borderRadius='md'
        p='7'
      >
        <Heading>About Services</Heading>
        <ServiceList list={SERVICES} />
        <Categories list={CATEGORIES} />
      </Flex>
      <Box w='33%'>
        <ProductStatistics />
      </Box>
    </Flex>
    <Flex gap='5' mt='5'>
      <Box w='67%'>
        <Table title='Products listing' columns={PRODUCT_HEADER_COLUMNS} data={PRODUCTS} />
      </Box>
      <Box w='33%'>
        <Technician />
      </Box>
    </Flex>
  </Box>
);

export default Home;
