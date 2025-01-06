import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/blogUtils';
import ReactMarkdown from 'react-markdown';
import { ClockIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full h-[40vh] bg-gradient-to-r from-[#293351] via-[#374569] to-[#465982] relative">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto max-w-4xl h-full px-4 relative">
          <div className="flex flex-col justify-end h-full pb-16">
            <div className="flex gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-white text-sm backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-bebas text-6xl text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white -mt-16 relative rounded-lg shadow-xl p-8">
          <div className="prose max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-12 flex justify-between items-center py-6 border-t">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">← Previous Post</button>
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Next Post →</button>
        </div>
      </div>
    </article>
  );
}