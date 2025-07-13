import type { ResumeData } from './types';

export const initialResumeData: ResumeData = {
  name: 'Jane Doe',
  title: 'Full Stack Developer',
  profession: 'Software Engineering',
  contact: {
    email: 'jane.doe@email.com',
    phone: '123-456-7890',
    location: 'San Francisco, CA',
  },
  summary:
    'Innovative and deadline-driven Software Engineer with 8+ years of experience designing and developing user-centered digital products from initial concept to final, polished deliverable.',
  experience: [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      date: 'Jan 2018 - Present',
      description:
        '- Led a team of 5 developers in the creation of a new client-facing web application.\n- Architected and implemented a scalable microservices backend using Node.js and Docker.\n- Improved application performance by 30% through code optimization and database query tuning.',
    },
    {
      title: 'Software Engineer',
      company: 'Innovate LLC',
      date: 'Jun 2015 - Dec 2017',
      description:
        '- Developed and maintained front-end features using React and Redux for a large-scale e-commerce platform.\n- Collaborated with UX/UI designers to create responsive and accessible user interfaces.\n- Wrote comprehensive unit and integration tests, increasing code coverage by 25%.',
    },
  ],
  education: [
    {
      degree: 'M.S. in Computer Science',
      school: 'Stanford University',
      date: '2013 - 2015',
    },
    {
      degree: 'B.S. in Computer Science',
      school: 'University of California, Berkeley',
      date: '2009 - 2013',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'NoSQL',
    'Docker',
    'AWS',
    'Agile Methodologies',
  ],
};
