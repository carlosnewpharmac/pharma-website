import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SEOHead from "../components/seo-head";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Award,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Pharma Compliance Experts | Pharmaceutical Regulatory Consulting",
    "description": "Contact Pharma Compliance Experts for pharmaceutical regulatory consulting services. Get expert FDA compliance, GMP consulting, and regulatory support for your pharmaceutical business.",
    "url": "https://www.pharmacomplianceexperts.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Pharma Compliance Experts",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "info@pharmacomplianceexperts.com",
        "telephone": "+1-555-0123",
        "availableLanguage": "English"
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak directly with our pharmaceutical regulatory experts",
      contact: "+1 (555) 012-3456",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      description: "Send us your questions about pharmaceutical compliance",
      contact: "info@pharmacomplianceexperts.com",
      action: "Send Email"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant answers from our compliance specialists",
      contact: "Available 24/7",
      action: "Start Chat"
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters for in-person consultations",
      contact: "New York, NY",
      action: "Get Directions"
    }
  ];

  const consultationTypes = [
    {
      title: "FDA Compliance Assessment",
      description: "Comprehensive evaluation of your current FDA compliance status and recommendations for improvement.",
      duration: "2-3 hours",
      includes: [
        "Current compliance gap analysis",
        "Risk assessment and mitigation strategies",
        "Action plan development",
        "Follow-up consultation"
      ]
    },
    {
      title: "GMP Implementation Review",
      description: "Detailed review of your Good Manufacturing Practices implementation and optimization strategies.",
      duration: "3-4 hours",
      includes: [
        "GMP compliance evaluation",
        "Process optimization recommendations",
        "Documentation review",
        "Staff training recommendations"
      ]
    },
    {
      title: "Regulatory Strategy Planning",
      description: "Strategic planning session for navigating complex pharmaceutical regulatory requirements.",
      duration: "4-5 hours",
      includes: [
        "Regulatory pathway analysis",
        "Timeline development",
        "Resource planning",
        "Risk management strategies"
      ]
    },
    {
      title: "Quality Management System Audit",
      description: "Comprehensive audit of your quality management system with improvement recommendations.",
      duration: "1-2 days",
      includes: [
        "QMS effectiveness evaluation",
        "Process documentation review",
        "Compliance gap identification",
        "Implementation roadmap"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Pharma Compliance Experts helped us achieve FDA approval in record time. Their expertise in pharmaceutical regulatory consulting is unmatched.",
      author: "Dr. Sarah Johnson",
      position: "Director of Regulatory Affairs",
      company: "BioPharma Solutions Inc."
    },
    {
      quote: "The GMP consulting services provided by Pharma Compliance Experts transformed our manufacturing processes and ensured full compliance.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "MediTech Pharmaceuticals"
    },
    {
      quote: "Outstanding pharmaceutical regulatory consulting that helped us navigate complex FDA requirements successfully.",
      author: "Dr. Emily Rodriguez",
      position: "Chief Scientific Officer",
      company: "Innovation Labs"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Contact Pharma Compliance Experts | Pharmaceutical Regulatory Consulting Services"
        description="Contact Pharma Compliance Experts for pharmaceutical regulatory consulting services. Get expert FDA compliance, GMP consulting, and regulatory support for your pharmaceutical business."
        keywords="contact pharmaceutical consulting, FDA compliance consulting, GMP consulting contact, pharmaceutical regulatory services, pharmaceutical compliance experts"
        structuredData={structuredData}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-pharma-gray to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
              Contact Pharma Compliance Experts
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to achieve pharmaceutical regulatory excellence? Our expert consultants are here to help you navigate FDA compliance, GMP requirements, and regulatory challenges. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-pharma-blue text-pharma-blue hover:bg-pharma-blue hover:text-white transition-colors px-8 py-3 text-base rounded-lg">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to reach our pharmaceutical regulatory experts. We're here to help you achieve compliance excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-pharma-gray p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <div className="bg-pharma-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-pharma-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <p className="text-pharma-blue font-semibold mb-4">{item.contact}</p>
                  <button className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm">
                    {item.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 bg-pharma-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Free Consultation Options</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the consultation type that best fits your pharmaceutical compliance needs. All initial consultations are free and confidential.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultationTypes.map((consultation, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-pharma-navy">{consultation.title}</h3>
                  <span className="bg-pharma-blue text-white px-3 py-1 rounded-full text-sm">
                    {consultation.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{consultation.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-pharma-navy">What's Included:</h4>
                  <ul className="space-y-2">
                    {consultation.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 w-full bg-pharma-blue text-white hover:bg-blue-700 transition-colors py-3 rounded-lg">
                  Schedule This Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pharma-navy mb-4">Send Us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our pharmaceutical regulatory experts will get back to you within 24 hours.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Type</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent">
                <option>Select consultation type</option>
                <option>FDA Compliance Assessment</option>
                <option>GMP Implementation Review</option>
                <option>Regulatory Strategy Planning</option>
                <option>Quality Management System Audit</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
              <textarea
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pharma-blue focus:border-transparent"
                placeholder="Tell us about your pharmaceutical compliance needs and how we can help..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pharma-blue text-white hover:bg-blue-700 transition-colors px-8 py-3 text-base rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-pharma-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Pharmaceutical companies trust us to deliver exceptional regulatory consulting results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-xl">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm opacity-80">{testimonial.position}</p>
                  <p className="text-sm opacity-80">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 