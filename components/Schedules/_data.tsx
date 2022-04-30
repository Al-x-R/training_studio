import { Box } from '@chakra-ui/react';
import SectionCellData from './SectionCellData';

export const columns = [
  {
    Header: '',
    accessor: 'section',
    Cell: function SectionCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          <SectionCellData data={data} />
        </Box>
      );
    },
  },
  {
    Header: 'Понедельник',
    accessor: 'mon',
    Cell: function MondayCell(data: any) {
      console.log('cell', data);
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Вторник',
    accessor: 'tue',
    Cell: function TuesdayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Среда',
    accessor: 'wed',
    Cell: function WednesdayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Четверг',
    accessor: 'thu',
    Cell: function ThursdayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Пятница',
    accessor: 'fri',
    Cell: function FridayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Суббота',
    accessor: 'sat',
    Cell: function SaturdayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
  {
    Header: 'Воскресенье',
    accessor: 'sun',
    Cell: function SundayCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
        </Box>
      );
    },
  },
];

export const data = [
  {
    section: { trainer: 'Trainer name', section: 'section' },
    mon: '15:00 - 16:00',
    tue: '',
    wed: '15:00 - 16:00',
    thu: '',
    fri: '15:00 - 16:00',
    sat: '',
    sun: '',
  },
  {
    section: { trainer: 'Trainer name', section: 'section' },
    mon: '18:00 - 19:00',
    tue: '',
    wed: '18:00 - 19:00',
    thu: '',
    fri: '18:00 - 19:00',
    sat: '',
    sun: '',
  },
  {
    section: { trainer: 'Trainer name', section: 'section' },
    mon: '',
    tue: '15:00 - 16:00',
    wed: '',
    thu: '15:00 - 16:00',
    fri: '',
    sat: '15:00 - 16:00',
    sun: '',
  },
];
