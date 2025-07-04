import { GraduationCap, Wrench, AlertTriangle, Users, Laptop, Globe } from "lucide-react";

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Globe,
      title: "Global Standards",
      description: "Compliance with FDA, EMA, and regulatory authorities"
    },
    {
      icon: Wrench,
      title: "Tailored Quality Management Systems",
      description: "We design and optimize Quality Management Systems (QMS) tailored to specific operational needs, integrating risk management principles and fostering continuous improvement."
    },
    {
      icon: AlertTriangle,
      title: "Proactive Risk Mitigation",
      description: "Excel at identifying potential risks and implementing mitigation strategies using ICH (Q9) tools like FMEA, FMECA, FTA and HACCP."
    },
    {
      icon: Users,
      title: "Enhanced Training and Awareness",
      description: "Comprehensive training programs that empower employees across all levels to understand and uphold regulatory and GMP standards, building a culture of quality."
    },
    {
      icon: Laptop,
      title: "Leveraging Technology for Compliance",
      description: "Guide organizations in adopting tools like electronic Quality Management Systems (eQMS), real-time monitoring platforms, and digital documentation processes."
    },
    {
      icon: GraduationCap,
      title: "Deep Regulatory Expertise",
      description: "Comprehensive knowledge of global regulatory frameworks, including FDA, EMA, and other authorities. Our proactive approach minimizes risks and keeps your company prepared for inspections and audits."
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-pharma-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">
            Why Working with Pharma Compliance Experts Is the Best Choice
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensuring Compliance, Quality, and Innovation in Pharmaceutical Manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-pharma-blue mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-pharma-navy mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/attached_assets/Screenshot 2025-07-04 at 1.46.34 PM_1751651224960.png"
              alt="Pharmaceutical research and development cellular analysis"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <img
              src="/attached_assets/Screenshot 2025-07-04 at 1.46.44 PM_1751651230513.png"
              alt="Pharmaceutical capsules and OSD manufacturing compliance"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
