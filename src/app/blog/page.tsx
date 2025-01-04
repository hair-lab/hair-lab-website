"use client";

import { useState } from 'react';
import Link from 'next/link';
import { BlogPost, SortOption, filterPosts, getAllPosts, getAllTags } from '@/utils/blogUtils';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');

  const posts = getAllPosts();
  const allTags = getAllTags(posts);
  const filteredPosts = filterPosts(posts, {
    search: searchQuery,
    tags: selectedTags,
    sortBy: sortOption,
  });

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search posts..."
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value as SortOption)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-gray-900"
        >
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => {
              setSelectedTags(prev =>
                prev.includes(tag)
                  ? prev.filter(t => t !== tag)
                  : [...prev, tag]
              );
            }}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTags.includes(tag)
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filteredPosts.map((post) => (
          <Link 
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="block border border-gray-200 p-6 rounded-lg hover:border-gray-300 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="text-gray-600 mb-2">
              {post.date} · {post.author} · {post.readingTime}
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <div className="flex gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
        
        {filteredPosts.length === 0 && (
          <div className="text-center text-gray-600 py-8">
            No posts found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}