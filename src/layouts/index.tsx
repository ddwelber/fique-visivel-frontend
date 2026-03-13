import { Outlet } from "react-router-dom";
import { Container } from "./container";

export const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
