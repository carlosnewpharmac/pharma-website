export default function Footer() {
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
  };

  return (
    <footer className="bg-pharma-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Pharma Compliance Experts</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Leading the way in pharmaceutical compliance and regulatory excellence. Our expertise ensures your success in the complex world of pharmaceutical regulations.
            </p>
            <p className="text-gray-300 text-sm">
              Setting standards, not just meeting them.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="hover:text-white transition-colors text-left"
                >
                  Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-us")}
                  className="hover:text-white transition-colors text-left"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Compliance Management</li>
              <li>GMP Consulting</li>
              <li>Regulatory Filings</li>
              <li>Quality Management</li>
              <li>Audits & Inspections</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Pharma Compliance Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
