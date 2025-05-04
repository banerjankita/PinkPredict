import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const location = useLocation();
  const navigate = useNavigate();

  let aboutTimeoutId = null;
  let contactTimeoutId = null;

  const showAboutDropdown = () => {
    if (aboutTimeoutId) clearTimeout(aboutTimeoutId);
    setIsAboutDropdownOpen(true);
  };

  const hideAboutDropdown = () => {
    aboutTimeoutId = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 200);
  };

  const showContactDropdown = () => {
    if (contactTimeoutId) clearTimeout(contactTimeoutId);
    setIsContactDropdownOpen(true);
  };

  const hideContactDropdown = () => {
    contactTimeoutId = setTimeout(() => {
      setIsContactDropdownOpen(false);
    }, 200);
  };

  const handleNavClick = (sectionId, page = "/") => {
    if (location.pathname !== page) {
      navigate(page);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="absolute top-6 right-4 left-4 bg-gray-900 bg-opacity-80 text-white py-2 px-4 rounded-lg shadow-md z-10">
      <ul className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm sm:text-base items-center">
        <li>
          <Link
            to="/"
            className={`transition duration-200 ${location.pathname === "/" ? "text-pink-400" : "text-white hover:text-pink-400"}`}
          >
            Home
          </Link>
        </li>

        {/* About Dropdown */}
        <li className="relative" onMouseEnter={showAboutDropdown} onMouseLeave={hideAboutDropdown}>
          <span className="text-white hover:text-pink-400 cursor-pointer">About</span>
          {isAboutDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left">
              <li>
                <span onClick={() => handleNavClick("mission")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
                  Our Mission
                </span>
              </li>
              <li>
                <span onClick={() => handleNavClick("team")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
                  Our Team
                </span>
              </li>
              <li>
                <span onClick={() => handleNavClick("how-it-works")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
                  How It Works
                </span>
              </li>
              <li>
                <span onClick={() => handleNavClick("faqs")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
                  FAQs
                </span>
              </li>
              <li>
                <span onClick={() => handleNavClick("terms")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
                  Terms of Use
                </span>
              </li>
            </ul>
          )}
        </li>

        <li>
          <span
            className={`cursor-pointer transition duration-200 ${location.pathname === "/predict" ? "text-pink-400" : "text-white hover:text-pink-400"}`}
            onClick={() => {
              if (!isAuthenticated) {
                loginWithRedirect();
              } else {
                window.location.href = "/predict";
              }
            }}
          >
            Predict
          </span>
        </li>
{/* Contact Dropdown */}
<li className="relative group" onMouseEnter={showContactDropdown} onMouseLeave={hideContactDropdown}>
  <span className="text-white hover:text-pink-400 cursor-pointer">Contact</span>

  {isContactDropdownOpen && (
    <ul className="absolute right-0 mt-2 w-48 max-w-[12rem] bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left z-50">
      <li>
        <span onClick={() => handleNavClick("visit-hospital", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          When to visit hospital
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("common-symptoms", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          Common Symptoms
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("quiz-section", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          Take Quiz
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("feedback-section", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          Feedback
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("hospitals-section", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          Nearby Hospitals
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("helplines-section", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          Helpline Numbers
        </span>
      </li>
      <li>
        <span onClick={() => handleNavClick("faqs-section", "/contact")} className="block px-4 py-2 text-white hover:bg-pink-400 cursor-pointer">
          FAQs
        </span>
      </li>
    </ul>
  )}
</li>
<li>
  <Link
    to="/drai"
    className={`transition duration-200 ${location.pathname === "/drai" ? "text-pink-400" : "text-white hover:text-pink-400"}`}
  >
    Chatbot
  </Link>
</li>

        <li>
          {isAuthenticated ? (
            <Link
              to="/logout"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
              className={`transition duration-200 ${location.pathname === "/logout" ? "text-pink-400" : "text-white hover:text-pink-400"}`}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={() => loginWithRedirect()}
              className={`transition duration-200 ${location.pathname === "/login" ? "text-pink-400" : "text-white hover:text-pink-400"}`}
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}







