import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { peopleData } from '@/data/people';

interface PersonProps {
  name: string;
  title: string;
  image: string;
  slug: string;
}

const Person: React.FC<PersonProps> = ({ name, title, image, slug }) => (
  <Link href={`/people/${slug}`} className="group">
    <div className="flex flex-col items-center text-center p-6 space-y-4 transition-transform hover:scale-105">
      <div className="relative w-48 h-48 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  </Link>
);

export default function PeoplePage() {
  const people = Object.entries(peopleData).map(([slug, data]) => ({
    ...data,
    slug
  }));

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {people.map((person, index) => (
          <Person key={index} {...person} />
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Join Our Team</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          We are always looking for talented researchers who are passionate about human-AI interaction and cognitive science. If you&apos;re interested in joining our lab, please check our contact page for application details.
        </p>
      </section>
    </div>
  );
}