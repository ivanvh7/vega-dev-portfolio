'use server';

/**
 * @fileOverview Analyzes contact form submissions to identify common themes, user sentiments, and areas for service improvement.
 *
 * - analyzeContactFormSubmissions - A function that analyzes contact form submissions.
 * - AnalyzeContactFormSubmissionsInput - The input type for the analyzeContactFormSubmissions function.
 * - AnalyzeContactFormSubmissionsOutput - The return type for the analyzeContactFormSubmissions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeContactFormSubmissionsInputSchema = z.object({
  submissions: z.array(
    z.object({
      name: z.string().describe('Name of the submitter'),
      email: z.string().email().describe('Email of the submitter'),
      company: z.string().optional().describe('Company of the submitter'),
      budget: z.string().optional().describe('Budget of the submitter'),
      message: z.string().describe('Message from the submitter'),
    })
  ).describe('Array of contact form submissions'),
});
export type AnalyzeContactFormSubmissionsInput = z.infer<typeof AnalyzeContactFormSubmissionsInputSchema>;

const AnalyzeContactFormSubmissionsOutputSchema = z.object({
  themes: z.array(z.string()).describe('Common themes identified in the submissions'),
  sentimentAnalysis: z.string().describe('Overall sentiment analysis of the submissions'),
  improvementAreas: z.array(z.string()).describe('Areas for improvement in service offerings'),
});
export type AnalyzeContactFormSubmissionsOutput = z.infer<typeof AnalyzeContactFormSubmissionsOutputSchema>;

export async function analyzeContactFormSubmissions(input: AnalyzeContactFormSubmissionsInput): Promise<AnalyzeContactFormSubmissionsOutput> {
  return analyzeContactFormSubmissionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContactFormSubmissionsPrompt',
  input: {schema: AnalyzeContactFormSubmissionsInputSchema},
  output: {schema: AnalyzeContactFormSubmissionsOutputSchema},
  prompt: `You are an AI assistant tasked with analyzing contact form submissions to identify trends and provide insights.

  Analyze the following submissions:
  {{#each submissions}}
  --Submission--
  Name: {{{name}}}
  Email: {{{email}}}
  Company: {{company}}
  Budget: {{budget}}
  Message: {{{message}}}
  --End Submission--
  {{/each}}

  Identify common themes, perform a sentiment analysis, and suggest areas for improvement in the service offerings. Be concise.

  Output should be a JSON object with "themes", "sentimentAnalysis", and "improvementAreas" keys.
  Themes should be a list of strings.
  SentimentAnalysis should be a string.
  ImprovementAreas should be a list of strings.`,
});

const analyzeContactFormSubmissionsFlow = ai.defineFlow(
  {
    name: 'analyzeContactFormSubmissionsFlow',
    inputSchema: AnalyzeContactFormSubmissionsInputSchema,
    outputSchema: AnalyzeContactFormSubmissionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
