import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

export const CallToAction = () => {
  return (
    <section>
      <Container>
        <div className="title flex w-full items-end justify-between border-r border-b border-l border-gray-100 px-10 py-16">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Pronto para criar posts <br /> melhores no LinkedIn?
          </h2>
          <Cta to="/waitlist">Garantir acesso antecipado</Cta>
        </div>
      </Container>
    </section>
  );
};
