import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Users, TrendingUp, Headphones, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const services = [
    {
      icon: Calendar,
      title: "Appointment Setting",
      description: "AI books appointments automatically"
    },
    {
      icon: Clock,
      title: "24/7 Patient Service",
      description: "Never-sleeping patient support"
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description: "Smart filtering of potential patients"
    },
    {
      icon: Phone,
      title: "Follow-Ups & Retention",
      description: "Automated patient engagement"
    },
    {
      icon: TrendingUp,
      title: "Billing Reminders",
      description: "Streamlined payment collection"
    },
    {
      icon: Headphones,
      title: "Satisfaction Surveys",
      description: "Automated feedback collection"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stop Losing Patients to <span className="text-gradient">Missed Calls</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            AI-powered call automation that books appointments, qualifies leads, and supports patients 24/7.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="btn-glow bg-gradient-primary text-lg px-8 py-4 h-auto"
          >
            <a href="https://calendly.com/voimation/30min">
              Book a Call
            </a>
          </Button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-deep-space/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What We Automate for Your <span className="text-gradient">Clinic</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed specifically for healthcare providers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-float bg-card/50 border-space-gray">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-deep-space" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="btn-glow">
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gradient-cosmic p-8 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-space mb-4">
              Clinics using Voimation see patient retention increase ~5% monthly
            </h2>
            <p className="text-lg text-deep-space/80 mb-6">
              Don't let missed calls turn into lost patients. Start automating today.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-deep-space text-foreground hover:bg-deep-space/90"
            >
              <a href="/pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-space-gray/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Every missed call is a <span className="text-gradient">lost patient</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Stop losing patients today. Get started with Voimation's AI automation.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="btn-glow bg-gradient-primary text-lg px-8 py-4 h-auto"
          >
            <a href="https://calendly.com/voimation/30min">
              Start Automating Now
            </a>
          </Button>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-deep-space">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Voimation, we believe every clinic deserves a voice that never sleeps. Our mission 
            is to help healthcare providers stay connected with patients through seamless AI-powered 
            call automation. By combining advanced voice technology with smart workflows, we reduce 
            missed calls, boost retention, and keep your clinic operating smoothly — all without extra staff.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;