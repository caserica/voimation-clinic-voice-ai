import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  Users, 
  TrendingUp, 
  Headphones, 
  CreditCard,
  Phone,
  CheckCircle,
  UserCheck,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calendar,
      title: "Appointment Setting",
      description: "Intelligent AI that understands your clinic's schedule and booking preferences. Our system seamlessly integrates with your existing calendar software to book appointments in real-time, reducing no-shows and maximizing your clinic's capacity.",
      features: [
        "Real-time calendar integration",
        "Automated confirmation & reminders",
        "Intelligent rescheduling",
        "Multi-provider scheduling"
      ]
    },
    {
      icon: Clock,
      title: "24/7 Patient Service",
      description: "Your clinic never sleeps with our round-the-clock AI patient service. Handle emergency inquiries, provide basic medical information, and route urgent calls to appropriate personnel, ensuring patient care continues beyond business hours.",
      features: [
        "Emergency call routing",
        "Basic medical FAQs",
        "Prescription refill requests",
        "After-hours support"
      ]
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Smart AI qualification system that identifies high-value potential patients and gathers essential information before they reach your staff. Filter out unqualified leads and prioritize genuine prospects for your practice.",
      features: [
        "Insurance verification",
        "Treatment need assessment",
        "Budget qualification",
        "Urgency prioritization"
      ]
    },
    {
      icon: Phone,
      title: "Follow-Ups & Retention",
      description: "Automated follow-up sequences that maintain patient relationships and encourage repeat visits. Our AI reaches out at optimal times with personalized messages to keep your patients engaged with your practice.",
      features: [
        "Post-treatment check-ins",
        "Appointment reminders",
        "Wellness program enrollment",
        "Loyalty program management"
      ]
    },
    {
      icon: CreditCard,
      title: "Billing & Payment Reminders",
      description: "Gentle but effective payment collection through AI-powered reminder calls. Reduce outstanding receivables while maintaining positive patient relationships through personalized, empathetic communication.",
      features: [
        "Overdue payment notifications",
        "Payment plan setup",
        "Insurance claim follow-ups",
        "Flexible payment scheduling"
      ]
    },
    {
      icon: Headphones,
      title: "Feedback & Satisfaction Surveys",
      description: "Automated patient satisfaction surveys and feedback collection to help improve your practice. Our AI conducts professional surveys and compiles actionable insights to enhance patient experience.",
      features: [
        "Treatment satisfaction surveys",
        "Service quality feedback",
        "Online review encouragement",
        "Improvement recommendations"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            What We Automate for Your <span className="text-gradient">Clinic</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed specifically for healthcare providers. 
            Each service integrates seamlessly with your existing workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
                <Card key={index} className="card-float bg-card/50 border-space-gray overflow-hidden rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <CardHeader className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg">
                          <Icon className="h-8 w-8 text-deep-space" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <Button 
                        asChild 
                        className="btn-glow bg-gradient-primary w-fit"
                      >
                        <a href="https://calendly.com/voimation/30min">
                          Get Started
                        </a>
                      </Button>
                    </CardHeader>
                  
                  <CardContent className="p-8 lg:p-12 bg-space-gray/30">
                    <h4 className="font-semibold text-foreground mb-4 text-lg">
                      Key Features:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-electric-blue flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-cosmic border-0 p-8 lg:p-12 rounded-lg">
            <h2 className="text-3xl font-bold text-deep-space mb-4">
              Ready to Transform Your Patient Communication?
            </h2>
            <p className="text-lg text-deep-space/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who have automated their patient calls 
              and increased retention with Voimation.
            </p>
            <div className="flex justify-center">
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-deep-space text-deep-space hover:bg-deep-space hover:text-foreground"
              >
                <a href="https://calendly.com/voimation/30min">Schedule a Demo</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;