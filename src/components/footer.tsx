import React from "react";
import { Shield, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
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
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const quickLinks = [
    { id: "mission", label: "Mission" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "why-us", label: "Why Choose Us" },
    { id: "contact", label: "Contact" }
  ];

  const services = [
    "Compliance Management",
    "GMP Consulting",
    "Regulatory Filings",
    "Quality Management",
    "Audits & Inspections",
    "Product Optimization",
    "Validations & Verifications"
  ];

  const contactInfo = [
    { icon: Mail, value: "john.dickson@jsd.solutions" },
    { icon: Phone, value: "+1 (954) 554-6945" },
    { icon: MapPin, value: "Serving clients nationwide" }
  ];

  return (
    <footer className="bg-gradient-to-br from-pharma-navy to-pharma-navy/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-pharma-blue rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pharma Compliance</h3>
                <p className="text-pharma-blue font-medium">Experts</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Leading the way in pharmaceutical compliance and regulatory excellence. Our expertise ensures your success in the complex world of pharmaceutical regulations.
            </p>
            <p className="text-gray-300 text-sm italic">
              "Setting standards, not just meeting them."
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pharma-blue/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-pharma-blue" />
                  </div>
                  <span className="text-gray-300">{info.value}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; 2024 Pharma Compliance Experts. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 bg-pharma-blue/20 hover:bg-pharma-blue/30 text-pharma-blue px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
