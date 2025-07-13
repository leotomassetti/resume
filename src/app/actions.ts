'use server';

import { 
  generateResumeSummary as generateResumeSummaryFlow, 
  type GenerateResumeSummaryInput,
  type GenerateResumeSummaryOutput
} from '@/ai/flows/generate-resume-summary';
import { 
  enhanceResumeContent as enhanceResumeContentFlow,
  type EnhanceResumeContentInput,
  type EnhanceResumeContentOutput
} from '@/ai/flows/enhance-resume-content';

export async function generateResumeSummary(input: GenerateResumeSummaryInput): Promise<GenerateResumeSummaryOutput> {
  return await generateResumeSummaryFlow(input);
}

export async function enhanceResumeContent(input: EnhanceResumeContentInput): Promise<EnhanceResumeContentOutput> {
  return await enhanceResumeContentFlow(input);
}
