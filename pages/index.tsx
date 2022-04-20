import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';
import { GYM_ITEMS } from '../helpers/helpers';

const Home: NextPage = () => {
  return (
    <Box
      backgroundImage={`url(/images/gym_main.jpeg)`}
      backgroundPosition='center'
      backgroundSize='cover'
      w={'100%'}
      h={'100vh'}
      position={'relative'}
      backgroundColor={'rgba(18, 18, 18, 0.1)'}
    >
      <Head>
        <title>Спортивный клуб Maximus</title>
        <meta name='description' content='Спортивный клуб Maximus' />
      </Head>
      {/*<Box position={'fixed'} top={0} left={0} bottom={0} right={0} backgroundColor={'rgba(0,0,0,0.5)'} w={'100%'} h={'100%'} zIndex={5}>*/}

      {/*</Box>*/}

      <Flex position={'absolute'} top={0} right={0} left={0} h={20} px={10}>
        <Flex flexDir={'column'} pt={5}>
          <Heading as={'h1'} size='xl' color={'white'}>
            Maximus
          </Heading>
          <Heading as={'h2'} size='md' color={'white'}>
            Споротивный клуб
          </Heading>
        </Flex>
      </Flex>

      <Flex as={'main'} h={'100%'} w={'100%'} justify={'center'} align={'center'}>
        <Box w={'450px'}>
          {/*     gym description     */}
          <Text fontSize={'2xl'} color={'white'}>
            Спортивный клуб Maximus в Запорожье представлен двумя залами. Первый зал расположен в
            Хо́ртицком районе города, на правом берегу Днепра. Второй зал расположен в Коммунарском
            районе города, на левом берегу Днепра.
          </Text>
        </Box>
        {/*     gyms    */}
        <Flex flexDir={'column'}>
          {GYM_ITEMS.map((item) => (
            <Link href={item.link} key={item.id}>
              <a>
                <Flex
                  align={'center'}
                  w={'380px'}
                  h={'150px'}
                  color={'white'}
                  py={10}
                  pl={10}
                  _hover={{
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    cursor: 'pointer',
                  }}
                >
                  <Box pr={4}>
                    <GoLocation size={50} />
                  </Box>
                  <Flex flexDir={'column'}>
                    <Heading as={'h3'}>{item.name}</Heading>
                    <Text>{item.address}</Text>
                  </Flex>
                </Flex>
              </a>
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex
        as={'footer'}
        position={'absolute'}
        bottom={0}
        right={0}
        left={0}
        h={20}
        px={10}
        color={'white'}
      >
        <Box>
          <Link href={'https://www.instagram.com/sk_maximus_zp/'}>
            <a>
              <FaInstagram size={30} />
            </a>
          </Link>
        </Box>
        <Box pl={4}>
          <Link href={'/#'}>
            <a>
              <FaTelegramPlane size={30} />
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
