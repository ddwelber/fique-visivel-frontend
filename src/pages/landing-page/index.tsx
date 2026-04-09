import { useEffect, useRef } from "react";
import { trackEvent } from "../../lib/analytics";
import { Separator } from "../../components/separator";
import { Benefits } from "./components/benefits";
import { CallToAction } from "./components/call-to-action";
import { EarlyAccess } from "./components/early-access";
import { Faq } from "./components/faq";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { HowItWorksInPractice } from "./components/how-it-works-in-practice";
import { Problem } from "./components/problem";
import { SocialProof } from "./components/social-proof";
import { Testimonials } from "./components/testimonials";

export const LandingPage = () => {
  const tracked = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const percent = Math.round((scroll / height) * 100);

      if (percent >= 25 && !tracked.current[25]) {
        tracked.current[25] = true;
        trackEvent("scroll_25");
      }

      if (percent >= 50 && !tracked.current[50]) {
        tracked.current[50] = true;
        trackEvent("scroll_50");
      }

      if (percent >= 75 && !tracked.current[75]) {
        tracked.current[75] = true;
        trackEvent("scroll_75");
      }

      if (percent >= 100 && !tracked.current[100]) {
        tracked.current[100] = true;
        trackEvent("scroll_100");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Hero />
      <Separator />
      <SocialProof />
      <Separator />
      <Problem />
      <Separator />
      <HowItWorksInPractice />
      <Separator />
      <HowItWorks />
      <Separator />
      <Benefits />
      <Separator />
      <Testimonials />
      <Separator />
      <Faq />
      <Separator />
      <EarlyAccess />
      <Separator />
      <CallToAction />
    </main>
  );
};
