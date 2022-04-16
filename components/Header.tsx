import React, { FC } from 'react';
import { Flex, List, ListItem, Text } from '@chakra-ui/react';

const menuList = [
  {id: 1, title: 'Главня'},
  {id: 2, title: 'О нас'},
  {id: 3, title: 'Секции'},
  {id: 4, title: 'Расписания'},
  {id: 5, title: 'Цены'},
]

interface IMenuList {
  id: number;
  title: string;
}

const Header: FC<IMenuList> = ({id, title}) => {
  return (
    <Flex w={'100%'} h={20} justify={'space-between'} px={10} backgroundColor={'rgba(250, 250, 250, 0.1)'}>
      <Text fontSize="lg">Logo</Text>
      <List d={'flex'}>
        {menuList.map(item => (
          <ListItem key={item.id} px={2}>{item.title}</ListItem>
        ))}
      </List>
    </Flex>
  );
};

export default Header;