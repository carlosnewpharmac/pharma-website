import React from "react";
import { 
  ClipboardList, 
  Search, 
  ClipboardCheck, 
  FileText, 
  Settings, 
  Shield, 
  TrendingUp, 
  CheckCheck,
  ArrowRight
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: "Compliance Management",
      description: "Streamline regulatory compliance across global markets with robust frameworks and GMP adherence.",
      features: [
        "Robust compliance frameworks",
        "GMP adherence guidance",
        "Data integrity compliance"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Search,
      title: "Good Manufacturing Practices",
      description: "Achieve GMP excellence through facility audits, staff training, and compliance monitoring systems.",
      features: [
        "Manufacturing facility audits",
        "GMP principles training",
        "Compliance monitoring systems"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: ClipboardCheck,
      title: "Audits and Inspections",
      description: "Thorough internal and external audits with pre-inspection preparedness and corrective action plans.",
      features: [
        "Pre-inspection preparedness",
        "Third-party supplier audits",
        "Corrective action plans"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Regulatory Filings",
      description: "Expert assistance in compiling, submitting, and managing regulatory documentation for approvals.",
      features: [
        "Drug approvals and renewals",
        "Clinical trial applications",
        "Post-marketing surveillance"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Settings,
      title: "Quality Management System",
      description: "Design and implement QMS frameworks with automated processes and gap analysis.",
      features: [
        "Policies and procedures",
        "Gap analysis and improvement",
        "Process automation"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance & Control",
      description: "Comprehensive support in quality protocols, testing, and corrective actions for product excellence.",
      features: [
        "Quality assurance protocols",
        "Material and product testing",
        "Non-conformity corrections"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Product Optimization",
      description: "Enhance manufacturing efficiency, refine formulations, and leverage advanced technologies.",
      features: [
        "Manufacturing efficiency",
        "Formulation refinement",
        "Technology innovation"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: CheckCheck,
      title: "Validations & Verifications",
      description: "Ensure equipment, processes, and systems perform as intended through comprehensive validation.",
      features: [
        "Process validation",
        "Equipment validation",
        "Method validation"
      ],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-pharma-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pharma-blue/10 text-pharma-blue text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-blue to-blue-600">
              Pharmaceutical Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Providing end-to-end solutions for pharmaceutical compliance and quality excellence with proven methodologies and industry expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-pharma-blue/20"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-pharma-navy mb-4 group-hover:text-pharma-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-pharma-blue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Button */}
                <button className="inline-flex items-center text-pharma-blue font-semibold text-sm group-hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-pharma-blue to-blue-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Compliance Strategy?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of pharmaceutical companies that trust us with their regulatory compliance needs.
            </p>
            <button className="bg-white text-pharma-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
