import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Gift, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      toast.success("Welcome! Check your inbox for your exclusive 15% discount code.", {
        icon: "🎉",
        duration: 5000,
      });
      setEmail("");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background pattern-traditional relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold/12 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-crimson/10 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-card via-card/95 to-card rounded-[2rem] p-10 md:p-14 shadow-elegant border-2 border-gold/25 text-center relative overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-6 right-6 text-gold/30 animate-spin-slow">
            <Sparkles className="w-10 h-10" />
          </div>
          <div className="absolute bottom-6 left-6 text-crimson/30 animate-float">
            <Gift className="w-8 h-8" />
          </div>

          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-crimson to-crimson-dark rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-crimson rotate-3 hover:rotate-0 transition-transform duration-500">
            <Mail className="w-10 h-10 text-white" />
          </div>

          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-gold-dark">15% Off</span> Your First Order
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Subscribe to our newsletter for exclusive deals, festive specials, and new product launches delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 px-6 rounded-xl bg-background border-2 border-gold/30 focus:border-crimson focus:ring-4 focus:ring-crimson/15 outline-none transition-all text-foreground placeholder:text-muted-foreground text-lg"
                required
                disabled={isSubmitting}
              />
            </div>
            <Button 
              type="submit" 
              variant="premium" 
              size="xl" 
              className="group text-white h-16 px-8 text-lg rounded-xl shadow-crimson hover:shadow-xl disabled:opacity-70"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Subscribing...
                </span>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-green" />
              <span>Exclusive Discounts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-green" />
              <span>Early Access to New Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent-green" />
              <span>Festival Specials</span>
            </div>
          </div>

          {/* Trust Note */}
          <p className="text-sm text-muted-foreground/70 mt-8">
            Join <span className="font-semibold text-foreground">50,000+</span> happy subscribers. No spam, unsubscribe anytime.
          </p>

          {/* Decorative Border */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-28 bg-gradient-to-r from-transparent to-gold" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-gold/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <div className="h-px w-28 bg-gradient-to-l from-transparent to-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
