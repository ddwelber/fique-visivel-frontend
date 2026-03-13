import { Container } from "../../layouts/container";

export const Separator = () => {
  return (
    <div className="h-10 w-full border-t border-b border-gray-100">
      <Container className="flex items-center">
        <div className="h-full w-full border-r border-l border-gray-100"></div>
        <div className="h-full w-full border-r border-gray-100"></div>
      </Container>
    </div>
  );
};
