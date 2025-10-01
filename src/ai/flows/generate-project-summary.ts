'use server';

/**
 * @fileOverview Generates a concise project summary from a GitHub repository URL.
 *
 * - generateProjectSummary - An function that generates the project summary.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectSummaryInputSchema = z.object({
  repoUrl: z
    .string()
    .describe('The URL of the GitHub repository to summarize.'),
});
export type GenerateProjectSummaryInput = z.infer<
  typeof GenerateProjectSummaryInputSchema
>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the project, highlighting its key features and technologies.'),
});
export type GenerateProjectSummaryOutput = z.infer<
  typeof GenerateProjectSummaryOutputSchema
>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  prompt: `You are an AI expert in summarizing software projects based on their GitHub repository URL.
  Your goal is to provide a concise and informative summary that highlights the project's key features,
  the technologies used, and its purpose. The summary should be no more than 150 words.

  Analyze the GitHub repository at the following URL: {{{repoUrl}}}

  Focus on identifying the project's main functionality, the technologies and libraries it uses,
  and any notable aspects of its implementation. Provide a clear and engaging summary that would
  be useful for potential clients or collaborators.

  Summary:`, // Ensure the LLM outputs plain text instead of JSON.
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {summary: output!.summary};
  }
);
