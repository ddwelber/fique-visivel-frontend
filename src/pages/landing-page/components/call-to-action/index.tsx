import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

export const CallToAction = () => {
  return (
    <section>
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-6 border-r border-b border-l border-gray-100 px-6 py-12 sm:px-10 sm:py-16 md:flex-row md:items-end">
          <h2 className="text-center text-2xl leading-[1.3] font-medium text-black md:text-start md:text-[2rem]">
            Pronto para criar posts <br className="hidden sm:block" /> melhores
            no LinkedIn?
          </h2>

          <Cta to="/waitlist">Garantir acesso antecipado</Cta>
        </div>
      </Container>
    </section>
  );
};
