"use client";

import React from 'react';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className={`relative z-40 ${isHomePage ? 'bg-transparent' : 'bg-[#293351]'} text-white ${!isHomePage && 'border-t border-gray-700'}`}>
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Human & Artificial Intelligence Research Lab</h3>
            <p className={`${isHomePage ? 'text-white' : 'text-gray-300'} mb-4`}>
              Advancing the intersection of human intelligence and artificial intelligence at Yonsei University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>About</Link>
              </li>
              <li>
                <Link href="/people" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>People</Link>
              </li>
              <li>
                <Link href="/research" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>Research</Link>
              </li>
              <li>
                <Link href="/projects" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>Projects</Link>
              </li>

              <li>
                <Link href="/blog" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>Blog</Link>
              </li>
              <li>
                <Link href="/contact" className={`${isHomePage ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'} transition-colors`}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                <p className={`${isHomePage ? 'text-white' : 'text-gray-300'}`}>
                  Engineering Building, Yonsei University<br />
                  50 Yonsei-ro, Seodaemun-gu<br />
                  Seoul, South Korea
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-8 pt-8 ${!isHomePage && 'border-t border-gray-700'}`}>
          <p className={`${isHomePage ? 'text-white/80' : 'text-gray-400'} text-sm text-center`}>
            © {currentYear} Human AI Lab, Yonsei University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}