export interface Contact {
  email: string;
  phone: string;
  location: string;
}

export interface Links {
  linkedin: string;
  github: string;
  lattes: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  date: string;
}

export interface ProfessionalDevelopment {
  name: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: Contact;
  links: Links;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  professionalDevelopment: ProfessionalDevelopment[];
  hobbies: string[];
}
