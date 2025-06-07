import { typeProjectCard } from '@/types';
import React from 'react';

type PopUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  project: typeProjectCard
};

function PopUpAlertProjectLink({ isOpen, setIsOpen, project }: PopUpProps) {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-yellow-600 mb-3">⚠️ Website Currently Unavailable</h2>

            {/* Apology message */}
            <div className="text-gray-700 space-y-3 text-sm">
              <p>
                Unfortunately, the{' '}
                <span
                  className="text-black-600"
                >
                 <strong>{project.title}</strong> 
                </span>{' '}
                website is currently offline because the company has closed operations.
              </p>
              <p>
                I’ve chosen to keep this project in my portfolio because it was a{' '}
                <strong>real-world product</strong> and an important part of my work at <strong>{project.company}</strong>. I contributed significantly to the frontend and supported backend development.
              </p>
              <p>
                You can still explore the{' '}
                <a
                  href={project.repository}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  GitHub repository
                </a>{' '}
                and check out the{' '}
                <a
                  href="https://www.npmjs.com/package/helebba-sdk"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  npm SDK
                </a>{' '}
                we built.
              </p>
              <p>
                Meanwhile, feel free to look through my other projects to see more of my work!
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-5 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
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