'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

type EditableFieldProps = {
  value: string;
  onSave: (value: string) => void;
  className?: string;
  placeholder?: string;
  as?: 'h1' | 'p' | 'div' | 'textarea';
};

export const EditableField: React.FC<EditableFieldProps> = ({
  value,
  onSave,
  className,
  placeholder,
  as: Component = 'div',
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (elementRef.current && elementRef.current.innerHTML !== value) {
      elementRef.current.innerHTML = value.replace(/\n/g, '<br>');
    }
  }, [value]);

  const handleBlur = () => {
    const newValue = elementRef.current?.innerText || '';
    onSave(newValue);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && Component !== 'textarea') {
      e.preventDefault();
      (e.target as HTMLElement).blur();
    }
  };
  
  if (Component === 'textarea') {
     return (
       <Textarea
         value={value}
         onChange={(e) => onSave(e.target.value)}
         placeholder={placeholder}
         className={cn("bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 p-0 resize-none h-auto", className)}
       />
     );
  }

  return React.createElement(Component, {
    ref: elementRef,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    className: cn(
      'outline-none focus:bg-primary/10 focus:rounded-md px-1 -mx-1 transition-colors',
      !value && 'text-muted-foreground/50',
      className
    ),
    'data-placeholder': placeholder,
    style: {
      whiteSpace: 'pre-wrap'
    },
    dangerouslySetInnerHTML: { __html: value ? value.replace(/\n/g, '<br>') : placeholder },
  });
};
