import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Shield, BarChart3, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border/40 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Smart Doc Checker
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>Features</span>
            </Link>
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Security</span>
            </Link>
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors flex items-center space-x-1">
              <BarChart3 className="w-4 h-4" />
              <span>Pricing</span>
            </Link>
            <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">
              API
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <Link to="/signin">
              <Button variant="ghost" className="text-foreground/70 hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;