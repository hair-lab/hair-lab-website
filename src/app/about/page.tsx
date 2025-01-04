import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8">About Human AI Lab</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          The Human AI Lab at Seoul National University is dedicated to advancing the intersection of human intelligence and artificial intelligence. Our research focuses on developing AI systems that complement and enhance human capabilities while ensuring they remain aligned with human values and needs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Focus</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Human-AI Interaction</h3>
            <p className="text-gray-700">
              Exploring novel ways for humans and AI systems to collaborate effectively and intuitively.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">AI Alignment</h3>
            <p className="text-gray-700">
              Ensuring AI systems understand and act in accordance with human values and intentions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Cognitive Architecture</h3>
            <p className="text-gray-700">
              Understanding and modeling human cognitive processes to inform AI system design.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          We envision a future where AI technology seamlessly integrates with human capabilities, enhancing our problem-solving abilities while preserving human agency and values. Through our research, we aim to build bridges between human cognition and artificial intelligence, creating systems that are both powerful and aligned with human interests.
        </p>
      </section>
    </div>
  );
}