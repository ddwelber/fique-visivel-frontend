import { Container } from "../../../../layouts/container";

export const Problem = () => {
  return (
    <section>
      <Container>
        <div className="flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-12 text-center sm:py-16">
          <h2 className="text-2xl leading-[1.3] font-medium text-black md:text-[2rem]">
            Seu conhecimento é forte. <br /> Sua visibilidade não.
          </h2>
        </div>

        <div className="max-h-full w-full border-r border-l border-gray-100">
          <div className="mx-auto grid w-full grid-cols-2 px-4 py-6 text-base leading-[1.3] text-gray-500 sm:py-10 md:w-1/2 md:px-0">
            <div className="flex h-28 w-full items-center justify-center border-r border-b border-gray-100 p-2 text-center sm:border-r">
              <p>
                Você sabe muito, <br className="hidden md:block" /> mas posta
                pouco
              </p>
            </div>
            <div className="flex h-28 w-full items-center justify-center border-b border-gray-100 p-2 text-center sm:border-b-0">
              <p>
                Quando posta, <br className="hidden md:block" /> não tem
                consistência
              </p>
            </div>
            <div className="flex h-28 w-full items-center justify-center border-r border-gray-100 p-2 text-center sm:border-b-0 md:border-r-0">
              <p>
                Você posta <br className="hidden md:block" /> sem estratégia
              </p>
            </div>
            <div className="flex h-28 w-full items-center justify-center p-2 text-center sm:border-t sm:border-l sm:border-gray-100 md:border-b-0">
              <p>
                Perfil não reflete <br className="hidden md:block" /> sua
                senioridade
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
