import { typeProjectCard } from "@/types";
import React from "react";

type PopUpProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  project: typeProjectCard;
  type: "liveCode" | "repository" | null;
};

function PopUpAlertProjectLink({
  isOpen,
  setIsOpen,
  project,
  type,
}: PopUpProps) {
  const defaultLiveCodeMessage =
    "The live version of this project is currently unavailable. It may be private, offline, or no longer publicly hosted. However, I keep this project in my portfolio because it represents real-world development experience and shows my ability to build production-oriented applications.";

  const defaultRepositoryMessage =
    "The source code for this project is currently unavailable. The repository may be private because it contains proprietary code, business logic, or client-related implementation details. However, the project is included in my portfolio to highlight my technical contributions and real-world software development experience.";

  const message =
    type === "liveCode"
      ? project.liveCodeMessage || defaultLiveCodeMessage
      : project.repositoryMessage || defaultRepositoryMessage;

  const title =
    type === "liveCode" ? "Live Site Unavailable" : "Repository Unavailable";

  const portfolioReason =
    type === "liveCode" ? (
<p>
  I’ve chosen to keep this project in my portfolio because it represents
  real-world experience and an important part of my work at{" "}
  <strong>{project.company}</strong>. Although the live version may be
  private, inactive, or no longer publicly accessible, the project is
  included to highlight my technical contributions, UI development,
  feature implementation, and ability to work on production-oriented
  applications. If you still want to check whether the live version is
  available, you can try opening the{" "}
  <a
    href={project.liveCode}
    target="_blank"
    rel="noopener noreferrer"
    className="text-purple-600 underline hover:text-purple-400"
  >
    live site
  </a>
  .
</p>
    ) : (
      <p>
        I’ve chosen to keep this project in my portfolio because it represents
        real-world experience and an important part of my work at{" "}
        <strong>{project.company}</strong>. Although the source code may be
        private or not publicly accessible, the project is included to highlight
        my technical contributions, software development experience, and ability
        to work with real application architecture, business logic, and
        production-oriented codebases.
      </p>
    );

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-2xl w-full relative overflow-y-auto max-h-[90vh] border border-purple-300">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              ⚠️ {title}
            </h2>

            <div className="text-gray-800 space-y-4 text-sm md:text-base">
              <p>{message}</p>

              {portfolioReason}

              {project.repository_state && (
                <p>
                  You can still explore the{" "}
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline hover:text-purple-400"
                  >
                    GitHub repository
                  </a>
                  {type === "liveCode" && " to see the code."}
                </p>
              )}

              {project.liveCode_state && type === "repository" && (
                <p>
                  You can still visit the{" "}
                  <a
                    href={project.liveCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline hover:text-purple-400"
                  >
                    live site
                  </a>{" "}
                  if available.
                </p>
              )}

              {project.demo && (
                <div className="mt-4">
                  <h3 className="font-semibold mb-2 text-purple-700">
                    Demo Video:
                  </h3>
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
                Meanwhile, feel free to look through my other projects to see
                more of my work.
              </p>
            </div>

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