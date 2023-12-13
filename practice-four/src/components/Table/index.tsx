import { memo } from 'react';
import { Heading, Text, Flex, Box, Button, Checkbox } from '@chakra-ui/react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';

// Types
import { TableData, TableHeader } from '@/interfaces';

// Assets
import { FilterIcon } from '@/assets/icons';

interface TableProps {
  title: string;
  columns: TableHeader[];
  data: TableData[];
}

const Table = ({ title, columns, data }: TableProps) => (
  <Box p='7' borderWidth='1px' borderRadius='md' borderColor='primary'>
    <Flex justifyContent='space-between' mb='7' alignItems='center'>
      <Heading variant='headingLg'>{title}</Heading>
      <Button as={Flex} gap='4' variant='outline'>
        Filter <FilterIcon />
      </Button>
    </Flex>
    <Flex gap='1' flexDirection='column'>
      <Flex bg='background.section.primary' borderRadius='md' h='50px' w='100%'>
        <Box w='50px'></Box>
        <Flex w='100%' role='list'>
          {columns.map(({ key, label, width, onSort }) => (
            <Flex key={key} alignItems='center' gap='5' w={width}>
              <Text variant='textSm'>{label}</Text>
              {onSort ? (
                <Flex flexDirection='column'>
                  <TriangleUpIcon w='4' h='2' />
                  <TriangleDownIcon w='4' h='2' />
                </Flex>
              ) : null}
            </Flex>
          ))}
        </Flex>
      </Flex>
      {data?.map((item) => (
        <Flex
          key={item.id}
          h='50px'
          borderWidth='1px'
          borderRadius='md'
          borderColor='secondary'
          alignItems='center'
        >
          <Box w='50px' textAlign='center'>
            <Checkbox size='lg' isDisabled />
          </Box>
          <Flex w='100%'>
            {columns.map(({ key, width }) => (
              <Box w={width}>
                <Text key={key} variant='textSm'>
                  {item[key]}
                </Text>
              </Box>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  </Box>
);

export default memo(Table);
