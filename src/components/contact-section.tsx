import { Mail, Phone, Clock } from "lucide-react";

export default function ContactSection() {

  return (
    <section id="contact" className="py-20 bg-pharma-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to ensure your pharmaceutical operations meet the highest compliance standards? Let's discuss your specific needs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-pharma-navy mb-6 text-center">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-pharma-blue h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-pharma-navy mb-1">Email</h4>
                  <p className="text-gray-600">john.dickson@jsd.solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-pharma-blue h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-pharma-navy mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (954) 554-6945</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-pharma-blue h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-pharma-navy mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
