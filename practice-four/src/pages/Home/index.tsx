import { useCallback, useState } from 'react';
import { Flex, Box, Heading, useDisclosure } from '@chakra-ui/react';

// Constants
import { SERVICES, CATEGORIES, PRODUCTS } from '@/__mocks__';
import { PRODUCT_HEADER_COLUMNS } from '@/constants';

// Types
import { Product } from '@/interfaces';

// Components
import {
  Categories,
  ProductStatistics,
  ServiceList,
  Table,
  ProductForm,
  Technician,
} from '@/components';

// Hooks
import { useFetchProducts } from '@/hooks';

const Home = () => {
  const [productEdit, setProductEdit] = useState<Product>();
  const { data } = useFetchProducts();

  const { isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm } = useDisclosure();

  const handleSubmitProduct = useCallback(() => {}, []);

  const handleClickEditProduct = useCallback(
    (id: string) => {
      setProductEdit(PRODUCTS.find((product) => product.id === id));
      onOpenForm();
    },
    [onOpenForm],
  );

  const handleClickDeleteProduct = useCallback(() => {}, []);

  return (
    <Box pr='5'>
      {isOpenForm && (
        <ProductForm
          defaultValues={productEdit}
          isOpen={isOpenForm}
          onSubmit={handleSubmitProduct}
          onClose={onCloseForm}
        />
      )}
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
          <Table
            title='Products listing'
            columns={PRODUCT_HEADER_COLUMNS}
            data={data || []}
            onAdd={onOpenForm}
            onEdit={handleClickEditProduct}
            onDelete={handleClickDeleteProduct}
          />
        </Box>
        <Box w='33%'>
          <Technician />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
