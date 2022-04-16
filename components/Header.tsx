import React, { FC } from 'react';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IMenuItem } from '../interfaces';

interface IMenuList {
  navItems: IMenuItem[];
}

const Header: FC<IMenuList> = ({ navItems }) => {
  console.log('test');
  return (
    <Flex
      w={'100%'}
      h={20}
      justify={'space-between'}
      align={'center'}
      px={10}
      backgroundColor={'lightgrey'}
      color={'white'}
    >
      <Text fontSize='lg'>
        <Link href={'/'}>Maximus</Link>
      </Text>
      <List d={'flex'}>
        {navItems.map((item) => (
          <ListItem key={item.id} px={2}>
            <Link href={item.link}>{item.name}</Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Header;
