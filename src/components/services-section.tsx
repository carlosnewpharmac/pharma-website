import React from "react";
import { 
  ClipboardList, 
  Search, 
  ClipboardCheck, 
  FileText, 
  Settings, 
  Shield, 
  TrendingUp, 
  CheckCheck 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: "Pharmaceutical Compliance Management",
      description: "Comprehensive FDA compliance and regulatory consulting services for pharmaceutical companies with robust frameworks and GMP adherence.",
      features: [
        "FDA compliance frameworks",
        "GMP adherence guidance",
        "Pharmaceutical regulatory consulting"
      ]
    },
    {
      icon: Search,
      title: "GMP Consulting & Good Manufacturing Practices",
      description: "Expert GMP consulting services for pharmaceutical manufacturing with facility audits, staff training, and compliance monitoring systems.",
      features: [
        "Pharmaceutical manufacturing audits",
        "GMP consulting services",
        "Pharmaceutical compliance monitoring"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Audits and Inspections",
      description: "Thorough internal and external audits with pre-inspection preparedness and corrective action plans.",
      features: [
        "Pre-inspection preparedness",
        "Third-party supplier audits",
        "Corrective action plans"
      ]
    },
    {
      icon: FileText,
      title: "Pharmaceutical Regulatory Filings",
      description: "Expert pharmaceutical regulatory consulting for FDA submissions, drug approvals, and regulatory documentation management.",
      features: [
        "FDA drug approvals",
        "Pharmaceutical regulatory submissions",
        "Clinical trial regulatory support"
      ]
    },
    {
      icon: Settings,
      title: "Quality Management System",
      description: "Design and implement QMS frameworks with automated processes and gap analysis.",
      features: [
        "Policies and procedures",
        "Gap analysis and improvement",
        "Process automation"
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance & Control",
      description: "Comprehensive support in quality protocols, testing, and corrective actions for product excellence.",
      features: [
        "Quality assurance protocols",
        "Material and product testing",
        "Non-conformity corrections"
      ]
    },
    {
      icon: TrendingUp,
      title: "Product Optimization",
      description: "Enhance manufacturing efficiency, refine formulations, and leverage advanced technologies.",
      features: [
        "Manufacturing efficiency",
        "Formulation refinement",
        "Technology innovation"
      ]
    },
    {
      icon: CheckCheck,
      title: "Validations & Verifications",
      description: "Ensure equipment, processes, and systems perform as intended through comprehensive validation.",
      features: [
        "Process validation",
        "Equipment validation",
        "Method validation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Pharmaceutical Regulatory Consulting Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive FDA compliance, GMP consulting, and pharmaceutical regulatory services for biotechnology and medical device companies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-pharma-gray p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-pharma-blue mb-4">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-pharma-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
