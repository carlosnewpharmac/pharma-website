import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    function highlightNavigation() {
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
    }

    window.addEventListener("scroll", highlightNavigation);
    return () => window.removeEventListener("scroll", highlightNavigation);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-pharma-navy">Pharma Compliance Experts</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "home" ? "text-pharma-blue" : "text-pharma-navy hover:text-pharma-blue"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("mission")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "mission" ? "text-pharma-blue" : "text-pharma-navy hover:text-pharma-blue"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "about" ? "text-pharma-blue" : "text-pharma-navy hover:text-pharma-blue"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "why-us" ? "text-pharma-blue" : "text-pharma-navy hover:text-pharma-blue"
                }`}
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === "services" ? "text-pharma-blue" : "text-pharma-navy hover:text-pharma-blue"
                }`}
              >
                Services
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors"
              >
                Contact
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-pharma-navy hover:text-pharma-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button
              onClick={() => scrollToSection("home")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("mission")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-pharma-navy hover:text-pharma-blue block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
