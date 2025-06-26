import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, Clock, Check } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(1, "Message is required").min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitContactForm.mutate(data);
  };

  const services = [
    { value: "compliance-management", label: "Compliance Management" },
    { value: "gmp", label: "Good Manufacturing Practices" },
    { value: "audits", label: "Audits and Inspections" },
    { value: "regulatory-filings", label: "Regulatory Filings" },
    { value: "qms", label: "Quality Management System" },
    { value: "qa-qc", label: "Quality Assurance & Control" },
    { value: "product-optimization", label: "Product Optimization" },
    { value: "validations", label: "Validations & Verifications" },
  ];

  return (
    <section id="contact" className="py-20 bg-pharma-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pharma-navy mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to ensure your pharmaceutical operations meet the highest compliance standards? Let's discuss your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-pharma-navy mb-6">Contact Information</h3>
            
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
                  <p className="text-gray-600">Available upon request</p>
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

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-pharma-navy mb-3">Why Choose Us?</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li className="flex items-center">
                  <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0" />
                  15+ years of industry experience
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0" />
                  Global regulatory expertise
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0" />
                  100% compliance success rate
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 h-4 w-4 mr-2 flex-shrink-0" />
                  Tailored solutions for your needs
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-pharma-navy mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pharma-navy">First Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                            className="focus:ring-pharma-blue focus:border-pharma-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-pharma-navy">Last Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                            className="focus:ring-pharma-blue focus:border-pharma-blue"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-pharma-navy">Email Address *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                          className="focus:ring-pharma-blue focus:border-pharma-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-pharma-navy">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your company name"
                          {...field}
                          className="focus:ring-pharma-blue focus:border-pharma-blue"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-pharma-navy">Service of Interest</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-pharma-blue focus:border-pharma-blue">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-pharma-navy">Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe your specific needs and how we can help you achieve compliance excellence..."
                          rows={5}
                          {...field}
                          className="focus:ring-pharma-blue focus:border-pharma-blue resize-vertical"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-pharma-blue text-white hover:bg-blue-700 transition-colors py-3"
                  disabled={submitContactForm.isPending}
                >
                  {submitContactForm.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
