import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Building, Rocket, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Beginner",
      icon: Zap,
      price: "$285",
      minutes: "1,500",
      overageRate: "$0.19",
      description: "Perfect for small practices starting their automation journey",
      features: [
        "1,500 minutes included monthly",
        "Basic appointment scheduling", 
        "24/7 patient support",
        "Email integration",
        "Basic analytics dashboard",
        "Phone support during business hours"
      ],
      popular: false
    },
    {
      name: "Pro",
      icon: Star,
      price: "$595", 
      minutes: "3,500",
      overageRate: "$0.17",
      description: "Ideal for growing clinics with moderate call volumes",
      features: [
        "3,500 minutes included monthly",
        "Advanced appointment scheduling",
        "Lead qualification & routing",
        "Payment reminder automation",
        "Custom integration support",
        "Priority phone & email support",
        "Advanced analytics & reporting",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Scale",
      icon: Rocket,
      price: "$950",
      minutes: "6,000", 
      overageRate: "$0.15",
      description: "Built for established practices with high patient volumes",
      features: [
        "6,000 minutes included monthly",
        "Multi-location support",
        "Advanced lead qualification",
        "Custom workflow automation",
        "API access & integrations",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom reporting & insights",
        "White-label options"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      icon: Building,
      price: "Custom",
      minutes: "Custom",
      overageRate: "$0.15",
      description: "Tailored solutions for large healthcare organizations",
      features: [
        "Custom minute allocations",
        "Enterprise-grade security",
        "Multi-tenant architecture", 
        "Advanced compliance features",
        "Custom AI training & tuning",
        "Dedicated infrastructure",
        "SLA guarantees",
        "Custom integration development",
        "On-site training & support"
      ],
      popular: false
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Transparent Pricing That <span className="text-gradient">Grows With You</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            No hidden fees. No surprises. Just powerful AI automation that scales with your practice.
          </p>
          
          {/* Setup Fee Notice */}
          <Card className="bg-gradient-primary/10 border-electric-blue/30 max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">One-Time Setup Fee</h3>
              <div className="text-3xl font-bold text-electric-blue">$3,450 USD</div>
              <p className="text-sm text-muted-foreground mt-2">
                Includes AI training, system integration, and go-live support
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`card-float relative ${
                  plan.popular 
                    ? 'border-electric-blue bg-gradient-primary/5' 
                    : 'bg-card/50 border-space-gray'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-deep-space">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mx-auto mb-4">
                    <Icon className="h-6 w-6 text-deep-space" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-foreground mb-1">
                      {plan.price}
                    </div>
                    <div className="text-muted-foreground">
                      per month
                    </div>
                    <div className="text-sm text-electric-blue mt-2">
                      {plan.minutes} minutes included
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {plan.overageRate} per minute after limit
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-electric-blue mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center space-y-3">
                    <div className="text-xs text-muted-foreground">
                      One-Time Setup: <span className="font-semibold">$3,450</span>
                    </div>
                    <Button 
                      asChild 
                      className={`w-full ${
                        plan.popular 
                          ? 'btn-glow bg-gradient-primary' 
                          : 'btn-glow'
                      }`}
                    >
                      <a href="mailto:support@voimation.com">
                        Start Automating
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Pricing Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  What's included in the setup fee?
                </h3>
                <p className="text-muted-foreground text-sm">
                  The $3,450 setup fee covers AI voice training for your clinic, 
                  system integration with your existing tools, staff training, and 
                  dedicated go-live support to ensure smooth deployment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  How do overage minutes work?
                </h3>
                <p className="text-muted-foreground text-sm">
                  If you exceed your plan's included minutes, you'll be charged 
                  per additional minute at the rates shown. We'll notify you as 
                  you approach your limit so you can upgrade if needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Can I change plans later?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Absolutely! You can upgrade or downgrade your plan at any time. 
                  Changes take effect at your next billing cycle, and we'll help 
                  you find the right plan as your practice grows.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-space-gray">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">
                  Is there a contract commitment?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We offer both month-to-month and annual billing options. 
                  Annual plans receive a 10% discount and priority support. 
                  No long-term contracts required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-cosmic border-0 p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-deep-space mb-4">
              Ready to Stop Losing Patients?
            </h2>
            <p className="text-lg text-deep-space/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of healthcare providers who have transformed their patient 
              communication with Voimation's AI automation.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-deep-space text-foreground hover:bg-deep-space/90"
            >
              <a href="mailto:support@voimation.com">
                Schedule Your Demo Today
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;