"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { getAllPosts } from '@/utils/blogUtils';

export default function BlogSection() {
  const posts = getAllPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5); // Get 5 most recent posts

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-white font-bebas text-5xl mb-2">News & Insights</h2>
        </motion.div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group border-b border-white/10 pb-8">
                  <div className="text-sm text-white/60 mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }).toUpperCase()}
                  </div>
                  <h3 className="text-2xl text-white group-hover:text-[#E5C07B] transition-colors mb-2 flex items-center gap-2">
                    {post.title}
                    <ArrowUpRightIcon className="h-5 w-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-white/80">{post.excerpt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/blog" 
            className="group relative px-8 py-3 text-white overflow-hidden rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
            <span className="relative font-bebas tracking-wider text-lg">
              VIEW ALL POSTS
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}