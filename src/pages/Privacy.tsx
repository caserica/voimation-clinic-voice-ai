import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Database, Users } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Account information including clinic name, contact details, and billing information",
        "Call data and recordings necessary to provide AI automation services",
        "Patient interaction data to improve service quality and accuracy", 
        "Usage analytics to optimize system performance",
        "Technical information such as IP addresses and device identifiers"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our AI call automation services",
        "To process payments and manage your account",
        "To train and improve our AI models for better service delivery",
        "To provide customer support and technical assistance",
        "To comply with legal obligations and healthcare regulations"
      ]
    },
    {
      icon: Shield,
      title: "Data Security & HIPAA Compliance",
      content: [
        "All patient health information is encrypted in transit and at rest",
        "We maintain comprehensive HIPAA compliance protocols",
        "Access to sensitive data is strictly limited to authorized personnel",
        "Regular security audits and penetration testing are conducted",
        "Business Associate Agreements (BAAs) are executed with all healthcare clients"
      ]
    },
    {
      icon: Users,
      title: "Third-Party Services",
      content: [
        "We may integrate with your existing practice management software",
        "Payment processing is handled by PCI-compliant third-party providers",
        "Cloud infrastructure providers maintain SOC 2 Type II compliance",
        "All third-party integrations are subject to strict data protection agreements",
        "No patient data is shared without explicit consent or legal requirement"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="flex items-center justify-center space-x-2 text-electric-blue">
            <Lock className="h-5 w-5" />
            <span className="text-sm font-medium">HIPAA Compliant & Secure</span>
          </div>
        </div>

        <Card className="bg-gradient-primary/10 border-electric-blue/30 mb-12">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Shield className="h-8 w-8 text-electric-blue" />
              <div>
                <h2 className="text-xl font-bold text-foreground">Your Privacy is Our Priority</h2>
                <p className="text-muted-foreground">
                  We are committed to protecting your privacy and maintaining the highest standards 
                  of data security for healthcare information.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="bg-card/50 border-space-gray">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                      <Icon className="h-5 w-5 text-deep-space" />
                    </div>
                    <CardTitle className="text-foreground">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}

          {/* Data Retention */}
          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-lg">
                  <Database className="h-5 w-5 text-deep-space" />
                </div>
                <span>Data Retention & Deletion</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We retain your data only as long as necessary to provide services and comply with 
                legal obligations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Call recordings: Retained for 7 years in compliance with healthcare regulations</li>
                <li>Account information: Retained while your account is active</li>
                <li>Billing records: Retained for 7 years for tax and legal compliance</li>
                <li>Analytics data: Anonymized and retained indefinitely for service improvement</li>
              </ul>
              <p>
                You may request deletion of your data at any time by contacting our support team. 
                We will comply with all applicable data protection regulations including GDPR and CCPA.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">Your Rights & Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>You have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request data deletion</li>
                  <li>Data portability</li>
                </ul>
                <ul className="list-disc list-inside space-y-2">
                  <li>Opt-out of certain data uses</li>
                  <li>File complaints with supervisory authorities</li>
                  <li>Receive breach notifications</li>
                  <li>Review Business Associate Agreements</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-cosmic border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-deep-space mb-4">
                Privacy Questions or Concerns?
              </h3>
              <p className="text-deep-space/80 mb-6">
                Our privacy team is here to help. Contact us for any questions about your data 
                or to exercise your privacy rights.
              </p>
              <div className="bg-deep-space/10 rounded-lg p-4 mb-6">
                <p className="text-deep-space font-mono text-lg">support@voimation.com</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-deep-space text-foreground hover:bg-deep-space/90"
                >
                  <a href="mailto:support@voimation.com">Contact Privacy Team</a>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-deep-space text-deep-space hover:bg-deep-space hover:text-foreground"
                >
                  <a href="/terms">View Terms of Service</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Privacy;