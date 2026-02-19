import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const sections = ["home", "projects", "qualifications", "skills", "contact"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:flex justify-center">
      <ul className="flex items-center gap-8 px-8 py-3 bg-black/60 backdrop-blur-md rounded-full shadow-lg">
        {sections.map((section) => {
          const isActive = activeSection === section;

          return (
            <li key={section}>
              <Link
                to={section}
                smooth
                duration={500}
                offset={-80}
                spy
                className={`cursor-pointer text-sm lg:text-base font-medium tracking-wide pb-1 border-b-2 transition-all duration-300
                  ${
                    isActive
                      ? "text-red-500 border-red-500"
                      : "text-white border-transparent hover:text-red-400 hover:border-red-400"
                  }`}
              >
                {section.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}