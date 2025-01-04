"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ResearchProject {
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed';
}

const projects: ResearchProject[] = [
  {
    title: "AI and Animal Behavior",
    category: "Human-AI Interaction",
    description: "Studying patterns in animal behavior to inform AI development and create more naturalistic interaction models.",
    image: "/images/research1.jpg", 
    status: "ongoing"
  },
  {
    title: "Human Perception Studies",
    category: "Human-AI Interaction",
    description: "Investigating how humans perceive and interact with AI systems in various contexts and environments.",
    image: "/images/research2.jpg", 
    status: "ongoing"
  },
  {
    title: "Environmental AI Systems",
    category: "AI Applications",
    description: "Developing AI systems that can adapt to and operate effectively in diverse environmental conditions.",
    image: "/images/research3.jpg",  
    status: "completed"
  }
];

export default function ResearchPage() {
  const [filter, setFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.status === filter
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">Research</h1>
      
      <div className="flex gap-4 mb-8">
        {['all', 'ongoing', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as typeof filter)}
            className={`px-4 py-2 rounded-lg border ${
              filter === status 
                ? 'bg-gray-800 text-white border-gray-800' 
                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.title}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors"
          >
            <div className="relative aspect-video bg-gray-100">
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
                <span className="text-sm text-gray-600">{project.category}</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  project.status === 'ongoing' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}