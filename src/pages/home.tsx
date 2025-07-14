import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import MissionSection from "../components/mission-section";
import AboutSection from "../components/about-section";
import WhyUsSection from "../components/why-us-section";
import ServicesSection from "../components/services-section";
import ContactSection from "../components/contact-section";
import Footer from "../components/footer";
import SEOHead from "../components/seo-head";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pharma Compliance Experts - Pharmaceutical Regulatory Consulting",
    "description": "Leading pharmaceutical consulting services for FDA compliance, GMP, quality management, and regulatory filings. Expert regulatory consulting for pharmaceutical, biotechnology, and medical device companies.",
    "url": "https://www.pharmacomplianceexperts.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pharma Compliance Experts",
      "description": "Pharmaceutical regulatory consulting services",
      "url": "https://www.pharmacomplianceexperts.com",
      "serviceType": "Pharmaceutical Consulting",
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharmaceutical Regulatory Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "FDA Compliance Consulting",
              "description": "Expert FDA compliance services for pharmaceutical companies"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GMP Consulting",
              "description": "Good Manufacturing Practices consulting for pharmaceutical manufacturing"
            }
          }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Pharma Compliance Experts - Leading Pharmaceutical Regulatory Consulting Services"
        description="Expert pharmaceutical consulting services specializing in FDA compliance, GMP, quality management, regulatory filings, and pharmaceutical audits. Global regulatory excellence for pharmaceutical, biotechnology, and medical device companies."
        keywords="pharmaceutical consulting, FDA compliance, GMP consulting, regulatory compliance, pharmaceutical audits, quality management, regulatory filings, pharmaceutical industry, biotechnology consulting, medical device compliance, pharmaceutical regulatory services"
        structuredData={structuredData}
      />
      <Navbar />
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
