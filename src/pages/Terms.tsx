import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">1. Services Provided</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Voimation provides AI-powered call automation services specifically designed for healthcare 
                providers including medical clinics, dental practices, and veterinary hospitals. Our services 
                include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automated appointment scheduling and management</li>
                <li>24/7 patient support and inquiry handling</li>
                <li>Lead qualification and routing services</li>
                <li>Patient follow-up and retention communications</li>
                <li>Billing and payment reminder automation</li>
                <li>Patient satisfaction surveys and feedback collection</li>
              </ul>
              <p>
                Services are provided through our proprietary AI technology platform and are subject to 
                availability, technical specifications, and compliance requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">2. Use of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                By using Voimation's services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information about your healthcare practice</li>
                <li>Comply with all applicable healthcare regulations including HIPAA</li>
                <li>Use our services in accordance with professional medical standards</li>
                <li>Not use the service for any unlawful or unauthorized purpose</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
              </ul>
              <p>
                You are responsible for ensuring that your use of our services complies with all 
                applicable local, state, and federal regulations governing healthcare communications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">3. Billing & Payments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                <strong>Setup Fee:</strong> All new clients are required to pay a one-time setup fee of 
                $3,450 USD. This fee covers AI system configuration, voice training, integration setup, 
                and go-live support.
              </p>
              <p>
                <strong>Monthly Billing:</strong> Recurring charges are billed monthly in advance based on 
                your selected plan. Additional usage beyond included minutes will be billed at the rates 
                specified in your plan.
              </p>
              <p>
                <strong>Payment Terms:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Setup fees are due before service activation</li>
                <li>Monthly fees are due on the same calendar date each month</li>
                <li>Overage charges are billed in the following month's invoice</li>
                <li>Late payments may result in service suspension</li>
                <li>All fees are non-refundable except where required by law</li>
              </ul>
              <p>
                We accept major credit cards and ACH transfers. All prices are in USD and exclude 
                applicable taxes unless otherwise stated.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">4. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To the maximum extent permitted by law, Voimation shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to 
                loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p>
                Our total liability for any claim arising from or relating to these terms or our services 
                shall not exceed the amount paid by you for the services during the three months preceding 
                the claim.
              </p>
              <p>
                You acknowledge that AI technology may occasionally produce unexpected results and that 
                you maintain ultimate responsibility for all patient communications and medical decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">5. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of 
                [State/Country], without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from these terms or our services shall be resolved through binding 
                arbitration in accordance with the rules of the American Arbitration Association.
              </p>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions 
                will remain in full force and effect.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-space-gray">
            <CardHeader>
              <CardTitle className="text-foreground">6. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-space-gray/50 rounded-lg p-4">
                <p className="text-electric-blue font-mono">support@voimation.com</p>
              </div>
              <p className="text-sm">
                We will respond to all inquiries within 24 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="btn-glow bg-gradient-primary">
            <a href="/contact">Have Questions? Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;