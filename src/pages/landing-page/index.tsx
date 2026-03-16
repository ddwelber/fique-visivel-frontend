import { Separator } from "../../components/separator";
import { Benefits } from "./components/benefits";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Problem } from "./components/problem";

export const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Separator />
      <Problem />
      <Separator />
      <HowItWorks />
      <Separator />
      <Benefits />
      <Separator />
    </main>
  );
};
