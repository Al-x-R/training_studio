import React, { FC } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

interface ISectionItem {
  name: string;
  link: string;
  image: string;
}

const SectionItem: FC<ISectionItem> = ({name, image, link}) => {
  return (
        <Box
          w={'300px'}
          h={'300px'}
          overflow={'hidden'}
          position={'relative'}
          backgroundImage={`url(${image})`}
          backgroundPosition={'center'}
          backgroundSize='cover'
        >
          <Flex
            w={'100%'}
            h={'50px'}
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
            <Heading fontSize={'lg'} color={'black'}>{name}</Heading>
          </Flex>
        </Box>
  );
};

export default SectionItem;
