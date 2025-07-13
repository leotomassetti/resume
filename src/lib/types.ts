export interface Contact {
  email: string;
  phone: string;
  location: string;
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
  profession: string;
  contact: Contact;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  professionalDevelopment: ProfessionalDevelopment[];
}
