'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a resume summary.
 *
 * - generateResumeSummary - A function that generates a resume summary based on user input.
 * - GenerateResumeSummaryInput - The input type for the generateResumeSummary function.
 * - GenerateResumeSummaryOutput - The return type for the generateResumeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeSummaryInputSchema = z.object({
  experience: z
    .string()
    .describe('A short description of your work experience.'),
  jobType: z.string().describe('The types of jobs you are applying for.'),
});
export type GenerateResumeSummaryInput = z.infer<typeof GenerateResumeSummaryInputSchema>;

const GenerateResumeSummaryOutputSchema = z.object({
  summary: z.string().describe('A resume summary generated based on the provided experience and job type.'),
});
export type GenerateResumeSummaryOutput = z.infer<typeof GenerateResumeSummaryOutputSchema>;

export async function generateResumeSummary(input: GenerateResumeSummaryInput): Promise<GenerateResumeSummaryOutput> {
  return generateResumeSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateResumeSummaryPrompt',
  input: {schema: GenerateResumeSummaryInputSchema},
  output: {schema: GenerateResumeSummaryOutputSchema},
  prompt: `You are a resume expert. Please generate a resume summary based on the following information:

Experience: {{{experience}}}
Job Type: {{{jobType}}}

Resume Summary:`,
});

const generateResumeSummaryFlow = ai.defineFlow(
  {
    name: 'generateResumeSummaryFlow',
    inputSchema: GenerateResumeSummaryInputSchema,
    outputSchema: GenerateResumeSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
