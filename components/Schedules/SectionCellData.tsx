import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

interface ISectionCell {
  data: {
    trainer: string;
    section: string;
  };
}
const SectionCellData: FC<ISectionCell> = ({ data }) => {
  const { trainer, section } = data;

  return (
    <Flex flexDir={'column'} px={2}>
      <Box borderBottom={'1px'} textAlign={'center'} pb={2}>
        <Text fontSize={'lg'}>{section}</Text>
      </Box>
      <Box textAlign={'center'} pt={2}>
        <Text fontSize={'md'}>{trainer}</Text>
      </Box>
    </Flex>
  );
};

export default SectionCellData;
