import React, { FC } from 'react';
import { Box, AspectRatio, Text, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';

// interface ITrainerItem {
//   fullName: string;
//   section: string;
//   link: string;
// }

const TrainerItem: FC = () => {
  return (
    <Link href={'/#'}>
      <a>
        <AspectRatio w={'100%'} ratio={6 / 7}>
          <Box shadow='md' borderWidth='1px' position={'relative'} overflow={'visible !important'}>
            <Box w={'100%'} h={'100%'} overflow={'hidden'}>
              <Image
                src={'/images/trainer.jpeg'}
                h={'100%'}
                objectFit='cover'
                objectPosition={'center'}
                transition={'transform 0.25s'}
                _hover={{ transform: 'scale(1.1)' }}
              />
            </Box>
            <Flex
              position={'absolute'}
              bottom={0}
              left={'50%'}
              transform={'translateX(-50%)'}
              w={'90%'}
              h={'100px'}
              shadow='md'
              borderWidth='1px'
              backgroundColor={'rgba(250,250,250,0.7)'}
              align={'center'}
              justify={'center'}
              flexDir={'column'}
            >
              <Text fontSize={'2xl'}>Full name</Text>
              <Text fontSize={'lg'}>section</Text>
            </Flex>
          </Box>
        </AspectRatio>
      </a>
    </Link>
  );
};

export default TrainerItem;
