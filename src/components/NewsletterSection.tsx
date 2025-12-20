import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to Sweet Splendor! Check your inbox for a special 15% off code.");
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-background pattern-traditional relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-card via-card/80 to-card rounded-3xl p-12 shadow-elegant border-ornate text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold">
            <Mail className="w-10 h-10 text-foreground" />
          </div>

          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get <span className="text-gradient-gold">15% Off</span> Your First Order
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive deals, festive specials, and new product launches delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 px-6 rounded-xl bg-background border-2 border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            <Button type="submit" variant="premium" size="xl" className="group text-white">
              Subscribe
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground mt-6">
            Join 50,000+ subscribers. No spam, unsubscribe anytime.
          </p>

          {/* Decorative Border */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gold/50" />
              ))}
            </div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
