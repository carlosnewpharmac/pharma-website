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
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
            Innovative Consulting Solutions for{" "}
            <span className="text-pharma-blue">Regulatory Excellence</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At Pharma Compliance Expert, our mission is to empower pharmaceutical, biotechnology, and medical device companies to navigate the complex regulatory landscape with precision, integrity, and excellence. We are committed to fostering a culture of compliance that prioritizes patient safety, innovation, and ethical practices, ensuring that every organization we serve can achieve its full potential in delivering transformative healthcare solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>
    </section>
  );
}
