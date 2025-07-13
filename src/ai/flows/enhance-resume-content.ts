'use server';

/**
 * @fileOverview Enhances resume content with AI-powered suggestions.
 *
 * - enhanceResumeContent - A function that enhances resume content.
 * - EnhanceResumeContentInput - The input type for the enhanceResumeContent function.
 * - EnhanceResumeContentOutput - The return type for the enhanceResumeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceResumeContentInputSchema = z.object({
  resumeContent: z.string().describe('The current content of the resume.'),
  profession: z.string().describe('The profession of the user.'),
  industry: z.string().describe('The industry of the user.'),
});
export type EnhanceResumeContentInput = z.infer<typeof EnhanceResumeContentInputSchema>;

const EnhanceResumeContentOutputSchema = z.object({
  enhancedContent: z.string().describe('The enhanced content of the resume.'),
  suggestions: z.array(z.string()).describe('Specific suggestions for improvement.'),
});
export type EnhanceResumeContentOutput = z.infer<typeof EnhanceResumeContentOutputSchema>;

export async function enhanceResumeContent(input: EnhanceResumeContentInput): Promise<EnhanceResumeContentOutput> {
  return enhanceResumeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceResumeContentPrompt',
  input: {schema: EnhanceResumeContentInputSchema},
  output: {schema: EnhanceResumeContentOutputSchema},
  prompt: `You are an AI resume expert. You will improve the user's resume content by rewording bullet points and optimizing keywords.

  Profession: {{{profession}}}
  Industry: {{{industry}}}
  Resume Content: {{{resumeContent}}}

  Provide the enhanced content and a list of specific suggestions for improvement.
  Be concise and professional.
  `,
});

const enhanceResumeContentFlow = ai.defineFlow(
  {
    name: 'enhanceResumeContentFlow',
    inputSchema: EnhanceResumeContentInputSchema,
    outputSchema: EnhanceResumeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
