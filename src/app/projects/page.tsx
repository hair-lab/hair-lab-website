"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { researchProjects } from '@/data/research';

export default function ProjectsPage() {
  const ITEMS_PER_PAGE = 5;

  // Project filters and pagination
  const [projectStatus, setProjectStatus] = useState<'all' | 'ongoing' | 'completed'>('all');
  const [projectCategory, setProjectCategory] = useState<string>('all');
  const [projectPage, setProjectPage] = useState(1);

  // Get unique project categories
  const projectCategories = ['all', ...new Set(researchProjects.map(project => project.category))];

  // Filter projects
  const filteredProjects = researchProjects
    .filter(project => projectStatus === 'all' ? true : project.status === projectStatus)
    .filter(project => projectCategory === 'all' ? true : project.category === projectCategory);

  // Paginate projects
  const totalProjectPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (projectPage - 1) * ITEMS_PER_PAGE,
    projectPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Research Projects</h1>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-4">
          <label className="text-gray-700">Status:</label>
          <select
            value={projectStatus}
            onChange={(e) => {
              setProjectStatus(e.target.value as typeof projectStatus);
              setProjectPage(1);
            }}
            className="px-4 py-2 border border-gray-200 rounded-lg"
          >
            {['all', 'ongoing', 'completed'].map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-gray-700">Category:</label>
          <select
            value={projectCategory}
            onChange={(e) => {
              setProjectCategory(e.target.value);
              setProjectPage(1);
            }}
            className="px-4 py-2 border border-gray-200 rounded-lg"
          >
            {projectCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-6 mb-8">
        {paginatedProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="block border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:bg-gray-50 transition-all group"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-grow">
                <div className="flex items-start gap-2">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-gray-600 mb-2">PI: {project.projectDetails.principalInvestigator}</p>
                {project.projectDetails.duration && (
                  <p className="text-gray-700 mb-1">Duration: {project.projectDetails.duration}</p>
                )}
                {project.projectDetails.fundedBy && (
                  <p className="text-gray-500 text-sm">
                    Funded by: {project.projectDetails.fundedBy.join(", ")}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end flex-shrink-0">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  project.status === 'ongoing'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {project.status}
                </span>
                <span className="text-sm px-2 py-1 bg-gray-100 rounded mt-2">
                  {project.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalProjectPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalProjectPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setProjectPage(page)}
              className={`px-4 py-2 rounded-lg border ${
                projectPage === page
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}