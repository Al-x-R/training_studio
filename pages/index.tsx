import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { GoLocation } from 'react-icons/go';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Box backgroundImage={`url(/images/gym_main.jpeg)`}
         backgroundPosition="center"
         backgroundSize="cover"
         w={'100%'}
         h={'100vh'}
         position={'relative'}
         backgroundColor={'rgba(18, 18, 18, 0.1)'}
    ><Head>
      <title>Спортивный клуб Maximus</title>
      <meta name="description" content="Спортивный клуб Maximus"/>
    </Head>
      {/*<Box position={'fixed'} top={0} left={0} bottom={0} right={0} backgroundColor={'rgba(0,0,0,0.5)'} w={'100%'} h={'100%'} zIndex={5}>*/}

      {/*</Box>*/}


      <Flex position={'absolute'} top={0} right={0} left={0} h={20} px={10}>
        <Flex flexDir={'column'} pt={5}>
          <Heading as={'h1'} size="xl" color={'white'}>Maximus</Heading>
          <Heading as={'h2'} size="md" color={'white'}>Споротивный клуб</Heading>
        </Flex>
      </Flex>

      <Flex as={'main'} h={'100%'} w={'100%'} justify={'center'} align={'center'}>
        <Link href={'/cosmos'}>
          <Flex flexDir={'column'} justify={'center'} align={'center'} w={'280px'} h={'250px'} color={'white'} p={10}
                _hover={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer'
                }}>
            <GoLocation size={50}/>
            <Heading as={'h3'}>Космос</Heading>
            <Text>Космічна, 119</Text>
          </Flex>
        </Link>
        <Link href={'/baburka'}>
          <Flex flexDir={'column'} justify={'center'} align={'center'} w={'280px'} h={'250px'} color={'white'} p={10}
                _hover={{
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                }}>
            <GoLocation size={50}/>
            <Heading as={'h3'}>Бабурка</Heading>
            <Text>Героїв 93-ї бригади, 22</Text>
          </Flex>
        </Link>
      </Flex>

      <Flex as={'footer'} position={'absolute'} bottom={0} right={0} left={0} h={20} px={10} color={'white'}>
        <Box><Link href={'https://www.instagram.com/sk_maximus_zp/'}><FaInstagram size={30} /></Link></Box>
        <Box pl={4}><Link href={'/#'}><FaTelegramPlane size={30} /></Link></Box>
      </Flex>
    </Box>
  );
};

export default Home;
