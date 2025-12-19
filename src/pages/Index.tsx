import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import SpecialsSection from "@/components/SpecialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <FeaturesSection />
      <SpecialsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default Index;
