import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/landing-page";
import { Layout } from "../layouts";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};
