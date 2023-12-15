import { useCallback, useMemo, useState } from 'react';
import { Flex, Box, Heading, Text, useDisclosure } from '@chakra-ui/react';

// Constants
import { SERVICES, CATEGORIES, PRODUCTS } from '@/__mocks__';

// Types
import { Product, STATUS, TableData } from '@/interfaces';

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
import { CircleIcon } from '@/assets/icons';

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

  const productHeaderColumn = useMemo(() => {
    const customViewStatus = (value: string | number | boolean) =>
      value.toString() === STATUS.Activated.toString() ? (
        <Flex alignItems='center'>
          <CircleIcon color='background.component.quaternary' mr='1' />
          <Text variant='textSm'>Activated</Text>
        </Flex>
      ) : (
        <Flex alignItems='center'>
          <CircleIcon color='secondary.500' mr='1' />
          <Text variant='textSm'>Deactivated</Text>
        </Flex>
      );

    return [
      {
        key: 'name',
        label: 'Product name',
        width: '30%',
        onSort: () => null,
      },
      {
        key: 'brand',
        label: 'Brand name',
        width: '25%',
      },
      {
        key: 'service',
        label: 'Service',
        width: '15%',
      },
      {
        key: 'status',
        label: 'Status',
        width: '15%',
        customView: customViewStatus,
      },
      {
        key: 'actions',
        label: 'Actions',
        width: '15%',
        isAction: true,
      },
    ];
  }, []);

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
            columns={productHeaderColumn}
            data={(data || []) as unknown as TableData[]}
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
