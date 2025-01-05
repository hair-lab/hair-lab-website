"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { publications, getCategories, Publication } from '@/data/publications';

// 1) Define the type for your Projects
interface ResearchProject {
  title: string;
  category: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed';
}

// 2) Provide your Projects array (You can also import from a separate file if you prefer)
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
  },
  // Add more projects as needed
];

export default function ResearchPage() {
  const [projectFilter, setProjectFilter] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [pubCategory, setPubCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'title'>('year');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  // 3) Filter the Projects based on the selected filter
  const filteredProjects = projects.filter((project) =>
    projectFilter === 'all' ? true : project.status === projectFilter
  );

  // 4) Prepare categories for Publications
  const categories = ['all', ...getCategories()];

  // 5) Filter and sort Publications
  const filteredAndSortedPubs = publications
    .filter((pub) => (pubCategory === 'all' ? true : pub.category === pubCategory))
    .sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year;  // Descending year
      }
      return a.title.localeCompare(b.title);
    });

  // 6) Pagination for Publications
  const totalPages = Math.ceil(filteredAndSortedPubs.length / ITEMS_PER_PAGE);
  const paginatedPubs = filteredAndSortedPubs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Research</h1>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
        <div className="flex gap-4 mb-8">
          {['all', 'ongoing', 'completed'].map((status) => (
            <button
              key={status}
              onClick={() => setProjectFilter(status as typeof projectFilter)}
              className={`px-4 py-2 rounded-lg border ${
                projectFilter === status
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
                  <span
                    className={`text-sm px-2 py-1 rounded ${
                      project.status === 'ongoing'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Publications</h2>

        {/* Publications Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-4">
            <label className="text-gray-700">Category:</label>
            <select
              value={pubCategory}
              onChange={(e) => {
                setPubCategory(e.target.value);
                setCurrentPage(1); // Reset to the first page
              }}
              className="px-4 py-2 border border-gray-200 rounded-lg"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value as 'year' | 'title');
                setCurrentPage(1); // Reset to the first page
              }}
              className="px-4 py-2 border border-gray-200 rounded-lg"
            >
              <option value="year">Year (Latest first)</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6 mb-8">
          {paginatedPubs.map((pub) => (
            <Link
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              key={`${pub.title}-${pub.year}`}
              className="block border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:bg-gray-50 transition-all group"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-grow">
                  <div className="flex items-start gap-2">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <ArrowUpRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                  </div>
                  <p className="text-gray-600 mb-2">{pub.authors.join(", ")}</p>
                  <p className="text-gray-700 mb-1">{pub.venue}</p>
                  {pub.citation && (
                    <p className="text-gray-500 text-sm">{pub.citation}</p>
                  )}
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-gray-500">{pub.year}</span>
                  <span className="text-sm px-2 py-1 bg-gray-100 rounded mt-2">
                    {pub.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Publications Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg border ${
                  currentPage === page
                    ? 'bg-gray-800 text-white border-gray-800'
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}