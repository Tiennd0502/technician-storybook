import { useCallback, useMemo, useState } from 'react';
import { Flex, Box, Heading, Text, useDisclosure } from '@chakra-ui/react';

// Constants
import { SERVICES, CATEGORIES } from '@/__mocks__';
import { DEFAULT_PRODUCT_FILTER } from '@/constants';
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
  ConfirmModal,
} from '@/components';

// Hooks
import { useFetchProducts, useProduct } from '@/hooks';
import { CircleIcon } from '@/assets/icons';

const Home = () => {
  const [productEdit, setProductEdit] = useState<Product>();
  const [productDelete, setProductDelete] = useState<string>('');

  const { data: products = [] } = useFetchProducts();
  const {
    createProduct: { mutate: createProduct, isPending: isCreating },
    editProduct: { mutate: editProduct, isPending: isEditing },
    deleteProduct: { mutate: deleteProduct, isPending: isDeleting },
  } = useProduct();

  const { isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm } = useDisclosure();
  const {
    isOpen: isOpenConfirmModal,
    onOpen: onOpenConfirmModal,
    onClose: onCloseConfirmModal,
  } = useDisclosure();

  const handleCloseForm = useCallback(() => {
    productEdit && setProductEdit(undefined);
    onCloseForm();
  }, [onCloseForm, productEdit]);

  const handleOpenConfirmModal = useCallback(
    (id: string) => {
      setProductDelete(id);
      onOpenConfirmModal();
    },
    [onOpenConfirmModal],
  );

  const handleCloseConfirmModal = useCallback(() => {
    setProductDelete('');
    onCloseConfirmModal();
  }, [onCloseConfirmModal]);

  const handleSubmitProduct = useCallback(
    (data: Product) => {
      const mutate = productEdit ? editProduct : createProduct;

      mutate(data, {
        onSettled: handleCloseForm,
      });
    },
    [productEdit, createProduct, editProduct, handleCloseForm],
  );

  const handleClickEditProduct = useCallback(
    (id: string) => {
      setProductEdit(products?.find((product) => product.id === id));
      onOpenForm();
    },
    [onOpenForm, products],
  );

  const handleDeleteProduct = useCallback(() => {
    deleteProduct(productDelete, {
      onSettled: handleCloseConfirmModal,
    });
  }, [deleteProduct, handleCloseConfirmModal, productDelete]);

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
        key: 'checkbox',
        label: 'Checkbox',
        width: {
          md: '30px',
          lg: '50px',
        },
        isCheckbox: true,
      },
      {
        key: 'name',
        label: 'Product name',
        width: {
          md: '100%',
          lg: '28%',
        },
        onSort: () => null,
      },
      {
        key: 'brand',
        label: 'Brand name',
        width: {
          md: '100%',
          lg: '17%',
        },
      },
      {
        key: 'service',
        label: 'Service',
        width: {
          md: '100%',
          lg: '15%',
        },
      },
      {
        key: 'status',
        label: 'Status',
        width: {
          md: '100%',
          lg: '18%',
        },
        customView: customViewStatus,
      },
      {
        key: 'actions',
        label: 'Actions',
        width: {
          md: '100%',
          lg: 'calc(32% - 35px)',
        },
        isAction: true,
      },
    ];
  }, []);

  return (
    <Box pr='5'>
      {isOpenForm && (
        <ProductForm
          title={`${productEdit ? 'Edit' : 'Add'} Product`}
          defaultValues={productEdit}
          isOpen={isOpenForm}
          isSubmitting={isCreating || isEditing}
          onSubmit={handleSubmitProduct}
          onClose={handleCloseForm}
        />
      )}
      {isOpenConfirmModal && (
        <ConfirmModal
          title='Delete Product'
          description='Are you sure you want to delete this product?'
          isOpen={isOpenConfirmModal}
          isSubmitting={isDeleting}
          onSubmit={handleDeleteProduct}
          onClose={handleCloseConfirmModal}
        />
      )}
      <Flex gap='5' flexWrap='wrap'>
        <Flex
          w={{
            base: '100%',
            xl: 'calc(67% - 10px)',
          }}
          flexDirection='column'
          justifyContent='space-between'
          gap='5'
          borderWidth='1px'
          borderColor='border.primary'
          borderRadius='md'
          p='7'
          order={{
            md: 1,
            xl: 1,
          }}
        >
          <Heading>About Services</Heading>
          <ServiceList list={SERVICES} />
          <Categories list={CATEGORIES} />
        </Flex>
        <Box
          w={{
            sm: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 2, xl: 2 }}
        >
          <ProductStatistics />
        </Box>
        <Box
          w={{
            base: '100%',
            xl: 'calc(67% - 10px)',
          }}
          order={{ md: 4, xl: 3 }}
        >
          <Table
            title='Products listing'
            filter={DEFAULT_PRODUCT_FILTER}
            columns={productHeaderColumn}
            data={products as unknown as TableData[]}
            onAdd={onOpenForm}
            onEdit={handleClickEditProduct}
            onDelete={handleOpenConfirmModal}
          />
        </Box>
        <Box
          w={{
            base: '100%',
            md: 'calc(50% - 10px)',
            xl: 'calc(33% - 10px)',
          }}
          order={{ md: 3, xl: 4 }}
        >
          <Technician />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
