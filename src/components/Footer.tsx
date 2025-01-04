import React from 'react';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Human AI Lab</h3>
            <p className="text-gray-600 mb-4">
              Advancing the intersection of human intelligence and artificial intelligence at Seoul National University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-600 hover:text-gray-900">Research</Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-600 hover:text-gray-900">People</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-5 h-5 text-gray-500 mt-0.5" />
                <p className="text-gray-600">
                  Building 301, Seoul National University<br />
                  1 Gwanak-ro, Gwanak-gu<br />
                  Seoul, South Korea
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Human AI Lab, Seoul National University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}