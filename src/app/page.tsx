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
  FileText,
  Heart,
  LayoutGrid,
} from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div id="resume-container" className="resume-container mx-auto max-w-4xl rounded-lg border bg-card p-6 sm:p-10 shadow-lg">
          {/* Name and Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">{resumeData.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground sm:text-xl">{resumeData.title}</p>
          </div>

          {/* Contact Info & Links */}
          <div className="mb-10 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4"/>
                  <span>{resumeData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4"/>
                  <span>{resumeData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4"/>
                  <span>{resumeData.contact.location}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={resumeData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href={resumeData.links.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href={resumeData.links.lattes} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                <FileText className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Summary Section */}
          <Section title="Summary" icon={<User />}>
             <CardContent>
              <p className="w-full text-base whitespace-pre-wrap">{resumeData.summary}</p>
             </CardContent>
          </Section>

          {/* Experience Section */}
          <Section title="Experience" icon={<Briefcase />}>
            <CardContent className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="group relative">
                  <div className="font-semibold text-primary">
                    {exp.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {exp.company}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {exp.date}
                  </div>
                  <p className="text-base whitespace-pre-wrap">{exp.description}</p>
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
                    {edu.degree}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {edu.school}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {edu.date}
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
                    {dev.name}
                  </div>
                </div>
              ))}
            </CardContent>
          </Section>

          {/* Skills Section */}
          <Section title="Skills" icon={<Star />}>
            <CardContent>
              <p className="w-full text-base">{resumeData.skills.join(', ')}</p>
            </CardContent>
          </Section>
          
          {/* Projects Section */}
          <Section title="Projects" icon={<LayoutGrid />}>
            <CardContent>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="font-semibold text-primary">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {project.name}
                    </a>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.description}
                  </div>
                </div>
              ))}
            </CardContent>
          </Section>

          {/* Hobbies and Interests Section */}
          <Section title="Hobbies and Interests" icon={<Heart />}>
            <CardContent>
              <p className="w-full text-base">{resumeData.hobbies.join('; ')}</p>
            </CardContent>
          </Section>

        </div>
      </main>
    </div>
  );
}