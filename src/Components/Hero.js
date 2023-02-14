import React from "react";
import { useRef } from "react";
import { Roadmap } from "./Roadmap";
import { Link, useNavigate } from "react-router-dom";
import { Style } from "./Style";

export const Hero = () => {
  const inputRef = useRef();
  const navigate = useNavigate();
  function submitHandeler(e) {
    e.preventDefault();
    const input = inputRef.current.value;
    navigate(`/roadmap/${input}`);
  }
  return (
    <>
      {/* Hello world */}

      <div className="w-full ">
        
        <div className="flex bg-white" style={{ height: 600 }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                <Style />
              </h2>
              <div style={{ maxWidth: 700, margin: "100px auto" }}>
                <form className="flex items-center" onSubmit={submitHandeler}>
                  <label htmlFor="voice-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for Roadmap"
                      ref={inputRef}
                      required=""
                    />
                    <button
                      type="submit"
                      className="flex absolute inset-y-0 right-0 items-center pr-3"
                    ></button>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-black bg-blue-800 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      aria-hidden="true"
                      className="mr-2 -ml-1 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    Search
                  </button>
                </form>
              </div>

              <div className="flex justify-start lg:justify-start mt-4">
                <a
                  className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            className=" lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/young-beautiful-smiling-female-trendy-summer-red-dress-sexy-carefree-woman-posing-near-blue-wall-studio-positive-model-having-fun-cheerful-happy-isolated_158538-25762.jpg?w=900&t=st=1676195787~exp=1676196387~hmac=aafc5845b0f7603bf62b1289c503edfe7e24a199724973aab945c918e58410aa)",
              }}
            >
              <div className="h-full bg-black opacity-25" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
