"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { researchProjects } from '@/data/research';

export default function ProjectGallery() {
  // Sort projects by status (ongoing first) and take the 3 most recent
  const recentProjects = [...researchProjects]
    .sort((a, b) => {
      // Sort ongoing projects first
      if (a.status === 'ongoing' && b.status !== 'ongoing') return -1;
      if (a.status !== 'ongoing' && b.status === 'ongoing') return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <section id="projects" className="relative py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-white font-bebas text-5xl">FEATURED PROJECTS</h2>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative"
            >
              <Link href={`/projects/${project.id}`}>
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
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/10 transition-all border border-white/10 h-full"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white/80">{project.category}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        project.status === 'ongoing' 
                          ? 'bg-green-500/20 text-green-200'
                          : 'bg-blue-500/20 text-blue-200'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center"
        >
          <Link 
            href="/projects" 
            className="group relative px-8 py-3 text-white overflow-hidden rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-colors"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
            <span className="relative font-bebas tracking-wider text-lg">
              VIEW ALL PROJECTS
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}