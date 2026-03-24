import { useState } from "react";
import "./App.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaWifi,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-sans bg-white text-gray-900">
        {/* Navbar */}
        <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-4 shadow gap-4">
          {/* Logo */}
          <h1 className="text-lg md:text-xl font-semibold">
            Microsoft Research
          </h1>

          {/* Menu */}
          <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <li className="cursor-pointer hover:text-blue-600">Home</li>
            <li className="cursor-pointer hover:text-blue-600">Research</li>
            <li className="cursor-pointer hover:text-blue-600">Publications</li>
            <li className="cursor-pointer hover:text-blue-600">Contact</li>
          </ul>
        </nav>

        {/* Profile Section */}
        <section className="flex justify-center px-6 md:px-10 py-16 bg-red-500">
          <div className="w-full max-w-3xl bg-white flex flex-col sm:flex-row items-center gap-6 p-6 md:p-10 rounded">
            {/* Image */}
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
              src="https://www.microsoft.com/en-us/research/wp-content/uploads/2020/05/4c62c69f-3899-4a8a-aa7d-2fb21bba4a14.jpg"
              alt="Jack Williams"
            />

            {/* Text */}
            <div className="flex flex-col justify-center gap-3 text-center sm:text-left">
              <h1 className="text-2xl md:text-3xl font-bold">Jack Williams</h1>
              <p className="text-gray-600">Senior Researcher</p>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="px-6 md:px-10 py-12 bg-white max-w-6xl mx-auto">
          {/* Tabs */}
          <nav className="flex flex-wrap gap-4 md:gap-8 border-b border-gray-300 mb-8">
            <Link
              to="/about"
              className="pb-2 border-b-2 border-blue-600 font-semibold text-blue-600"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="pb-2 text-gray-700 hover:text-blue-600"
            >
              Projects
            </Link>
            <Link
              to="/publications"
              className="pb-2 text-gray-700 hover:text-blue-600"
            >
              Publications
            </Link>
            <Link
              to="/videos"
              className="pb-2 text-gray-700 hover:text-blue-600"
            >
              Videos
            </Link>
            <Link to="/news" className="pb-2 text-gray-700 hover:text-blue-600">
              News
            </Link>
          </nav>

          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold mb-6">About</h1>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-800 max-w-4xl">
            <p>
              I am a Senior Researcher at Microsoft Research working on{" "}
              <span className="text-blue-600 underline">Calc Intelligence</span>
              .
            </p>
            <p>
              I helped design and build{" "}
              <span className="text-blue-600 underline">Calc.ts</span>.
            </p>
            <p>
              I collaborate with{" "}
              <span className="text-blue-600 underline">Fluid Framework</span>.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Research Areas */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Research areas</h2>
              <ul className="space-y-3 text-blue-600">
                <li className="flex items-start gap-2 hover:underline cursor-pointer">
                  <span>•</span>
                  Artificial intelligence
                </li>

                <li className="flex items-start gap-2 hover:underline cursor-pointer">
                  <span>•</span>
                  Human-computer interaction
                </li>

                <li className="flex items-start gap-2 hover:underline cursor-pointer">
                  <span>•</span>
                  Programming languages and software engineering
                </li>
              </ul>
            </div>

            {/* Research Groups */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Research groups</h2>
              <ul className="text-blue-600">
                <li className="hover:underline cursor-pointer">
                  People-Centric AI
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className=" ">
          {/* Top Footer */}
          <div className="bg-gray-100 py-6 px-6 md:px-10 flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Section */}
            <div className="flex-1">
              <h2 className="font-semibold mb-2">Contact Jack Williams</h2>

              <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                  <circle cx="12" cy="12" r="10" />
                </svg>

                <a href="#" className="text-blue-600">
                  Website
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <h2 className="font-semibold mb-2">
                Microsoft Research Lab – Cambridge
              </h2>

              <p className="text-sm">
                Microsoft Research Ltd,
                <br />
                Cambridge CB1 2FB
                <br />
                United Kingdom
              </p>

              <a className="flex items-center gap-2 mt-3 text-blue-600 hover:underline">
                +44 1223 479700
              </a>

              <a className="inline-flex items-center mt-4 text-blue-600 hover:underline font-semibold">
                Learn more →
              </a>
            </div>
          </div>

          {/* Social Section */}
          <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6 py-4 px-6 text-center md:text-left">
            {/* Follow Us */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <h1 className="whitespace-nowrap font-semibold">Follow us:</h1>

              <FaInstagram className="text-xl cursor-pointer hover:text-blue-600" />
              <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
              <FaTwitter className="text-xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-xl cursor-pointer hover:text-blue-600" />
              <FaWifi className="text-xl cursor-pointer hover:text-blue-600" />
            </div>

            {/* Share Section */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <h1 className="whitespace-nowrap font-semibold">
                Share this page:
              </h1>

              <FaInstagram className="text-xl cursor-pointer hover:text-blue-600" />
              <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600" />
              <FaReddit className="text-xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8 px-6 md:px-10 pb-10 text-sm">
            {/* Column 1 */}
            <div>
              <h1 className="text-black font-semibold">what`s news</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>surface pro</li>
                <li>surface laptop</li>
                <li>surface laptop studio2</li>
                <li>copilote for organization</li>
                <li>copilote for personal use</li>
                <li>ai in windows</li>
                <li>explore microsoft products</li>
                <li>windows 11 apps</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h1 className="text-black font-semibold">Microsoft</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>account profile</li>
                <li>download center</li>
                <li>microsoft store support</li>
                <li>returns</li>
                <li>order tracking</li>
                <li>certified refurbished</li>
                <li>microsoft store promise</li>
                <li>flexible payments</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h1 className="text-black font-semibold">education</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>microsoft in education</li>
                <li>devices for education</li>
                <li>microsoft teams for education</li>
                <li>microsoft 365 education</li>
                <li>how to buy for your school</li>
                <li>educator training and development</li>
                <li>deals for students and parents</li>
                <li>all for education</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h1 className="text-black font-semibold">business</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>microsoft ai</li>
                <li>microsoft security</li>
                <li>dynamic 365</li>
                <li>microsoft 365</li>
                <li>microsoft power platform</li>
                <li>microsoft teams</li>
                <li>microsoft 365 copilote</li>
                <li>small business</li>
              </ul>
            </div>

            {/* Column 5 */}
            <div>
              <h1 className="text-black font-semibold">Developer & IT</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>azure</li>
                <li>microsoft developer</li>
                <li>microsoft learn</li>
                <li>support for ai marketplace apps</li>
                <li>microsoft tech community</li>
                <li>microsoft marketplace</li>
                <li>marketplace reward</li>
                <li>visual studio</li>
              </ul>
            </div>

            {/* Column 6 */}
            <div>
              <h1 className="text-black font-semibold">company</h1>
              <ul className="text-gray-500 flex flex-col gap-2 mt-2">
                <li>careers</li>
                <li>about microsoft</li>
                <li>company news</li>
                <li>privacy at microsoft</li>
                <li>investors</li>
                <li>diversity and inclusion</li>
                <li>accessibility</li>
                <li>sustainability</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
