import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <Flex
      as={'footer'}
      position={'absolute'}
      bottom={0}
      right={0}
      left={0}
      px={10}
      py={5}
      w={'100%'}
      h={'150px'}
      background={'silver'}
    >
      {/*<Box px={10} py={5} w={'100%'} background={'silver'}>*/}
      <Flex color={'white'} justify={'space-between'} w={'100%'} borderBottom={'1px'} pb={3}>
        <Text fontSize={'3xl'}>СК Maximus</Text>
        <Flex flexDir={'column'}>
          <Text fontSize={'2xl'} pb={3}>
            Присоединяйся
          </Text>
          <Flex>
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
        </Flex>
      </Flex>
      {/*</Box>*/}
    </Flex>
  );
};

export default Footer;
