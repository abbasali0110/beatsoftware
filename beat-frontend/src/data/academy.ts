import { TopCourse, Project, Thought } from '../types';

export const topCourses: TopCourse[] = [
  {
    id: 101,
    imgUrl: 'assets/images/academy/top-course.jpg',
    heading: 'Full Stack Developer',
    desc: 'Java Full Stack Developer Practical Guide covers Java, Spring Boot, JPA, SQL, PL/SQL, HTML5, CSS3, Bootstrap, Angular.',
    students: 263,
    share: 6,
    url: 'https://beatsoftware.in/java-course-detail',
  },
  {
    id: 102,
    imgUrl: 'assets/images/academy/top-course.jpg',
    heading: 'Python Programming',
    desc: 'Learn Python programming language with this online course. Dive into theory and complete numerous practice exercises to master your coding skills.',
    students: 190,
    share: 4,
    url: 'https://beatsoftware.in/java-course-detail',
  },
  {
    id: 103,
    imgUrl: 'assets/images/academy/top-course.jpg',
    heading: 'Angular Developer',
    desc: "From Setup to Deployment, this course covers it all! You'll learn all about Angular Framework and develop a stunning Responsive Web Application.",
    students: 463,
    share: 8,
    url: 'https://beatsoftware.in/java-course-detail',
  },
  {
    id: 104,
    imgUrl: 'assets/images/academy/top-course.jpg',
    heading: 'SQL Developer',
    desc: 'This tutorial provides an in-depth knowledge to the Structured Query Language (SQL).',
    students: 263,
    share: 6,
    url: 'https://beatsoftware.in/java-course-detail',
  },
];

export const projects: Project[] = [
  {
    imgUrl: 'assets/images/course/python2.png',
    name: 'Digital Magazine',
    domain: 'News & Reporting',
    description:
      'Misbah is a digital magazine platform. You will get hands on experience of Angular Material, Angular, Java, Spring Boot, and SQL/PLSQL in an office like work environment.',
  },
  {
    imgUrl: 'assets/images/course/python.jpg',
    name: 'Ninja Store',
    domain: 'E-Commerce',
    description:
      'Ninja store is an e-commerce web application. You will learn the latest technologies Bootstrap, Angular, Java, Spring Boot, and Oracle while developing the application from scratch to production.',
  },
];

export const skillBenefits: string[] = [
  'Learn technical skills to achieve your personal and professional goals.',
  'Schedule learning path at your own pace.',
  'Go from dabbler to master in a matter of hours.',
  'Guidance and mentorship with industry experts.',
  '24X7 Virtual Lab.',
];

export const thoughts: Thought[] = [
  {
    id: 101,
    name: 'Abhishek Bhardwaj',
    designation: 'Software Engineer',
    quote:
      "If you're looking for a perfect application, look no further than Beat Technologies! My product's interface is intuitive and easy-to-use. I can't imagine using anyone else for my software needs!",
    imgUrl: 'assets/images/employee/abhishek.jpeg',
  },
  {
    id: 102,
    name: 'Ratnakar Paswan',
    designation: 'Full Stack Developer',
    quote:
      'We thank Beat Technologies for the brilliant job in helping us to develop our application. Everyone here is professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in future.',
    imgUrl: 'assets/images/employee/ratnakar.jpeg',
  },
  {
    id: 103,
    name: 'Haider Abbas',
    designation: 'Backend Developer',
    quote:
      'We have been working with Beat Technologies for over 2 years now. I must say we have come a long way together and Beat has done a wonderful job.',
    imgUrl: 'assets/images/employee/haider.jpg',
  },
];
