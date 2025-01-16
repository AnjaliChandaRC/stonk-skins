import Category from "@/components/common/Category";
import CategorySliderOne from "@/components/home/CategorySliderOne";
import CategorySliderThree from "@/components/home/CategorySliderThree";
import CategorySliderTwo from "@/components/home/CategorySliderTwo";
import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import StartTrading from "@/components/home/StartTrading";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Category />
      <Hero />
      <CategorySliderOne />
      <CategorySliderTwo />
      <CategorySliderThree />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <StartTrading />
    </>
  );
}
