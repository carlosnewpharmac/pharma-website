import { Shield, Settings, ClipboardCheck, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/attached_assets/Screenshot 2025-07-04 at 1.46.44 PM_1751651230513.png"
              alt="Pharmaceutical capsules and solid dosage forms for quality compliance"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-pharma-navy mb-6">About Pharma Compliance Experts</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With a strong focus on compliance, regulatory filings, quality management, current good manufacturing practices (cGMP), quality assurance, and quality control, our firm plays an indispensable role in ensuring that pharmaceutical companies adhere to global standards while maximizing operational efficiency.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are making a significant impact in helping the pharmaceutical industry meet its compliance and GMP requirements by providing specialized guidance, tailored solutions, and comprehensive support. We simplify complex regulatory landscapes through expert audits and assessments, identifying gaps and mitigating risks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Shield className="text-pharma-blue h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-pharma-navy mb-2">Regulatory Proficiency</h3>
                  <p className="text-gray-600 text-sm">Expert knowledge in global regulatory frameworks and standards</p>
                </div>
              </div>
              <div className="flex items-start">
                <Settings className="text-pharma-blue h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-pharma-navy mb-2">Quality Management</h3>
                  <p className="text-gray-600 text-sm">Comprehensive quality assurance and control systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClipboardCheck className="text-pharma-blue h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-pharma-navy mb-2">GMP Excellence</h3>
                  <p className="text-gray-600 text-sm">Current good manufacturing practices implementation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="text-pharma-blue h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-pharma-navy mb-2">Global Standards</h3>
                  <p className="text-gray-600 text-sm">Compliance with FDA, EMA, and regulatory authorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
