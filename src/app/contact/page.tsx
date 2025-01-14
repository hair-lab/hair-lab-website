import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-12">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPinIcon className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  Engineering Building, Room 301<br />
                  Yonsei University<br />
                  85 Songdogwahak-ro, Yeonsu-gu<br />
                  Incheon, South Korea
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">keeheon@yonsei.ac.kr</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="w-6 h-6 text-gray-600 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+82-32-749-3610</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Join Our Lab</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Prospective Students</h3>
              <p className="text-gray-700">
                We welcome applications from prospective PhD and Masters students interested in human-AI interaction, cognitive science, and AI alignment. Please send your CV and research statement to the email address provided.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Research Opportunities</h3>
              <p className="text-gray-700">
                We occasionally have openings for research assistants and postdoctoral researchers. Check back regularly for updates or contact us directly about opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Collaborations</h3>
              <p className="text-gray-700">
                We are open to research collaborations with other labs and industry partners. Please reach out to discuss potential collaboration opportunities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}