import { typeProjectCard } from '@/types';
import React from 'react';

type PopUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  project: typeProjectCard;
  type: 'liveCode' | 'repository' | null;
};

function PopUpAlertProjectLink({ isOpen, setIsOpen, project, type }: PopUpProps) {
  const message =
    type === 'liveCode'
      ? "The live site is no longer online, but the project is kept to show my participation in a full real-world project."
      : project.repositoryMessage || "The repository is not available.";

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh] border border-purple-300">
            
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-purple-600 mb-4">⚠️ Link Unavailable</h2>

            {/* Message and content */}
            <div className="text-gray-800 space-y-4 text-sm md:text-base">
              <p>{message}</p>

              <p>
                I’ve chosen to keep this project in my portfolio because it was a{' '}
                <strong>real-world project</strong> and an important part of my work at{' '}
                <strong>{project.company}</strong>. I contributed significantly to the frontend and supported backend development.
              </p>

              {project.repository_state && (
                <p>
                  You can still explore the{' '}
                  <a href={project.repository} target="_blank" className="text-purple-600 underline hover:text-purple-400">
                    GitHub repository
                  </a>
                  {type === 'liveCode' && ' to see the code.'}
                </p>
              )}

              {project.liveCode_state && type === 'repository' && (
                <p>
                  You can still visit the{' '}
                  <a href={project.liveCode} target="_blank" className="text-purple-600 underline hover:text-purple-400">
                    live site
                  </a>{' '}
                  if available.
                </p>
              )}

              {project.demo && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2 text-purple-700">Demo Video:</h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={project.demo}
                      title={`${project.title} demo`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              <p className="mt-2">
                Meanwhile, feel free to look through my other projects to see more of my work!
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 w-full py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUpAlertProjectLink;
