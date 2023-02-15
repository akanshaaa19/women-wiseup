import { useState } from "react";

function NavBar() {
  const [showNav, setShowNav] = useState(false);
  function toggleNav() {
    setShowNav(!showNav);
  }
  return (
    <nav className="bg-white shadow-lg sticky py-2 top-0 z-30 md:w-screen">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-4xl">
            <a href="#">WomenWiseUp.com</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
              onClick={toggleNav}
            >
              {showNav ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>

        <div className="flex hidden md:flex-row  md:block mx-2 px-4 text-xl">
          <a className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
            Home
          </a>
          <a
            onClick={() => {
              window.scroll(0, 500);
            }}
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Trending
          </a>
          <a
            onClick={() => {
              window.scroll(0, 3000);
            }}
            className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >
            Contact
          </a>
        </div>

        {showNav && (
          <div className="flex flex-col md:hidden  px-4 -mx-2">
            <a className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">
              Home
            </a>
            <a
              onClick={() => {
                window.scroll(0, 3000);
              }}
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              Trending
            </a>
            <a
              onClick={() => {
                window.scroll(0, document.body.scrollHeight);
              }}
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
