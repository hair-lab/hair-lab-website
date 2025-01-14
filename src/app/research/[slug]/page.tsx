import { redirect } from 'next/navigation';

export default function ResearchProjectPage({ params }: { params: { slug: string } }) {
  // Redirect old research project URLs to the new projects URL
  redirect(`/projects/${params.slug}`);
}