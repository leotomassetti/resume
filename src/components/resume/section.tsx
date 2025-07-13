import type { FC, ReactNode } from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface SectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({ title, icon, children }) => (
  <section className="mb-8">
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
          </span>
          {title}
        </CardTitle>
      </CardHeader>
      {children}
    </Card>
  </section>
);
