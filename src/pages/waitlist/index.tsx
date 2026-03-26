import { Link } from "react-router-dom";
import { Container } from "../../layouts/container";
import { WaitlistForm } from "./components/waitlist-form";

import logo from "../../assets/logo.svg";

export const WaitList = () => {
  return (
    <div className="max-h-full w-full">
      <Container>
        <div className="flex max-h-full w-full flex-col items-center justify-center gap-4 px-4 py-10 md:px-0 lg:min-h-screen lg:py-0">
          <Link to="/">
            <img src={logo} className="size-8 md:size-10" />
          </Link>
          <WaitlistForm />
        </div>
      </Container>
    </div>
  );
};
