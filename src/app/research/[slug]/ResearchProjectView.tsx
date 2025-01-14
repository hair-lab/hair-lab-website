"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { ResearchProject } from '@/data/research';

interface ResearchProjectViewProps {
  project: ResearchProject;
}

export default function ResearchProjectView({ project }: ResearchProjectViewProps) {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <Link 
        href="/research"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to Research
      </Link>

      <div className="mb-8">
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-600">{project.category}</span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            project.status === 'ongoing'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 text-lg mb-8">{project.description}</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Duration</h3>
              <p className="text-gray-700">{project.projectDetails.duration}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Principal Investigator</h3>
              <p className="text-gray-700">{project.projectDetails.principalInvestigator}</p>
            </div>

            {project.projectDetails.coInvestigators && project.projectDetails.coInvestigators.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Co-Investigator (Co-I)</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {project.projectDetails.coInvestigators.map((coI, index) => (
                    <li key={index}>{coI}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.projectDetails.fundedBy && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Funded By</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {project.projectDetails.fundedBy.map((funder, index) => (
                    <li key={index}>{funder}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}