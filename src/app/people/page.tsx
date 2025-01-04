import React from 'react';
import Image from 'next/image';

interface PersonProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const Person: React.FC<PersonProps> = ({ name, title, image, description }) => (
  <div className="flex flex-col items-center text-center p-6 space-y-4">
    <div className="relative w-48 h-48 rounded-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
    </div>
    <div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default function PeoplePage() {
  const people = [
    {
      name: "Keeheon Lee",
      title: "Principal Investigator",
      image: "/images/profile_8.jpg",
      description: "Leading research in human-AI interaction and cognitive architecture.",
    },
    {
      name: "Researcher 1",
      title: "PhD Student",
      image: "/images/profile_5.jpg",
      description: "Focusing on AI alignment and value learning systems.",
    },
    {
      name: "Researcher 2",
      title: "PhD Student",
      image: "/images/profile_4.jpg",
      description: "Investigating human-AI collaboration frameworks.",
    },
    {
      name: "Researcher 3",
      title: "Masters Student",
      image: "/images/profile_3.jpg",
      description: "Working on cognitive modeling and AI systems.",
    },
    {
      name: "Researcher 4",
      title: "Masters Student",
      image: "/images/profile_2.jpg",
      description: "Working on cognitive modeling and AI systems.",
    },
    {
      name: "Researcher 3",
      title: "Masters Student",
      image: "/images/profile_1.jpg",
      description: "Working on cognitive modeling and AI systems.",
    },
  ];

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
          We are always looking for talented researchers who are passionate about human-AI interaction and cognitive science. If you're interested in joining our lab, please check our contact page for application details.
        </p>
      </section>
    </div>
  );
}