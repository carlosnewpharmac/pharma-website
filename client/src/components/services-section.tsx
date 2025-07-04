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
      title: "Compliance Management",
      description: "Streamline regulatory compliance across global markets with robust frameworks and GMP adherence.",
      features: [
        "Robust compliance frameworks",
        "GMP adherence guidance",
        "Data integrity compliance"
      ]
    },
    {
      icon: Search,
      title: "Good Manufacturing Practices",
      description: "Achieve GMP excellence through facility audits, staff training, and compliance monitoring systems.",
      features: [
        "Manufacturing facility audits",
        "GMP principles training",
        "Compliance monitoring systems"
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
      title: "Regulatory Filings",
      description: "Expert assistance in compiling, submitting, and managing regulatory documentation for approvals.",
      features: [
        "Drug approvals and renewals",
        "Clinical trial applications",
        "Post-marketing surveillance"
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
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Providing end-to-end solutions for pharmaceutical compliance and quality excellence
          </p>
          <div className="max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400"
              alt="Pharmaceutical manufacturing equipment including blenders, granulators and tablet presses for OSD production"
              className="rounded-xl shadow-lg w-full h-auto mb-8"
            />
          </div>
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
