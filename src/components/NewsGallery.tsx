"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getAllPosts } from '@/utils/blogUtils';

export default function NewsGallery() {
  const allPosts = getAllPosts();
  const announcementPosts = allPosts
    .filter(post => post.tags.includes('announcement'))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="latest-news" className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-white font-bebas text-5xl">LATEST NEWS</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {announcementPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 1.3,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all border border-white/10"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <h3 className="text-white text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString()} · {post.readingTime}
                  </p>
                  <p className="text-gray-200">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs bg-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link 
            href="/blog?tag=announcement" 
            className="group relative px-8 py-3 text-white overflow-hidden rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
            <span className="relative font-bebas tracking-wider text-lg">
              READ MORE NEWS
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}