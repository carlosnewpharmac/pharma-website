import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Shield, CheckCircle, TrendingUp } from "lucide-react";

export default function HeroSection() {
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

  const stats = [
    { icon: Shield, value: "500+", label: "Companies Served" },
    { icon: CheckCircle, value: "99%", label: "Compliance Rate" },
    { icon: TrendingUp, value: "15+", label: "Years Experience" }
  ];

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-pharma-gray via-white to-pharma-gray/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-pharma-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pharma-navy/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pharma-blue/10 text-pharma-blue text-sm font-medium mb-8">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by 500+ Pharmaceutical Companies
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-pharma-navy mb-8 leading-tight">
            Innovative Consulting Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-blue to-blue-600">
              Regulatory Excellence
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            At Pharma Compliance Expert, our mission is to empower pharmaceutical, biotechnology, and medical device companies to navigate the complex regulatory landscape with precision, integrity, and excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("services")}
              className="bg-pharma-blue text-white hover:bg-blue-700 transition-all duration-300 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Get Free Consultation
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-blue/10 rounded-2xl mb-4 group-hover:bg-pharma-blue/20 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-pharma-blue" />
                  </div>
                  <div className="text-3xl font-bold text-pharma-navy mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
