import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const legalItems = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b border-space-gray/30 backdrop-blur-xl bg-deep-space/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/43e0bbca-22a9-4160-8168-64144d5b951d.png" 
                alt="Voimation Logo" 
                className="h-16 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-electric-blue"
                      : "text-foreground hover:text-electric-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="outline" className="btn-glow">
                <a href="mailto:support@voimation.com">Get Started</a>
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-foreground" />
              ) : (
                <Menu className="h-8 w-8 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-space-gray/30">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-2 transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-electric-blue"
                        : "text-foreground hover:text-electric-blue"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button asChild variant="outline" className="btn-glow w-full">
                    <a href="mailto:support@voimation.com">Get Started</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-deep-space border-t border-space-gray/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/43e0bbca-22a9-4160-8168-64144d5b951d.png" 
                  alt="Voimation Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-gradient">Voimation</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                AI-powered call automation that helps healthcare providers stay connected 
                with patients 24/7. Never miss a patient again.
              </p>
              <Button asChild className="btn-glow">
                <a href="mailto:support@voimation.com">Start Automating Today</a>
              </Button>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-muted-foreground hover:text-electric-blue transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2">
                {legalItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className="text-muted-foreground hover:text-electric-blue transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-space-gray/30 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Voimation. All rights reserved. | 
              <a href="mailto:support@voimation.com" className="hover:text-electric-blue ml-1">
                support@voimation.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;