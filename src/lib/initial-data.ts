import type { ResumeData } from './types';

export const initialResumeData: ResumeData = {
  name: 'Leonardo Henrique Tomassetti Ferreira Neto',
  title: 'Software Engineer',
  contact: {
    email: 'eng.leonardo.neto@gmail.com',
    phone: '+55 19 99741-4799',
    location: 'São João da Boa Vista, SP, Brazil',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/leonardohtfn/',
    github: 'https://github.com/leotomassetti/',
    lattes: 'http://lattes.cnpq.br/4183827947361960',
  },
  summary:
    'Entrepreneurial engineer with 15+ years’ experience across diverse industries with proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results. Extreme competence in multi-disciplinary hands-on, well-organized and customer-focused with proven skills in project management and team leadership.',
  experience: [
    {
      title: 'Senior Software Development Analyst',
      company: 'UL Solutions',
      date: 'Oct 2023 - Present',
      description:
        'Backend developer (C++, C#, .Net, React, Windows, GitHub) responsible for designing, implementing and enhancing existing modules, testing and bug fixing for HOMER (Hybrid Optimization of Multiple Energy Resources) systems.',
    },
    {
      title: 'Senior Software Development Analyst',
      company: 'B3 - Brazil Stock Exchange Market',
      date: 'Nov 2021 - Sep 2023',
      description:
        'Backend developer (Java, SQL, Oracle, Linux, Windows, Git, Jira, BitBucket) responsible for designing, implementing and optimizing a low latency high-frequency trading platform. Helping build and maintain automated test and benchmark framework, risk-management and performance-tracking. Testing, implementing, and benchmarking different feed handlers (internal and external) on different hardware offerings and settings. Scrum master leading 3 cross-functional teams in CI/CD environment.',
    },
    {
      title: 'Senior Software Development Engineer',
      company: 'Siemens',
      date: 'Mar 2021 - Oct 2021',
      description:
        'Full-stack developer (C++, C, VB, SQL, Python, Linux, Windows) responsible for troubleshooting code level problems and enhancing existing modules, testing and bug fixing methods. Collaborated closely with management and key stakeholders from USA and Germany and pro-actively implemented practices to increase quality and productivity.',
    },
    {
      title: 'R&D Engineer',
      company: 'Sense Plus',
      date: 'Aug 2019 - Feb 2021',
      description:
        'Full-stack developer responsible for research and prototype applications of Augmented Reality tools for remote assistance. Conceive, design and develop AR show cases and early prototypes. Developed the mobile application cross-platform (Android, iOS and Smart Glasses) and real time communication web server. Used C, C++, C#, Java, JavaScript programming languages, Windows, MacOS, Linux operational systems, Unity3D, Coturn, AWS and GitHub.',
    },
    {
      title: 'University Professor',
      company: 'Federal University of São Carlos',
      date: 'Mar 2019 - Jul 2019',
      description:
        'Substitute professor. Taught two undergraduate electrical engineering classes, subject of C - programming language.',
    },
    {
      title: 'Entrepreneur',
      company: 'Setti Technology',
      date: 'Mar 2016 - Mar 2019',
      description:
        'Founder/R&D Engineer of a technology company focused on computational development and technical consulting in electrical engineering and computational techniques, developing new products (web, desktop and mobile), redesigning existing products, and performing research and testing on product concept. Developed an Android-Zigbee interface for fleet tracking via radio communication, an Android social media with full functionalities (user interaction, geolocation, in-app communication) and web service for user management and media exchange. Used C, C++, C# and Java programming languages, MySQL, Oracle, Firebird and PostgreSQL data bases, AWS, GitHub and GitLab.',
    },
     {
      title: 'University Professor',
      company: 'University Center of Associated Educational Colleges',
      date: 'Feb 2015 - Feb 2016',
      description:
        'Temporary professor. Taught three undergraduate electrical engineering courses (scientific methodology, microprocessors and electrical system modeling and simulations) and two undergraduate computer engineering courses (digital circuits and energy conversion). Supervised four final degree projects.',
    },
    {
      title: 'R&D Project Manager',
      company: 'Daimon Engineering and Systems',
      date: 'Apr 2012 - Mar 2016',
      description:
        'R&D projects planning and execution management, negotiation of deadlines and features changes, products implantation, and on-site training. Architected and implemented engine for solving large combinatorial optimization problems. Conceived and executed new products and projects. Led several multi-disciplinary teams.',
    },
    {
      title: 'R&D Engineer',
      company: 'Daimon Engineering and Systems',
      date: 'Mar 2009 - Mar 2012',
      description:
        'Software development for power electrical networks planning and analysis, such as power flow, maneuver, economic indicators, state estimation, optimization and others. Gather product requirements, mathematical and computer modelling, algorithms and methodologies definition and present proposals and technical reports. Used Windows, MacOS, Linux operational systems, C, C++, C#, SQL programming languages, MySQL, Oracle, Firebird and PostgreSQL data bases. Applied Ant-Colony, Genetic Algorithm, State Estimation, Tabu Search and Evolutionary Algorithm heuristics optimization algorithms, dynamic programming techniques, CUDA and cuBLAS.',
    }
  ],
  education: [
    {
      degree: 'MBA, Data Science in Financial Markets',
      school: 'XP Education',
      date: 'Mar 2023 - Jan 2024',
    },
    {
      degree: 'Ph.D., Electrical Engineering',
      school: 'University of São Paulo',
      date: 'Aug 2012 - Aug 2017',
    },
    {
      degree: 'M.Sc., Electrical Engineering',
      school: 'University of São Paulo',
      date: 'Sep 2009 - Sep 2011',
    },
    {
      degree: 'B.Eng., Electrical Engineering',
      school: 'University of São Paulo',
      date: 'Mar 2003 - Aug 2008',
    },
  ],
  skills: [
    'C', 'C++', 'C#', 'Java', 'Python', 'VB', 'JavaScript', 'SQL', 'HTML', 'CSS',
    'Windows', 'MacOS', 'Linux', 'Mobile iOS', 'Android',
    'Scrum', 'Agile', 'UML', 'Git', 'Unity',
    'MySQL', 'Oracle', 'Firebird', 'PostgreSQL',
    'Microsoft Office', 'Matlab'
  ],
  professionalDevelopment: [
    { name: 'Data Scientist Nanodegree, Udacity, Online Course, 160 hours. 2021.' },
    { name: 'Computer Vision Nanodegree, Udacity, Online Course, 150 hours. 2020.' },
    { name: 'Artificial Intelligence. Columbia University, EDX platform, Online Course, 120 hours. 2020.' },
    { name: 'Machine Learning. University of São Paulo. Online Course, 18h hours. 2020.' },
    { name: 'Python Programming for Data Science. University of São Paulo, 20 hours. São Carlos. 2019.' },
    { name: 'JavaScript. Instituto Federal do Rio Grande do Sul, 30 hours. Online Course. 2018' },
    { name: 'Mobile Development with iOS 5. Caelum Treinamentos, 40 hours, São Paulo, Brazil. 2012.' },
    { name: 'Software House. PECE - Politechnique School - University of São Paulo. 30 hours. 2011.' },
    { name: 'Web Development with JSF2 and JPA2. K19 Treinamentos, 36 hours, São Paulo, Brazil. 2011.' },
    { name: 'Object Oriented with UML 2.0. Caelum Treinamentos, 28 hours, São Paulo, Brazil. 2011.' },
  ],
  projects: [
    {
      name: 'CompraCheck',
      description: 'CompraCheck.com.br',
    },
  ],
  hobbies: ['Reading', 'Craftsmanship', 'Table tennis'],
};
