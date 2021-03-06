import React from 'react';
import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { columns, data } from './_data';

const ScheduleTable = () => {
  return (
    <Box overflowY='auto' maxHeight='calc(100vh - 150px)' mt={2}>
      <Table borderWidth='1px' fontSize='sm'>
        <Thead position='sticky' top={0}>
          <Tr h={10}>
            {columns.map((column, index) => (
              <Th whiteSpace='nowrap' scope='col' key={index} textAlign={'center'}>
                {column.Header}
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          {data.map((row, index) => {
            return (
              <Tr key={index}>
                {columns.map((column, index) => {
                  const cell = row[column.accessor as keyof typeof row];
                  const element = column.Cell?.(cell) ?? cell;
                  return (
                    <Td whiteSpace='nowrap' key={index}>
                      {element}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ScheduleTable;
