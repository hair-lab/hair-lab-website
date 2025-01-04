import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/blogUtils';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#293351] text-white pt-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-bebas text-5xl mb-4">{post.title}</h1>
        <div className="text-white/60 mb-8">
          {post.date} · {post.author} · {post.readingTime}
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}