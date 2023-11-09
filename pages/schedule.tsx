import { Container, Table, Text } from '@mantine/core';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

interface IScheduleItem {
  name: string;
  time: string;
  coach?: string;
}

const Schedule: NextPageWithLayout = () => {
  const schedule: any = [
    {
      time: '5:00',
      days: [
        { monday: '5:00 - 6:00', name: 'Functional Fitness' },
        { tuesday: '5:00 - 6:00', name: 'Functional Fitness' },
        { wednesday: '5:00 - 6:00', name: 'Functional Fitness' },
        { thursday: '5:00 - 6:00', name: 'Functional Fitness' },
        { friday: '5:00 - 6:00', name: 'Functional Fitness' },
        { saturday: '', name: '' },
      ],
    },
    {
      time: '6:00',
      days: [
        { monday: '6:00 - 7:00', name: 'Functional Fitness' },
        { tuesday: '6:00 - 7:00', name: 'Functional Fitness' },
        { wednesday: '6:00 - 7:00', name: 'Functional Fitness' },
        { thursday: '6:00 - 7:00', name: 'Functional Fitness' },
        { friday: '6:00 - 7:00', name: 'Functional Fitness' },
        { saturday: '6:00 - 7:00', name: 'Functional Fitness' },
      ],
    },
    {
      time: '7:00',
      days: [
        { monday: '7:00 - 8:00', name: 'Functional Fitness' },
        { tuesday: '7:00 - 7:35', name: 'Bootcamp/HIIT' },
        { wednesday: '7:00 - 8:00', name: 'Functional Fitness' },
        { thursday: '7:00 - 7:35', name: 'Bootcamp/HIIT' },
        { friday: '7:00 - 8:00', name: 'Functional Fitness' },
        { saturday: '7:00 - 8:00', name: 'Bootcamp/HIIT' },
      ],
    },
    {
      time: '8:00',
      days: [
        { monday: '', name: '' },
        { tuesday: '', name: '' },
        { wednesday: '', name: '' },
        { thursday: '', name: '' },
        { friday: '', name: '' },
        { saturday: '8:00 - 8:30', name: 'Functional Fitness' },
      ],
    },
    {
      time: '12:00',
      days: [
        { monday: '12:00 - 13:00', name: 'Functional Fitness' },
        { tuesday: '12:00 - 13:00', name: 'Functional Fitness' },
        { wednesday: '12:00 - 13:00', name: 'Functional Fitness' },
        { thursday: '12:00 - 13:00', name: 'Functional Fitness' },
        { friday: '12:00 - 13:00', name: 'Functional Fitness' },
        { saturday: '', name: '' },
      ],
    },
    {
      time: '16:30',
      days: [
        { monday: '16:30 - 16:30', name: 'Functional Fitness' },
        { tuesday: '16:30 - 16:30', name: 'Functional Fitness' },
        { wednesday: '16:30 - 16:30', name: 'Functional Fitness' },
        { thursday: '16:30 - 16:30', name: 'Functional Fitness' },
        { friday: '16:30 - 17:05', name: 'Booty Builder' },
        { saturday: '', name: '' },
      ],
    },
    {
      time: '17:30',
      days: [
        { monday: '17:30 - 18:15', name: 'Bootcamp/HIIT' },
        { tuesday: '17:30 - 18:30', name: 'Functional Fitness' },
        { wednesday: '17:30 - 18:15', name: 'Bootcamp/HIIT' },
        { thursday: '17:30 - 18:30', name: 'Functional Fitness' },
        { friday: '', name: '' },
        { saturday: '', name: '' },
      ],
    },
  ];

  const rowsCols = schedule.map((rows: any, rowKey: any) => (
    <tr key={rowKey}>
      <td>{rows.time}</td>
      {rows.days.map((col: any, colKey: any) => (
        <td key={colKey}>
          {(col.name === 'Bootcamp/HIIT' || col.name === 'Booty Builder') && (
            <Text
              variant="gradient"
              gradient={{ from: 'orange', to: 'red', deg: 45 }}
              fz="md"
              fw={700}
            >
              {col.name}
            </Text>
          )}
          {col.name === 'Functional Fitness' && (
            <Text
              variant="gradient"
              gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
              fz="md"
              fw={700}
            >
              {col.name}
            </Text>
          )}
          <br />
          <Text size="xs">{col.monday}</Text>
          <Text size="xs">{col.tuesday}</Text>
          <Text size="xs">{col.wednesday}</Text>
          <Text size="xs">{col.thursday}</Text>
          <Text size="xs">{col.friday}</Text>
          <Text size="xs">{col.saturday}</Text>
          <Text size="xs">{col.sunday}</Text>
        </td>
      ))}
    </tr>
  ));

  return (
    <Container>
      <h1>Training Schedule</h1>

      <section className="basis-full">
        <Table striped highlightOnHover withColumnBorders>
          <thead>
            <tr>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>{rowsCols}</tbody>
        </Table>
      </section>
    </Container>
  );
};

export default Schedule;

Schedule.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
