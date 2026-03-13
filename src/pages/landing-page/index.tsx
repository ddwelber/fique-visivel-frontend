import { Separator } from "../../components/separator";
import { Hero } from "./components/hero";
import { Problem } from "./components/problem";

export const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Separator />
      <Problem />
      <Separator />
    </main>
  );
};
