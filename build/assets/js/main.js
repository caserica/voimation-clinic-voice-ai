// Voimation Website - Main JavaScript

// Router functionality
class Router {
  constructor() {
    this.routes = {
      '/': 'home',
      '/services': 'services',
      '/pricing': 'pricing',
      '/contact': 'contact'
    };
    
    this.currentRoute = '/';
    this.init();
  }

  init() {
    // Handle navigation
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-route]')) {
        e.preventDefault();
        const route = e.target.getAttribute('data-route');
        this.navigate(route);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.handleRoute(window.location.pathname);
    });

    // Load initial route
    this.handleRoute(window.location.pathname);
  }

  navigate(route) {
    if (this.routes[route]) {
      window.history.pushState({}, '', route);
      this.handleRoute(route);
    }
  }

  handleRoute(route) {
    this.currentRoute = route;
    const page = this.routes[route] || 'home';
    this.loadPage(page);
  }

  loadPage(page) {
    const content = this.getPageContent(page);
    document.getElementById('root').innerHTML = content;
    this.bindEvents();
  }

  getPageContent(page) {
    const pages = {
      home: this.getHomePage(),
      services: this.getServicesPage(),
      pricing: this.getPricingPage(),
      contact: this.getContactPage()
    };
    
    return `
      ${this.getHeader()}
      ${pages[page]}
      ${this.getFooter()}
    `;
  }

  getHeader() {
    return `
      <header class="nav-sticky">
        <div class="container">
          <div class="flex items-center justify-between" style="height: 4rem;">
            <div class="flex items-center">
              <a href="/" data-route="/" class="text-2xl font-bold text-gradient">
                Voimation
              </a>
            </div>

            <nav class="nav-desktop items-center" style="gap: 2rem;">
              <a href="/" data-route="/" class="nav-link">Home</a>
              <a href="/services" data-route="/services" class="nav-link">Services</a>
              <a href="/pricing" data-route="/pricing" class="nav-link">Pricing</a>
              <a href="/contact" data-route="/contact" class="nav-link">Contact</a>
              
              <a href="https://calendly.com/voimation/30min" class="btn btn-primary btn-glow">
                Book a Call
              </a>
            </nav>

            <button class="nav-mobile" id="mobile-menu-button" style="padding: 0.5rem; border: none; background: none; color: inherit;">
              <svg style="width: 1.5rem; height: 1.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <nav class="nav-mobile card hidden" id="mobile-menu" style="margin-top: 1rem;">
            <div style="padding: 1rem; display: flex; flex-direction: column; gap: 1rem;">
              <a href="/" data-route="/" class="nav-link">Home</a>
              <a href="/services" data-route="/services" class="nav-link">Services</a>
              <a href="/pricing" data-route="/pricing" class="nav-link">Pricing</a>
              <a href="/contact" data-route="/contact" class="nav-link">Contact</a>
              <a href="https://calendly.com/voimation/30min" class="btn btn-primary" style="text-align: center;">
                Book a Call
              </a>
            </div>
          </nav>
        </div>
      </header>
    `;
  }

  getHomePage() {
    return `
      <main>
        <!-- Hero Section -->
        <section class="bg-gradient-hero" style="padding: 5rem 1rem;">
          <div class="container text-center">
            <div class="hero-glow rounded-3xl p-8">
              <h1 class="text-4xl font-bold mb-6 text-gradient" style="line-height: 1.2;">
                Revolutionize Your Healthcare Practice
              </h1>
              <p class="text-xl mb-8 max-w-4xl mx-auto" style="color: hsl(var(--muted-foreground));">
                Streamline patient communications and enhance satisfaction with AI-powered automation.
              </p>
              <a href="https://calendly.com/voimation/30min" class="btn btn-primary btn-glow text-lg">
                Book Your Free Consultation
              </a>
            </div>
          </div>
        </section>

        <!-- Services Overview -->
        <section style="padding: 5rem 1rem;">
          <div class="container">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-4">Our Services</h2>
              <p class="text-xl" style="color: hsl(var(--muted-foreground));">Comprehensive AI solutions for modern healthcare</p>
            </div>
            
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
              <div class="card card-float">
                <div class="flex items-center mb-4">
                  <span style="font-size: 2rem; margin-right: 1rem;">📅</span>
                  <h3 class="text-xl font-bold">Appointment Reminders</h3>
                </div>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                  Automated calls and texts to reduce no-shows and keep your schedule full.
                </p>
                <a href="/services" data-route="/services" class="btn btn-outline">Learn More</a>
              </div>

              <div class="card card-float">
                <div class="flex items-center mb-4">
                  <span style="font-size: 2rem; margin-right: 1rem;">🛡️</span>
                  <h3 class="text-xl font-bold">Insurance Verification</h3>
                </div>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                  Instant insurance verification to ensure smooth patient experiences.
                </p>
                <a href="/services" data-route="/services" class="btn btn-outline">Learn More</a>
              </div>

              <div class="card card-float">
                <div class="flex items-center mb-4">
                  <span style="font-size: 2rem; margin-right: 1rem;">📞</span>
                  <h3 class="text-xl font-bold">Patient Follow-up</h3>
                </div>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                  Personalized follow-up calls to ensure patient satisfaction and care continuity.
                </p>
                <a href="/services" data-route="/services" class="btn btn-outline">Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section style="padding: 5rem 1rem;">
          <div class="container text-center">
            <div class="bg-gradient-cosmic rounded-3xl p-8 animate-pulse-glow">
              <h2 class="text-3xl font-bold mb-6" style="color: white;">
                Ready to Transform Your Practice?
              </h2>
              <p class="text-xl mb-8" style="color: rgba(255, 255, 255, 0.9);">
                Join hundreds of healthcare providers who have revolutionized their patient communications.
              </p>
              <a href="https://calendly.com/voimation/30min" class="btn" style="background: white; color: hsl(var(--cosmic-purple)); font-weight: 600;">
                Schedule Your Demo Today
              </a>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  getServicesPage() {
    return `
      <main>
        <section style="padding: 5rem 1rem 3rem;">
          <div class="container">
            <div class="text-center mb-8">
              <h1 class="text-4xl font-bold mb-4 text-gradient">Our Services</h1>
              <p class="text-xl max-w-4xl mx-auto" style="color: hsl(var(--muted-foreground));">
                Comprehensive AI-powered solutions designed to streamline your healthcare practice operations and enhance patient satisfaction.
              </p>
            </div>
          </div>
        </section>

        <section style="padding: 2rem 1rem;">
          <div class="container">
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem;">
              <!-- Appointment Reminders -->
              <div class="card card-float">
                <div class="flex items-center mb-6">
                  <span style="font-size: 2.5rem; margin-right: 1rem;">📅</span>
                  <h2 class="text-2xl font-bold">Appointment Reminders</h2>
                </div>
                
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                  Automated calls and texts to reduce no-shows and keep your schedule full.
                </p>
                
                <ul class="space-y-4 mb-6" style="color: hsl(var(--muted-foreground));">
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Multi-channel reminders (voice, SMS, email)
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Personalized timing preferences
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Automated rescheduling options
                  </li>
                </ul>
                
                <a href="/contact" data-route="/contact" class="btn btn-primary btn-glow">
                  Learn More
                </a>
              </div>

              <!-- Insurance Verification -->
              <div class="card card-float">
                <div class="flex items-center mb-6">
                  <span style="font-size: 2.5rem; margin-right: 1rem;">🛡️</span>
                  <h2 class="text-2xl font-bold">Insurance Verification</h2>
                </div>
                
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                  Instant insurance verification to ensure smooth patient experiences and reduce claim denials.
                </p>
                
                <ul class="space-y-4 mb-6" style="color: hsl(var(--muted-foreground));">
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Real-time eligibility checking
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Coverage details and copay information
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Integration with major insurance providers
                  </li>
                </ul>
                
                <a href="/contact" data-route="/contact" class="btn btn-primary btn-glow">
                  Learn More
                </a>
              </div>

              <!-- Patient Follow-up -->
              <div class="card card-float">
                <div class="flex items-center mb-6">
                  <span style="font-size: 2.5rem; margin-right: 1rem;">📞</span>
                  <h2 class="text-2xl font-bold">Patient Follow-up</h2>
                </div>
                
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                  Personalized follow-up calls to ensure patient satisfaction and care continuity.
                </p>
                
                <ul class="space-y-4 mb-6" style="color: hsl(var(--muted-foreground));">
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Post-appointment satisfaction surveys
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Medication adherence monitoring
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Symptom tracking and reporting
                  </li>
                </ul>
                
                <a href="/contact" data-route="/contact" class="btn btn-primary btn-glow">
                  Learn More
                </a>
              </div>

              <!-- Prescription Refills -->
              <div class="card card-float">
                <div class="flex items-center mb-6">
                  <span style="font-size: 2.5rem; margin-right: 1rem;">💊</span>
                  <h2 class="text-2xl font-bold">Prescription Refills</h2>
                </div>
                
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">
                  Automated prescription refill reminders and pharmacy coordination.
                </p>
                
                <ul class="space-y-4 mb-6" style="color: hsl(var(--muted-foreground));">
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Proactive refill notifications
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Pharmacy integration
                  </li>
                  <li class="flex items-center">
                    <span style="color: hsl(var(--primary)); margin-right: 0.5rem;">✓</span>
                    Medication adherence tracking
                  </li>
                </ul>
                
                <a href="/contact" data-route="/contact" class="btn btn-primary btn-glow">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  getPricingPage() {
    return `
      <main>
        <section style="padding: 5rem 1rem 3rem;">
          <div class="container">
            <div class="text-center mb-8">
              <h1 class="text-4xl font-bold mb-4 text-gradient">Choose Your Plan</h1>
              <p class="text-xl max-w-4xl mx-auto" style="color: hsl(var(--muted-foreground));">
                Flexible pricing options designed to scale with your practice, from small clinics to large healthcare systems.
              </p>
            </div>
          </div>
        </section>

        <section style="padding: 2rem 1rem;">
          <div class="container">
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto;">
              
              <!-- Starter Plan -->
              <div class="card card-float">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-2">Starter</h3>
                  <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Perfect for small practices</p>
                  <div class="mb-4">
                    <span class="text-4xl font-bold text-gradient">$299</span>
                    <span style="color: hsl(var(--muted-foreground));">/ per month</span>
                  </div>
                </div>
                
                <ul class="space-y-4 mb-8">
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Up to 500 automated calls/month
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Appointment reminders
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Email support
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Basic analytics
                  </li>
                </ul>
                
                <a href="https://calendly.com/voimation/30min" class="btn btn-primary btn-glow" style="width: 100%; text-align: center; display: block;">
                  Get Started
                </a>
              </div>

              <!-- Professional Plan (Popular) -->
              <div class="card card-float" style="position: relative; transform: scale(1.05); border: 2px solid hsl(var(--primary));">
                <div style="position: absolute; top: -1rem; left: 50%; transform: translateX(-50%);">
                  <span class="bg-gradient-cosmic text-white px-4 py-2 rounded-3xl text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-2">Professional</h3>
                  <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">Ideal for growing practices</p>
                  <div class="mb-4">
                    <span class="text-4xl font-bold text-gradient">$699</span>
                    <span style="color: hsl(var(--muted-foreground));">/ per month</span>
                  </div>
                </div>
                
                <ul class="space-y-4 mb-8">
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Up to 2,000 automated calls/month
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    All Starter features
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Insurance verification
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Patient follow-up calls
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Priority support
                  </li>
                </ul>
                
                <a href="https://calendly.com/voimation/30min" class="btn bg-gradient-cosmic btn-glow" style="width: 100%; text-align: center; display: block; color: white;">
                  Get Started
                </a>
              </div>

              <!-- Enterprise Plan -->
              <div class="card card-float">
                <div class="text-center mb-8">
                  <h3 class="text-2xl font-bold mb-2">Enterprise</h3>
                  <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">For large healthcare systems</p>
                  <div class="mb-4">
                    <span class="text-4xl font-bold text-gradient">Custom</span>
                    <span style="color: hsl(var(--muted-foreground));">/ pricing</span>
                  </div>
                </div>
                
                <ul class="space-y-4 mb-8">
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Unlimited automated calls
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    All Professional features
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Custom integrations
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    Dedicated account manager
                  </li>
                  <li class="flex items-center" style="color: hsl(var(--muted-foreground));">
                    <span style="color: hsl(var(--primary)); margin-right: 0.75rem;">✓</span>
                    24/7 phone support
                  </li>
                </ul>
                
                <a href="https://calendly.com/voimation/30min" class="btn btn-primary btn-glow" style="width: 100%; text-align: center; display: block;">
                  Contact Sales
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
    `;
  }

  getContactPage() {
    return `
      <main>
        <section style="padding: 5rem 1rem;">
          <div class="container">
            <div class="text-center mb-8">
              <h1 class="text-4xl font-bold mb-4 text-gradient">Contact Us</h1>
              <p class="text-xl max-w-4xl mx-auto" style="color: hsl(var(--muted-foreground));">
                Ready to transform your healthcare practice? Get in touch with our team to learn more about our AI-powered solutions.
              </p>
            </div>

            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 3rem; max-width: 1000px; margin: 0 auto;">
              
              <!-- Contact Form -->
              <div class="card">
                <h2 class="text-2xl font-bold mb-6">Send us a message</h2>
                <form id="contact-form" class="space-y-6">
                  <div>
                    <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name *</label>
                    <input type="text" id="name" name="name" required 
                           class="contact-input" 
                           style="width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground));">
                  </div>
                  
                  <div>
                    <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email *</label>
                    <input type="email" id="email" name="email" required 
                           class="contact-input"
                           style="width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground));">
                  </div>
                  
                  <div>
                    <label for="phone" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Phone</label>
                    <input type="tel" id="phone" name="phone" 
                           class="contact-input"
                           style="width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground));">
                  </div>
                  
                  <div>
                    <label for="practice-size" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Practice Size</label>
                    <select id="practice-size" name="practice-size" 
                            style="width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground));">
                      <option value="">Select practice size</option>
                      <option value="1-5">1-5 providers</option>
                      <option value="6-20">6-20 providers</option>
                      <option value="21-50">21-50 providers</option>
                      <option value="50+">50+ providers</option>
                    </select>
                  </div>
                  
                  <div>
                    <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message *</label>
                    <textarea id="message" name="message" rows="4" required 
                              style="width: 100%; padding: 0.75rem; border: 1px solid hsl(var(--border)); border-radius: 0.5rem; background: hsl(var(--background)); color: hsl(var(--foreground)); resize: vertical;"></textarea>
                  </div>
                  
                  <button type="submit" class="btn btn-primary btn-glow" style="width: 100%;">
                    Send Message
                  </button>
                </form>
              </div>

              <!-- Contact Information -->
              <div>
                <div class="card mb-6">
                  <h3 class="text-xl font-bold mb-4">Get in Touch</h3>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <span style="margin-right: 1rem; font-size: 1.25rem;">📧</span>
                      <div>
                        <strong>Email</strong><br>
                        <a href="mailto:hello@voimation.info" class="nav-link">hello@voimation.info</a>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <span style="margin-right: 1rem; font-size: 1.25rem;">📞</span>
                      <div>
                        <strong>Phone</strong><br>
                        <a href="tel:+15551234567" class="nav-link">+1 (555) 123-4567</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <h3 class="text-xl font-bold mb-4">Schedule a Demo</h3>
                  <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1rem;">
                    See Voimation in action with a personalized demo tailored to your practice's needs.
                  </p>
                  <a href="https://calendly.com/voimation/30min" class="btn btn-primary btn-glow" style="width: 100%; text-align: center; display: block;">
                    Book Free Consultation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    `;
  }

  getFooter() {
    return `
      <footer style="background-color: hsl(var(--muted)); border-top: 1px solid hsl(var(--border));">
        <div class="container" style="padding: 3rem 1rem;">
          <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            
            <!-- Company Info -->
            <div style="grid-column: span 2;">
              <h3 class="text-2xl font-bold text-gradient mb-4">Voimation</h3>
              <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; max-width: 20rem;">
                Revolutionizing healthcare communication through AI-powered automation. 
                Helping practices streamline operations and enhance patient satisfaction.
              </p>
              
              <div class="space-y-2">
                <p style="color: hsl(var(--muted-foreground));">
                  📧 <a href="mailto:hello@voimation.info" class="nav-link">hello@voimation.info</a>
                </p>
                <p style="color: hsl(var(--muted-foreground));">
                  📞 <a href="tel:+15551234567" class="nav-link">+1 (555) 123-4567</a>
                </p>
              </div>
            </div>

            <!-- Quick Links -->
            <div>
              <h3 class="font-semibold mb-4">Quick Links</h3>
              <ul class="space-y-2" style="color: hsl(var(--muted-foreground));">
                <li><a href="/" data-route="/" class="nav-link">Home</a></li>
                <li><a href="/services" data-route="/services" class="nav-link">Services</a></li>
                <li><a href="/pricing" data-route="/pricing" class="nav-link">Pricing</a></li>
                <li><a href="/contact" data-route="/contact" class="nav-link">Contact</a></li>
              </ul>
            </div>

            <!-- Services -->
            <div>
              <h3 class="font-semibold mb-4">Services</h3>
              <ul class="space-y-2" style="color: hsl(var(--muted-foreground));">
                <li><a href="/services" data-route="/services" class="nav-link">Appointment Reminders</a></li>
                <li><a href="/services" data-route="/services" class="nav-link">Insurance Verification</a></li>
                <li><a href="/services" data-route="/services" class="nav-link">Patient Follow-up</a></li>
                <li><a href="/services" data-route="/services" class="nav-link">Prescription Refills</a></li>
              </ul>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div style="border-top: 1px solid hsl(var(--border)); margin-top: 2rem; padding-top: 2rem; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
            <div style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">
              <p>&copy; ${new Date().getFullYear()} Voimation. All rights reserved.</p>
            </div>
            <div style="display: flex; gap: 1.5rem; font-size: 0.875rem;">
              <a href="#" class="nav-link">Privacy Policy</a>
              <a href="#" class="nav-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  bindEvents() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        // Simple validation
        if (!data.name || !data.email || !data.message) {
          alert('Please fill in all required fields.');
          return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      });
    }
  }
}

// Initialize the router when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Router();
});