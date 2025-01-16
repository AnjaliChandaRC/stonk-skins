import Header from "@/components/common/Header";
import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import StartTrading from "@/components/home/StartTrading";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Faqs />
      <StartTrading />
    </>
  );
}
