import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent("Voimation Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:support@voimation.info?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the message pre-filled.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your clinic's patient communication? Get in touch with our team 
            to discuss how Voimation can help you never miss a patient call again.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 bg-space-gray border-space-gray text-foreground"
                    placeholder="Dr. Sarah Johnson"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-space-gray border-space-gray text-foreground"
                    placeholder="sarah@dentalclinic.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-space-gray border-space-gray text-foreground resize-none"
                    placeholder="Tell us about your clinic and how we can help automate your patient calls..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full btn-glow bg-gradient-primary text-lg h-12"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                    <Mail className="h-6 w-6 text-deep-space" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us Directly</h3>
                    <p className="text-muted-foreground">Get a response within 24 hours</p>
                  </div>
                </div>
                <div className="bg-space-gray/50 rounded-lg p-4">
                  <a 
                    href="mailto:support@voimation.info"
                    className="text-electric-blue hover:text-electric-purple transition-colors font-mono text-lg"
                  >
                    support@voimation.info
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response */}
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                    <Clock className="h-6 w-6 text-deep-space" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground">We respond quickly</p>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Demo requests: Within 2 hours</li>
                  <li>• General inquiries: Within 24 hours</li>
                  <li>• Technical support: Within 1 hour</li>
                  <li>• Emergency issues: Immediate</li>
                </ul>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                    <Phone className="h-6 w-6 text-deep-space" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">What Happens Next?</h3>
                    <p className="text-muted-foreground">Your journey to automation</p>
                  </div>
                </div>
                <ol className="space-y-2 text-muted-foreground text-sm">
                  <li>1. We'll review your clinic's needs</li>
                  <li>2. Schedule a personalized demo</li>
                  <li>3. Discuss pricing and implementation</li>
                  <li>4. Begin AI training and setup</li>
                  <li>5. Go live with full automation</li>
                </ol>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-cosmic border-0">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-deep-space mb-2">
                  Ready to Get Started?
                </h3>
                <p className="text-deep-space/80 mb-4 text-sm">
                  Skip the form and email us directly for the fastest response.
                </p>
                <Button 
                  asChild 
                  className="bg-deep-space text-foreground hover:bg-deep-space/90"
                >
                  <a href="mailto:support@voimation.info">
                    Email Us Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-deep-space border-space-gray">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Join Healthcare Providers Who Trust Voimation
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Over 200 clinics have already transformed their patient communication. 
                See why they chose Voimation for their AI automation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-glow bg-gradient-primary">
                  <a href="/pricing">View Pricing Plans</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-space-gray">
                  <a href="/services">Learn About Our Services</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;