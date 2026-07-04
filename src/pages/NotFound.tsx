import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="glass rounded-2xl px-10 py-14 text-center max-w-lg">
        <HeartHandshake className="h-10 w-10 text-brand-gold mx-auto mb-4" />
        <h1 className="text-5xl font-display font-bold mb-3 text-gradient-brand">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page seems to have drifted off the path.
        </p>
        <Button asChild size="lg">
          <a href="/">Return to Seva Pravah Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
