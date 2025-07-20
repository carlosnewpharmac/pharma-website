import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SEOHead from "../components/seo-head";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  TrendingUp,
  Award,
  Clock,
  Globe,
  Target
} from "lucide-react";

export default function FDACompliance() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FDA Compliance Consulting Services | Pharmaceutical Regulatory Compliance",
    "description": "Expert FDA compliance consulting services for pharmaceutical companies. Comprehensive FDA regulatory compliance, drug approvals, and pharmaceutical regulatory consulting to ensure your products meet FDA standards.",
    "url": "https://www.pharmacomplianceexperts.com/fda-compliance",
    "mainEntity": {
      "@type": "Service",
      "name": "FDA Compliance Consulting",
      "description": "Comprehensive FDA compliance services for pharmaceutical companies including regulatory submissions, drug approvals, and compliance monitoring.",
      "provider": {
        "@type": "Organization",
        "name": "Pharma Compliance Experts"
      },
      "serviceType": "FDA Compliance Consulting",
      "areaServed": "United States"
    }
  };

  const complianceAreas = [
    {
      title: "Drug Development & Approval",
      description: "Navigate the complex FDA drug approval process with expert guidance and strategic planning.",
      services: [
        "IND (Investigational New Drug) applications",
        "NDA (New Drug Application) preparation",
        "ANDA (Abbreviated New Drug Application) support",
        "Clinical trial regulatory compliance",
        "Drug approval pathway strategy"
      ]
    },
    {
      title: "Manufacturing Compliance",
      description: "Ensure your pharmaceutical manufacturing facilities meet FDA cGMP requirements and standards.",
      services: [
        "cGMP compliance audits and assessments",
        "Manufacturing facility validation",
        "Process validation and documentation",
        "Quality control system implementation",
        "FDA inspection preparation"
      ]
    },
    {
      title: "Quality System Management",
      description: "Implement and maintain robust quality management systems that meet FDA requirements.",
      services: [
        "Quality Management System (QMS) design",
        "Standard Operating Procedures (SOPs) development",
        "Documentation control systems",
        "Change control procedures",
        "Corrective and Preventive Actions (CAPA)"
      ]
    },
    {
      title: "Regulatory Submissions",
      description: "Expert preparation and submission of regulatory documents to the FDA.",
      services: [
        "Regulatory submission strategy",
        "Document preparation and review",
        "Electronic submission support",
        "FDA communication management",
        "Post-submission support"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address compliance risks before they become costly FDA violations."
    },
    {
      icon: TrendingUp,
      title: "Faster Approvals",
      description: "Streamlined processes and expert guidance to accelerate FDA approval timelines."
    },
    {
      icon: Award,
      title: "Regulatory Excellence",
      description: "Maintain the highest standards of FDA compliance and regulatory excellence."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Save valuable time with expert FDA compliance consulting and support."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of your current FDA compliance status and identification of gaps."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Customized FDA compliance strategy tailored to your specific products and operations."
    },
    {
      step: "03",
      title: "Implementation Support",
      description: "Expert guidance and support throughout the FDA compliance implementation process."
    },
    {
      step: "04",
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and support to maintain FDA compliance excellence."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="FDA Compliance Consulting Services | Pharmaceutical Regulatory Compliance Experts"
        description="Expert FDA compliance consulting services for pharmaceutical companies. Comprehensive FDA regulatory compliance, drug approvals, and pharmaceutical regulatory consulting to ensure your products meet FDA standards."
        keywords="FDA compliance, pharmaceutical FDA compliance, FDA consulting, drug approval, FDA regulatory, pharmaceutical regulatory, FDA submissions, cGMP compliance, FDA inspection, pharmaceutical compliance"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-pharma-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
              FDA Compliance Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Expert FDA compliance consulting services for pharmaceutical companies. Our regulatory experts help you navigate complex FDA requirements, ensure compliance, and accelerate your path to market approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg">
                Get FDA Compliance Assessment
              </button>
              <button className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-colors px-8 py-3 text-base rounded-lg">
                Download FDA Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why FDA Compliance Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-pharma-navy mb-6">Why FDA Compliance is Critical</h2>
              <p className="text-lg text-gray-600 mb-6">
                FDA compliance is not just a regulatory requirement—it's essential for the success and safety of your pharmaceutical products. Non-compliance can result in costly delays, product recalls, and even legal consequences.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-pharma-navy">Product Safety & Efficacy</h3>
                    <p className="text-gray-600">Ensure your products meet FDA safety and efficacy standards</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-pharma-navy">Market Access</h3>
                    <p className="text-gray-600">Navigate FDA approval processes to bring products to market</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-pharma-navy">Risk Management</h3>
                    <p className="text-gray-600">Identify and mitigate compliance risks before they become violations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-pharma-gray p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-pharma-navy mb-4">FDA Compliance Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">FDA Warning Letters (2023)</span>
                  <span className="font-bold text-pharma-blue">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Approval Time</span>
                  <span className="font-bold text-pharma-blue">12-18 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Compliance Success Rate</span>
                  <span className="font-bold text-green-600">94%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 bg-pharma-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Comprehensive FDA Compliance Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our FDA compliance consulting services cover all aspects of pharmaceutical regulatory requirements, from drug development to post-market surveillance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-pharma-navy mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-pharma-navy">Services Include:</h4>
                  <ul className="space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Benefits of Expert FDA Compliance Consulting</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Partner with our FDA compliance experts to achieve regulatory excellence and accelerate your path to market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-pharma-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-navy mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-pharma-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our FDA Compliance Process</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A systematic approach to achieving and maintaining FDA compliance excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-pharma-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-pharma-navy mb-6">Ready to Achieve FDA Compliance Excellence?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let our FDA compliance experts help you navigate the complex regulatory landscape and ensure your products meet all FDA requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg">
              Schedule Free FDA Assessment
            </button>
            <button className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-colors px-8 py-3 text-base rounded-lg">
              Download FDA Compliance Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 