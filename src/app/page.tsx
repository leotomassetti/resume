'use client';

import type { FC } from 'react';
import React from 'react';
import { initialResumeData } from '@/lib/initial-data';
import type { ResumeData } from '@/lib/types';
import { CardContent } from '@/components/ui/card';
import {
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Star,
  User,
  MapPin,
  Award,
  Link as LinkIcon,
  Linkedin,
  Github,
  FileText
} from 'lucide-react';
import { EditableField } from '@/components/resume/editable-field';
import { Section } from '@/components/resume/section';
import { ModeToggle } from '@/components/mode-toggle';

const Header: FC = () => (
  <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b no-print">
    <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <h1 className="text-2xl font-bold text-primary">Resume</h1>
      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </div>
  </header>
);

export default function Home() {
  const [resumeData, setResumeData] = React.useState<ResumeData>(initialResumeData);

  const handleUpdate = (path: string, value: any) => {
    setResumeData((prev) => {
      const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
      const newResumeData = JSON.parse(JSON.stringify(prev));
      let current = newResumeData;
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]] = value;
      return newResumeData;
    });
  };
  
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div id="resume-container" className="resume-container mx-auto max-w-4xl rounded-lg border bg-card p-6 sm:p-10 shadow-lg">
          {/* Name and Title */}
          <div className="text-center mb-10">
            <EditableField
              as="h1"
              value={resumeData.name}
              onSave={(v) => handleUpdate('name', v)}
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl"
              placeholder="Your Name"
            />
            <EditableField
              as="p"
              value={resumeData.title}
              onSave={(v) => handleUpdate('title', v)}
              className="mt-2 text-lg text-muted-foreground sm:text-xl"
              placeholder="Your Professional Title"
            />
          </div>

          {/* Contact Info */}
          <div className="mb-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4"/>
                <EditableField value={resumeData.contact.email} onSave={(v) => handleUpdate('contact.email', v)} placeholder="your.email@example.com" />
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4"/>
                <EditableField value={resumeData.contact.phone} onSave={(v) => handleUpdate('contact.phone', v)} placeholder="(123) 456-7890" />
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4"/>
                <EditableField value={resumeData.contact.location} onSave={(v) => handleUpdate('contact.location', v)} placeholder="City, State" />
              </div>
          </div>
          
          {/* Links Section */}
          <Section title="Links" icon={<LinkIcon />}>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-muted-foreground" />
                <a href={resumeData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-base text-primary hover:underline">
                  <EditableField
                    value={resumeData.links.linkedin}
                    onSave={(v) => handleUpdate('links.linkedin', v)}
                    placeholder="linkedin.com/in/your-profile"
                    className="w-full"
                  />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-muted-foreground" />
                <a href={resumeData.links.github} target="_blank" rel="noopener noreferrer" className="text-base text-primary hover:underline">
                  <EditableField
                    value={resumeData.links.github}
                    onSave={(v) => handleUpdate('links.github', v)}
                    placeholder="github.com/your-username"
                    className="w-full"
                  />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <a href={resumeData.links.lattes} target="_blank" rel="noopener noreferrer" className="text-base text-primary hover:underline">
                  <EditableField
                    value={resumeData.links.lattes}
                    onSave={(v) => handleUpdate('links.lattes', v)}
                    placeholder="lattes.cnpq.br/your-id"
                    className="w-full"
                  />
                </a>
              </div>
            </CardContent>
          </Section>

          {/* Summary Section */}
          <Section title="Summary" icon={<User />}>
             <CardContent>
              <EditableField
                as="textarea"
                value={resumeData.summary}
                onSave={(v) => handleUpdate('summary', v)}
                className="w-full text-base"
                placeholder="A brief professional summary..."
              />
             </CardContent>
          </Section>

          {/* Experience Section */}
          <Section title="Experience" icon={<Briefcase />}>
            <CardContent className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="group relative">
                  <div className="font-semibold text-primary">
                    <EditableField value={exp.title} onSave={(v) => handleUpdate(`experience[${index}].title`, v)} placeholder="Job Title" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <EditableField value={exp.company} onSave={(v) => handleUpdate(`experience[${index}].company`, v)} placeholder="Company Name" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    <EditableField value={exp.date} onSave={(v) => handleUpdate(`experience[${index}].date`, v)} placeholder="Month Year - Month Year" />
                  </div>
                  <EditableField
                    as="textarea"
                    value={exp.description}
                    onSave={(v) => handleUpdate(`experience[${index}].description`, v)}
                    className="text-base"
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              ))}
            </CardContent>
          </Section>

          {/* Education Section */}
          <Section title="Education" icon={<GraduationCap />}>
             <CardContent className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="group relative">
                  <div className="font-semibold text-primary">
                    <EditableField value={edu.degree} onSave={(v) => handleUpdate(`education[${index}].degree`, v)} placeholder="Degree or Certificate" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <EditableField value={edu.school} onSave={(v) => handleUpdate(`education[${index}].school`, v)} placeholder="School or Institution" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    <EditableField value={edu.date} onSave={(v) => handleUpdate(`education[${index}].date`, v)} placeholder="Month Year - Month Year" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Section>

          {/* Professional Development Section */}
          <Section title="Professional Development" icon={<Award />}>
             <CardContent className="space-y-2">
              {resumeData.professionalDevelopment.map((dev, index) => (
                <div key={index} className="group relative">
                   <div className="text-base flex-grow">
                    <EditableField value={dev.name} onSave={(v) => handleUpdate(`professionalDevelopment[${index}].name`, v)} placeholder="Course or Certificate" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Section>

          {/* Skills Section */}
          <Section title="Skills" icon={<Star />}>
            <CardContent>
              <EditableField
                as="textarea"
                value={resumeData.skills.join(', ')}
                onSave={(v) => handleUpdate('skills', v.split(',').map(s => s.trim()))}
                className="w-full text-base"
                placeholder="Skill 1, Skill 2, Skill 3"
              />
            </CardContent>
          </Section>
        </div>
      </main>
    </div>
  );
}
