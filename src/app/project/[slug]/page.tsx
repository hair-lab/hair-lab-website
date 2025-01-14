import { notFound } from 'next/navigation';
import { researchProjects } from '@/data/research';
import ProjectView from './ProjectView';

// Generate static paths for all research projects
export async function generateStaticParams() {
  return researchProjects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = researchProjects.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectView project={project} />;
}