import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section id="home" className="pt-16 bg-gradient-to-br from-pharma-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
              Innovative Consulting Solutions for{" "}
              <span className="text-pharma-blue">Regulatory Excellence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Pharma Compliance Experts operate at the nexus of regulatory proficiency and pharmaceutical innovation, offering unmatched consulting services tailored to meet the dynamic needs of the pharmaceutical industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base"
              >
                Our Services
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-colors px-8 py-3 text-base"
              >
                Get Consultation
              </Button>
            </div>
          </div>
          <div className="lg:text-right">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern pharmaceutical laboratory with scientists working"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
