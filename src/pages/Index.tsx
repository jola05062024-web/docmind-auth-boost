import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-primary-glow">
      <Header />
      
      <div className="flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Smart Doc{" "}
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Checker
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Transform your documents with advanced AI analysis. Extract insights, detect issues, and ensure quality with enterprise-grade security.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground bg-gradient-to-r from-accent to-accent/80 rounded-lg hover:shadow-glow transition-all duration-300"
            >
              Get Started Free
            </a>
            <a
              href="/signin"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground/80 border border-primary-foreground/20 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Sign In
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/60">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
