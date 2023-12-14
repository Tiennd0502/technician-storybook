import { memo } from 'react';
import {
  Button,
  Radio,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
} from '@chakra-ui/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { Product } from '@/interfaces';
import { PRODUCT_RULES } from '@/constants';
import { Input } from '@/components';

interface ProductFormProps {
  title?: string;
  defaultValues?: Product;
  onSubmit: SubmitHandler<Product>;
  isSubmitting?: boolean;
  isOpen: boolean;
  onClose: VoidFunction;
}

const ProductForm = ({
  title = 'Add Product',
  defaultValues,
  onSubmit,
  isSubmitting,
  isOpen,
  onClose,
}: ProductFormProps) => {
  const { control, handleSubmit } = useForm<Product>({
    reValidateMode: 'onSubmit',
    defaultValues,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius='md' p='7' minW='90%'>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack as='form' onSubmit={handleSubmit(onSubmit)} id='form' spacing='2'>
            <Controller
              control={control}
              name='name'
              rules={PRODUCT_RULES.name}
              render={({ field: { value, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Product Name:'
                  defaultValue={value}
                  placeholder='Product Name'
                />
              )}
            />
            <Controller
              control={control}
              name='brand'
              rules={PRODUCT_RULES.service}
              render={({ field: { value, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Brand Name:'
                  defaultValue={value}
                  placeholder='Brand Name'
                />
              )}
            />
            <Controller
              control={control}
              name='service'
              rules={PRODUCT_RULES.service}
              render={({ field: { value, ...field }, fieldState: { error } }) => (
                <Input
                  {...field}
                  error={error?.message || ''}
                  label='Service:'
                  defaultValue={value}
                  placeholder='Service'
                />
              )}
            />
            <Controller
              control={control}
              name='status'
              render={({ field: { value, ...field } }) => (
                <FormControl>
                  <FormLabel>Status:</FormLabel>
                  <RadioGroup defaultValue='0' {...field}>
                    <Flex gap='3'>
                      <Radio {...field} isChecked={!!value} value='1'>
                        Activated
                      </Radio>
                      <Radio isChecked={!!value} value='0'>
                        Deactivated
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </FormControl>
              )}
            />
          </VStack>
        </ModalBody>
        <ModalFooter as={Flex} justifyContent='center'>
          <Button variant='outline' isDisabled={isSubmitting} ml='auto' mr='6' onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' form='form' isLoading={isSubmitting} color='white'>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default memo(ProductForm);
