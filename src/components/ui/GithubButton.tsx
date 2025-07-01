"use client";

import React from "react";

interface GithubButtonProps {
  url?: string;
  label?: string;
}

export const GithubButton: React.FC<GithubButtonProps> = ({
  url = "https://github.com/tu_usuario",
  label = "GitHub",
}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button
        className="group relative flex items-center justify-center gap-2 px-4 py-2 text-white text-[18px] font-bold rounded-[15px] border border-neutral-600
        bg-[#212121] shadow-[inset_-3px_-4px_8px_rgba(255,255,255,0.1),inset_4px_4px_10px_rgba(0,0,0,0.6),0_2px_4px_rgba(0,0,0,0.5)]
        transition-transform duration-200 active:scale-95 hover:bg-black overflow-hidden"
      >
        <div
          className="flex items-center justify-center transform transition-transform duration-500 ease-in-out
          group-hover:translate-x-8 group-hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors duration-300"
          >
            <path
              fillRule="evenodd"
              d="M12 0C5.37 0 0 5.373 0 12c0 5.303
              3.438 9.8 8.205 11.385.6.113.82-.26.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61
              -.546-1.385-1.333-1.753-1.333-1.753
              -1.09-.745.082-.73.082-.73
              1.205.085 1.838 1.236 1.838 1.236
              1.07 1.834 2.807 1.304 3.492.997
              .108-.775.418-1.305.76-1.605
              -2.665-.304-5.467-1.332-5.467-5.932
              0-1.31.468-2.382 1.235-3.222
              -.123-.303-.535-1.524.117-3.176
              0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1
              3.003-.404c1.02.005 2.047.138 3.003.404
              2.29-1.552 3.297-1.23 3.297-1.23
              .653 1.653.241 2.874.12 3.176
              .77.84 1.233 1.912 1.233 3.222
              0 4.61-2.807 5.625-5.48 5.922
              .43.37.823 1.1.823 2.218
              0 1.602-.015 2.894-.015 3.29
              0 .32.216.694.825.576C20.565 21.796
              24 17.3 24 12c0-6.627-5.373-12-12-12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <span className="transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          {label}
        </span>
      </button>
    </a>
  );
};
