'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { enhanceResumeContent } from '@/app/actions';
import { Sparkles, Bot } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Skeleton } from '../ui/skeleton';

interface AiEnhanceButtonProps {
  content: string;
  profession: string;
  onEnhance: (newContent: string) => void;
}

export const AiEnhanceButton: React.FC<AiEnhanceButtonProps> = ({
  content,
  profession,
  onEnhance,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enhancedContent, setEnhancedContent] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleEnhanceClick = () => {
    if (!profession) {
        toast({
            variant: "destructive",
            title: "Profession not set",
            description: "Please provide your profession/industry in the AI Settings section.",
        });
        return;
    }

    setIsOpen(true);
    startTransition(async () => {
      try {
        const result = await enhanceResumeContent({
          resumeContent: content,
          profession: profession,
          industry: profession,
        });
        setEnhancedContent(result.enhancedContent);
        setSuggestions(result.suggestions);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to get AI suggestions.',
        });
        setIsOpen(false);
      }
    });
  };

  const handleAccept = () => {
    onEnhance(enhancedContent);
    setIsOpen(false);
    toast({
      title: 'Content Enhanced!',
      description: 'The section has been updated with AI suggestions.',
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 text-accent"
        onClick={handleEnhanceClick}
      >
        <Sparkles className="h-4 w-4" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bot className="text-accent"/> AI Enhancement
            </DialogTitle>
            <DialogDescription>
              Here are the AI's suggestions to improve your resume content.
            </DialogDescription>
          </DialogHeader>
          {isPending ? (
            <div className="space-y-4 py-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-8 w-1/3" />
              <div className="flex flex-wrap gap-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-28" />
              </div>
            </div>
          ) : (
            <div>
                <h4 className="font-semibold mt-4 mb-2">Suggested Revision:</h4>
                <div className="rounded-md border bg-muted p-4 text-sm whitespace-pre-wrap font-mono">
                    {enhancedContent}
                </div>
                
                <h4 className="font-semibold mt-4 mb-2">Key Suggestions:</h4>
                <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, i) => (
                        <Badge key={i} variant="secondary">{suggestion}</Badge>
                    ))}
                </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAccept} disabled={isPending}>
              Accept Suggestions
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
