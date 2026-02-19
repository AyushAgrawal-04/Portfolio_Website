import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MobileMenu from "../MobileMenu/MobileMenu";
import { FaBars } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-6 left-0 w-full z-40 flex justify-center
        transition-transform duration-300
        ${showHeader ? "translate-y-0" : "-translate-y-24"}`}
      >
        {/* Floating pill navbar */}
        <div className="relative">

          <Navbar />

          {/* Mobile Hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl"
          >
            <FaBars />
          </button>

        </div>
      </header>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Header;