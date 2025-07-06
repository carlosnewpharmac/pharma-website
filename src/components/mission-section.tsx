import { Target, Users, Lightbulb, Shield } from "lucide-react";

export default function MissionSection() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in conducting business with transparency and upholding the highest ethical standards. Our commitment to integrity guides every interaction and decision we make."
    },
    {
      icon: Target,
      title: "Expertise",
      description: "With a deep understanding of industry regulations and standards, we provide specialized expertise to ensure our clients remain ahead in an ever-evolving regulatory environment."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients to tailor compliance solutions that meet their unique needs, fostering a partnership built on trust and shared goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace technological advances and innovative strategies to simplify compliance processes and drive operational excellence."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Our Mission Statement</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering Compliance in Life Sciences
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-pharma-navy mb-6">Our Mission</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Pharma Compliance Expert, our mission is to empower pharmaceutical, biotechnology, and medical device companies to navigate the complex regulatory landscape with precision, integrity, and excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to fostering a culture of compliance that prioritizes patient safety, innovation, and ethical practices, ensuring that every organization we serve can achieve its full potential in delivering transformative healthcare solutions.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-pharma-navy mb-8 text-center">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-pharma-gray p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="text-pharma-blue mb-4 flex justify-center">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-pharma-navy mb-4">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-pharma-gray p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-pharma-navy mb-6">Our Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Through our dedicated services, Pharma Compliance Expert has become a trusted partner for life sciences companies striving to bring safe, effective, and innovative products to market. By aligning compliance efforts with business objectives, we help organizations reduce risks, enhance efficiencies, and maintain the trust of regulators, healthcare professionals, and patients.
            </p>
          </div>
          
          <div className="bg-pharma-blue text-white p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Vision for the Future</h3>
            <p className="leading-relaxed">
              As the life sciences industry continues to evolve, Pharma Compliance Expert envisions a future where compliance is seamlessly integrated into the fabric of every organization. Our unwavering dedication to excellence, collaboration, and innovation drives us to refine our services and support our clients in achieving their global impact in healthcare advancements.
            </p>
            <p className="mt-4 font-medium">
              Together, we build a foundation of trust, accountability, and progress—creating a healthier, safer, and more sustainable world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}