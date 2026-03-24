import { Container } from "../../layouts/container";
import { WaitlistForm } from "./components/waitlist-form";

export const WaitList = () => {
  return (
    <div className="max-h-full w-full">
      <Container>
        <div className="flex min-h-screen w-full items-center justify-center px-4 md:px-0">
          <WaitlistForm />
        </div>
      </Container>
    </div>
  );
};
