import React, { FC } from 'react';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IMenuItem } from '../interfaces';

interface IMenuList {
  navItems: IMenuItem[];
}

const Header: FC<IMenuList> = ({ navItems }) => {
  return (
    <Flex
      w={'100%'}
      h={20}
      justify={'space-between'}
      align={'center'}
      px={10}
      backgroundColor={'rgba(250,250,250,0.7)'}
      color={'black'}
      transition={'all .5s ease 0s'}
      position={'absolute'}
      top={0}
      right={0}
      left={0}
      zIndex={10}
    >
      <Text fontSize='lg'>
        <Link href={'/'}>
          <a>Maximus</a>
        </Link>
      </Text>
      <List d={'flex'}>
        {navItems.map((item) => (
          <ListItem key={item.id} px={2}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Header;
