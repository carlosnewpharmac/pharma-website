import React from "react";
import { Mail, Phone, Clock, MapPin, MessageSquare, Calendar } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "john.dickson@jsd.solutions",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (954) 554-6945",
      description: "Call us during business hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 9:00 AM - 6:00 PM",
      description: "Saturday - Sunday: By appointment"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Serving clients nationwide",
      description: "Remote and on-site consulting available"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-pharma-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pharma-blue/10 text-pharma-blue text-sm font-medium mb-6">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-pharma-navy mb-6">
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pharma-blue to-blue-600">
              Compliance Strategy?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help ensure your pharmaceutical operations meet the highest compliance standards and regulatory requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-pharma-navy mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of regulatory experts is ready to help you navigate the complex pharmaceutical compliance landscape. Reach out to us for a free consultation.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pharma-blue/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-pharma-blue" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-pharma-navy mb-1">{info.title}</h4>
                      <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pharma-blue/10 rounded-2xl mb-4">
                <MessageSquare className="h-8 w-8 text-pharma-blue" />
              </div>
              <h3 className="text-2xl font-bold text-pharma-navy mb-2">
                Start Your Consultation
              </h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-pharma-navy mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-pharma-navy mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pharma-navy mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pharma-navy mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200"
                  placeholder="Your Company Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pharma-navy mb-2">
                  Service Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200">
                  <option>Select a service</option>
                  <option>Compliance Management</option>
                  <option>Good Manufacturing Practices</option>
                  <option>Audits and Inspections</option>
                  <option>Regulatory Filings</option>
                  <option>Quality Management System</option>
                  <option>Quality Assurance & Control</option>
                  <option>Product Optimization</option>
                  <option>Validations & Verifications</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-pharma-navy mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pharma-blue focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your compliance needs..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-pharma-blue text-white hover:bg-blue-700 transition-all duration-300 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
