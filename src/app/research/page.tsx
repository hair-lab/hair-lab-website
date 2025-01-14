"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { publications, getCategories } from '@/data/publications';

export default function ResearchPage() {
  const ITEMS_PER_PAGE = 5;
  
  // Publication filters and pagination
  const [pubCategory, setPubCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year' | 'title'>('year');
  const [pubPage, setPubPage] = useState(1);

  // Publication filtering and pagination logic
  const categories = ['all', ...getCategories()];
  const filteredAndSortedPubs = publications
    .filter((pub) => (pubCategory === 'all' ? true : pub.category === pubCategory))
    .sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year;
      }
      return a.title.localeCompare(b.title);
    });

  const totalPubPages = Math.ceil(filteredAndSortedPubs.length / ITEMS_PER_PAGE);
  const paginatedPubs = filteredAndSortedPubs.slice(
    (pubPage - 1) * ITEMS_PER_PAGE,
    pubPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Research</h1>

      <section>
        <h2 className="text-2xl font-bold mb-6">Publications</h2>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-4">
            <label className="text-gray-700">Category:</label>
            <select
              value={pubCategory}
              onChange={(e) => {
                setPubCategory(e.target.value);
                setPubPage(1);
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
                setPubPage(1);
              }}
              className="px-4 py-2 border border-gray-200 rounded-lg"
            >
              <option value="year">Year (Latest first)</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

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

        {totalPubPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPubPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setPubPage(page)}
                className={`px-4 py-2 rounded-lg border ${
                  pubPage === page
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