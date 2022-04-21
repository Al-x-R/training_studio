import React, { FC } from 'react';
import { Box, Heading, Flex, AspectRatio } from '@chakra-ui/react';
import Link from 'next/link';

interface ISectionItem {
  name: string;
  link: string;
  image: string;
}

const SectionItem: FC<ISectionItem> = ({ name, image, link }) => {
  return (
    <Link href={link}>
      <a>
        <AspectRatio width={'100%'} ratio={1}>
          <Box
            overflow={'hidden'}
            position={'relative'}
            backgroundImage={`url(${image})`}
            backgroundPosition={'center'}
            backgroundSize='cover'
            shadow='md'
            borderWidth='1px'
          >
            <Flex
              w={'100%'}
              h={'25%'}
              position={'absolute'}
              bottom={0}
              left={0}
              align={'center'}
              justify={'center'}
              flexDir={'column'}
              color={'white'}
              pb={2}
              backgroundColor={'rgba(250,250,250,0.7)'}
            >
              <Heading fontSize={'lg'} color={'black'}>
                {name}
              </Heading>
            </Flex>
          </Box>
        </AspectRatio>
      </a>
    </Link>
  );
};

export default SectionItem;
