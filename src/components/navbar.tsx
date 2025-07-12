import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#']");

    function highlightNavigation() {
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      highlightNavigation();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="p-2 bg-pharma-blue rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-pharma-navy">Pharma Compliance</h1>
                <p className="text-xs text-pharma-blue font-medium">Experts</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {[
                { id: "home", label: "Home" },
                { id: "mission", label: "Mission" },
                { id: "about", label: "About" },
                { id: "why-us", label: "Why Us" },
                { id: "services", label: "Services" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? "text-pharma-blue bg-pharma-blue/10" 
                      : "text-pharma-navy hover:text-pharma-blue hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="ml-4 bg-pharma-blue text-white hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-pharma-navy hover:text-pharma-blue hover:bg-gray-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100">
            {[
              { id: "home", label: "Home" },
              { id: "mission", label: "Mission" },
              { id: "about", label: "About" },
              { id: "why-us", label: "Why Us" },
              { id: "services", label: "Services" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id 
                    ? "text-pharma-blue bg-pharma-blue/10" 
                    : "text-pharma-navy hover:text-pharma-blue hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
