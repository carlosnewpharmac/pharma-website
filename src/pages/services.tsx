import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SEOHead from "../components/seo-head";
import { 
  ClipboardList, 
  Search, 
  ClipboardCheck, 
  FileText, 
  Settings, 
  Shield, 
  TrendingUp, 
  CheckCheck,
  Award,
  Users,
  Globe,
  Clock
} from "lucide-react";

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pharmaceutical Regulatory Consulting Services | FDA Compliance & GMP Consulting",
    "description": "Comprehensive pharmaceutical regulatory consulting services including FDA compliance, GMP consulting, quality management systems, and regulatory filings for pharmaceutical and biotechnology companies.",
    "url": "https://www.pharmacomplianceexperts.com/services",
    "mainEntity": {
      "@type": "Service",
      "name": "Pharmaceutical Regulatory Consulting",
      "description": "Expert pharmaceutical regulatory consulting services for FDA compliance, GMP, quality management, and regulatory filings.",
      "provider": {
        "@type": "Organization",
        "name": "Pharma Compliance Experts"
      },
      "serviceType": "Pharmaceutical Consulting",
      "areaServed": "Worldwide"
    }
  };

  const services = [
    {
      icon: ClipboardList,
      title: "Pharmaceutical Compliance Management",
      description: "Comprehensive FDA compliance and regulatory consulting services for pharmaceutical companies with robust frameworks and GMP adherence.",
      benefits: [
        "FDA compliance frameworks tailored to your operations",
        "GMP adherence guidance for pharmaceutical manufacturing",
        "Pharmaceutical regulatory consulting expertise",
        "Risk assessment and mitigation strategies",
        "Compliance monitoring and reporting systems"
      ],
      keywords: ["FDA compliance", "pharmaceutical compliance", "regulatory consulting", "GMP adherence"]
    },
    {
      icon: Search,
      title: "GMP Consulting & Good Manufacturing Practices",
      description: "Expert GMP consulting services for pharmaceutical manufacturing with facility audits, staff training, and compliance monitoring systems.",
      benefits: [
        "Pharmaceutical manufacturing audits and assessments",
        "GMP consulting services for facility optimization",
        "Pharmaceutical compliance monitoring systems",
        "Staff training and certification programs",
        "Process validation and documentation"
      ],
      keywords: ["GMP consulting", "pharmaceutical manufacturing", "facility audits", "good manufacturing practices"]
    },
    {
      icon: FileText,
      title: "Pharmaceutical Regulatory Filings",
      description: "Expert pharmaceutical regulatory consulting for FDA submissions, drug approvals, and regulatory documentation management.",
      benefits: [
        "FDA drug approvals and regulatory submissions",
        "Pharmaceutical regulatory consulting expertise",
        "Clinical trial regulatory support",
        "Documentation management and compliance",
        "Regulatory strategy development"
      ],
      keywords: ["regulatory filings", "FDA submissions", "drug approvals", "pharmaceutical regulatory"]
    },
    {
      icon: Settings,
      title: "Quality Management Systems",
      description: "Design and implement comprehensive QMS frameworks with automated processes, gap analysis, and continuous improvement strategies.",
      benefits: [
        "QMS design and implementation",
        "Process automation and optimization",
        "Gap analysis and improvement strategies",
        "Quality assurance protocols",
        "Continuous improvement programs"
      ],
      keywords: ["quality management", "QMS", "process automation", "quality assurance"]
    },
    {
      icon: Shield,
      title: "Quality Assurance & Control",
      description: "Comprehensive support in quality protocols, testing, and corrective actions for pharmaceutical product excellence.",
      benefits: [
        "Quality assurance protocols development",
        "Material and product testing procedures",
        "Non-conformity correction systems",
        "Quality control monitoring",
        "Documentation and record keeping"
      ],
      keywords: ["quality assurance", "quality control", "pharmaceutical testing", "product excellence"]
    },
    {
      icon: TrendingUp,
      title: "Product Optimization",
      description: "Enhance pharmaceutical manufacturing efficiency, refine formulations, and leverage advanced technologies for competitive advantage.",
      benefits: [
        "Manufacturing efficiency optimization",
        "Formulation refinement and development",
        "Technology innovation integration",
        "Cost reduction strategies",
        "Performance improvement programs"
      ],
      keywords: ["product optimization", "manufacturing efficiency", "formulation development", "technology innovation"]
    },
    {
      icon: CheckCheck,
      title: "Validations & Verifications",
      description: "Ensure equipment, processes, and systems perform as intended through comprehensive validation protocols.",
      benefits: [
        "Process validation protocols",
        "Equipment validation procedures",
        "Method validation and verification",
        "System qualification programs",
        "Compliance documentation"
      ],
      keywords: ["validation", "verification", "process validation", "equipment validation"]
    },
    {
      icon: ClipboardCheck,
      title: "Audits & Inspections",
      description: "Thorough internal and external audits with pre-inspection preparedness and corrective action plans.",
      benefits: [
        "Pre-inspection preparedness programs",
        "Third-party supplier audits",
        "Corrective action plan development",
        "Compliance gap identification",
        "Audit documentation and reporting"
      ],
      keywords: ["audits", "inspections", "compliance audits", "corrective actions"]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Over 15 years of experience in pharmaceutical regulatory compliance with proven track record of successful FDA approvals."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with deep knowledge of FDA regulations, GMP standards, and pharmaceutical industry best practices."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving pharmaceutical companies worldwide with expertise in international regulatory requirements and compliance standards."
    },
    {
      icon: Clock,
      title: "Timely Results",
      description: "Efficient processes designed to get your products to market faster while maintaining the highest compliance standards."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Pharmaceutical Regulatory Consulting Services | FDA Compliance & GMP Consulting"
        description="Comprehensive pharmaceutical regulatory consulting services including FDA compliance, GMP consulting, quality management systems, and regulatory filings for pharmaceutical and biotechnology companies."
        keywords="pharmaceutical consulting, FDA compliance, GMP consulting, regulatory compliance, pharmaceutical audits, quality management, regulatory filings, pharmaceutical industry, biotechnology consulting, medical device compliance, pharmaceutical regulatory services"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-pharma-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
              Pharmaceutical Regulatory Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert pharmaceutical regulatory consulting services for FDA compliance, GMP consulting, quality management systems, and regulatory filings. We help pharmaceutical, biotechnology, and medical device companies navigate complex regulatory landscapes and achieve compliance excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg">
                Get Free Consultation
              </button>
              <button className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-colors px-8 py-3 text-base rounded-lg">
                Download Service Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Why Choose Pharma Compliance Experts?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through industry expertise, proven methodologies, and unwavering commitment to your success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-pharma-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-pharma-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end pharmaceutical regulatory consulting solutions designed to ensure compliance, optimize operations, and accelerate your path to market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-pharma-blue mb-6">
                    <IconComponent className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-pharma-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-pharma-navy">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-pharma-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Achieve Regulatory Excellence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our expert pharmaceutical regulatory consultants help you navigate the complex regulatory landscape and ensure your products reach the market successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pharma-navy transition-colors px-8 py-3 text-base rounded-lg">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 