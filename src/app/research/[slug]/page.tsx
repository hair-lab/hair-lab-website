import { redirect } from 'next/navigation';

export default async function ResearchProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Redirect old research project URLs to the new projects URL
  redirect(`/projects/${slug}`);
}