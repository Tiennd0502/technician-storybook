import { Box, Flex, List, ListItem, Link, Text } from '@chakra-ui/react';

// Assets
import { ArrowLeftIcon } from '@/assets/icons';

// Types
import { Menu } from '@/interfaces';

// Components
import { Logo } from '..';

interface SidebarPros {
  listItem: Menu[];
}

const Sidebar = ({ listItem }: SidebarPros) => (
  <Flex
    flexDirection='column'
    pos='relative'
    bg='url(/public/bg-sidebar.svg) no-repeat'
    width='250px'
    height='100vh'
    objectFit='cover'
  >
    <Box m='5'>
      <Logo />
    </Box>
    <Box w='fit-content' pos='absolute' top='68px' right='-18px' zIndex='1'>
      <ArrowLeftIcon />
    </Box>
    <List mt='8' role='list'>
      {listItem?.map(({ id, label, leftIcon, href }) => {
        const LeftIcon = leftIcon || <></>;

        return (
          <ListItem
            key={id}
            _hover={{
              background: 'background.component.tertiary',
            }}
          >
            <Flex as={Link} href={href} p='5' gap='2.5' _hover={{ textDecoration: 'none' }}>
              <LeftIcon />
              <Text color='white'>{label}</Text>
            </Flex>
          </ListItem>
        );
      })}
    </List>
  </Flex>
);

export default Sidebar;
