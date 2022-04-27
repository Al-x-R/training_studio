import { Box } from '@chakra-ui/react';

export const columns = [
  {
    Header: 'Тренер',
    accessor: 'trainer',
    Cell: function TrainerCell(data: any) {
      return (
        <Box fontSize='sm' fontWeight='medium'>
          {data}
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
    trainer: 'Trainer name',
    mon: '15:00 - 16:00',
    tue: '',
    wed: '15:00 - 16:00',
    thu: '',
    fri: '15:00 - 16:00',
    sat: '',
    sun: '',
  },
  {
    trainer: 'Trainer name',
    mon: '18:00 - 19:00',
    tue: '',
    wed: '18:00 - 19:00',
    thu: '',
    fri: '18:00 - 19:00',
    sat: '',
    sun: '',
  },
  {
    trainer: 'Trainer name',
    mon: '',
    tue: '15:00 - 16:00',
    wed: '',
    thu: '15:00 - 16:00',
    fri: '',
    sat: '15:00 - 16:00',
    sun: '',
  },
];
