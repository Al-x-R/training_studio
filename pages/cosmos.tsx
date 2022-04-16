import React from 'react';
import Header from '../components/Header';
import { NAV_ITEMS } from '../helpers/helpers';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const Cosmos = () => {
  return (
    <>
      <Header navItems={NAV_ITEMS} />
      <Flex
        backgroundImage={`url(/images/gym_main.jpeg)`}
        backgroundPosition={'center'}
        backgroundAttachment={'fixed'}
        backgroundRepeat={'no-repeat'}
        backgroundSize='cover'
        w={'100%'}
        h={'100vh'}
        pt={'150px'}
        justify={'center'}
      >
        <Flex flexDir={'column'} color={'white'}>
          <Heading as={'h1'} size={'3xl'}>
            Maximus
          </Heading>
          <Text fontSize={'2xl'} pt={3}>
            Энергия твоего успеха!
          </Text>
        </Flex>
      </Flex>
      <Box h={'500px'} w={'100%'}>
        <Box>Section</Box>
        <Box>Section</Box>
        <Box>Section</Box>
        <Box>Section</Box>
        <Box>Section</Box>
        <Box>Section</Box>
      </Box>
    </>
  );
};

export default Cosmos;
