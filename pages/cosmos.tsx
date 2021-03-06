import React from 'react';
import Header from '../components/Header';
import { NAV_ITEMS, COSMOS_SECTION_ITEMS } from '../helpers/helpers';
import { Box, Flex, Heading, ScaleFade, Text } from '@chakra-ui/react';
import SectionItem from '../components/SectionItem';
import TrainerItem from '../components/TrainerItem';
import Footer from '../components/Footer';
import ScheduleTable from '../components/Schedules/ScheduleTable';
import Slider from '../components/Slider';

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
        pt={'170px'}
        justify={'center'}
      >
        <Flex flexDir={'column'} color={'white'} align={'center'}>
          <Heading as={'h1'} size={'4xl'}>
            Maximus
          </Heading>
          <Text fontSize={'3xl'} pt={3}>
            Энергия твоего успеха!
          </Text>
        </Flex>
      </Flex>
      {/*     sections     */}
      <Box textAlign={'center'}>
        <Heading as={'h2'} size={'3xl'} py={5}>
          Наши услуги
        </Heading>
        <Flex w={'100%'} px={10} flexWrap={'wrap'}>
          {COSMOS_SECTION_ITEMS.map((item) => (
            <Box key={item.id} w={'30%'} m={5}>
              <SectionItem image={item.image} name={item.name} link={item.link} />
            </Box>
          ))}
        </Flex>
      </Box>

      {/*     schedules     */}
      <Flex w={'100%'} h={'500px'} background={'silver'} justify={'center'}>
        <ScheduleTable />
      </Flex>
      {/*trainers*/}
      <Flex w={'100%'} h={'500px'} background={'white'} flexDir={'column'}>
        <Box>trainers</Box>
        {/*<Box w={'30%'}>*/}
        {/*  <TrainerItem />*/}
        {/*</Box>*/}
        <Box>
          <Slider />
        </Box>
      </Flex>

      {/*    footer    */}
      {/*<Flex w={'100%'} h={'150px'}>*/}
      {/*  <Footer />*/}
      {/*</Flex>*/}
    </>
  );
};

export default Cosmos;
