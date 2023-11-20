export interface EventData {
  id: number;
  title: string;
  description: string;
  price: number;
  date: Date;
  location: string;
}

export const eventsData: EventData[] = [
  {
    id: 1,
    title: 'Concert Under the Stars',
    description: 'Join us for a night of music and entertainment under the open sky.',
    price: 45,
    date: new Date('2023-08-15'),
    location: 'Central Park, New York City'
  },
  {
    id: 2,
    title: 'AWS re:Invent 2023',
    description: 'The largest gathering of the AWS community to explore the latest in cloud technology.',
    price: 300,
    date: new Date('2023-11-27'),
    location: 'Las Vegas Convention Center, Las Vegas'
  },
  {
    id: 3,
    title: 'Tech Conference 2023',
    description: 'An immersive experience into the future of technology and innovation.',
    price: 200,
    date: new Date('2023-09-10'),
    location: 'Moscone Center, San Francisco'
  },
  {
    id: 4,
    title: 'Startup Summit',
    description: 'A gathering of budding entrepreneurs and industry experts.',
    price: 75,
    date: new Date('2023-07-22'),
    location: 'Austin Convention Center, Austin'
  },
  {
    id: 5,
    title: 'Music Festival 2023',
    description: 'A three-day celebration of music with top artists from around the world.',
    price: 150,
    date: new Date('2023-10-05'),
    location: 'Coachella Valley, California'
  },
];