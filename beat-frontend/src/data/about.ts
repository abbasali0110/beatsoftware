import { Leader, Team } from '../types';

export const leaders: Leader[] = [
  {
    id: 101,
    name: 'Amar Husain',
    designation: 'CO-Founder & CEO',
    imgUrl: 'assets/images/employee/amar.jpg',
    desc: 'Leads the daily operations at beat, including product development and global sales. He is passionate about people, sports, and really efficient processes.',
  },
  {
    id: 102,
    name: 'Vipin Kumar Singh',
    designation: 'Chief Technology Officer',
    imgUrl: 'assets/images/employee/vipin.jpeg',
    desc: "Fearlessly leads our engineering team and is responsible for Beat's underlying technology. His focus is on data acquisition, with a passion for backend architecture and infrastructure.",
  },
  {
    id: 103,
    name: 'Vivek Singh',
    designation: 'Chief Product Officer',
    imgUrl: 'assets/images/employee/vivek.jpeg',
    desc: "Oversees all stages of Beat's product lifecycle. Strategic thinker with a passion for building teams and creating elegant solutions to complex problems.",
  },
  {
    id: 104,
    name: 'Abbas Ali',
    designation: 'CO-Founder & Chairman',
    imgUrl: 'assets/images/employee/abbas.jpeg',
    desc: "Drives Beat's strategic vision and manages investor relations.",
  },
];

export const teams: Team[] = [
  { id: 101, name: 'Amar Husain', designation: 'CO-Founder & CEO', imgUrl: 'assets/images/employee/employee1.JPG' },
  { id: 102, name: 'Abbas Ali', designation: 'CO-Founder & Chairman', imgUrl: 'assets/images/employee/abbas.jpeg' },
  { id: 103, name: 'Firdaus Fatima', designation: 'UI/UX Designer', imgUrl: 'assets/images/employee/woman.png' },
  { id: 104, name: 'Ratnakar Paswan', designation: 'Frontend Developer', imgUrl: 'assets/images/employee/ratnakar.jpeg' },
  { id: 107, name: 'Fatima Zehra', designation: 'Data Analyst', imgUrl: 'assets/images/employee/woman.png' },
  { id: 105, name: 'Haider Abbas', designation: 'Full Stack Developer', imgUrl: 'assets/images/employee/haider.jpg' },
  { id: 108, name: 'Tooba Haider', designation: 'Graphic Designer', imgUrl: 'assets/images/employee/woman.png' },
  { id: 109, name: 'Vivek Singh', designation: 'Chief Product Officer', imgUrl: 'assets/images/employee/vivek.jpeg' },
  { id: 110, name: 'You?', designation: "We're hiring!", imgUrl: 'assets/images/employee/future-employee.jpg' },
];
