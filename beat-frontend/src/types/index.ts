export interface Opportunity {
  id: number;
  name: string;
  desc: string;
  location: string;
  startDate: Date;
  duration: number;
  stipend: number;
  lastDate: Date;
  skills: string[];
  qualifications: string[];
  requirements: string[];
  benefits: string[];
  responsibilities: string[];
}

export interface Benefit {
  id: number;
  icon: string;
  heading: string;
  desc: string;
  imgUrl: string;
}

export interface Life {
  id: number;
  heading: string;
  desc: string;
  imgUrl: string;
}

export interface Leader {
  id: number;
  name: string;
  designation: string;
  imgUrl: string;
  desc: string;
}

export interface Team {
  id: number;
  name: string;
  designation: string;
  imgUrl: string;
}

export interface Thought {
  id: number;
  name: string;
  designation: string;
  quote: string;
  imgUrl: string;
}

export interface TopCourse {
  id: number;
  imgUrl: string;
  heading: string;
  desc: string;
  students: number;
  share: number;
  url: string;
}

export interface Project {
  imgUrl: string;
  name: string;
  domain: string;
  description: string;
}

export interface Testimonial {
  imgUrl: string;
  statement: string;
  address: string;
}

export interface CarouselSlide {
  imgUrl: string;
  heading: string;
  desc: string;
  headingColor: string;
  descColor: string;
}
