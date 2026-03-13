import { Cta } from "../../../../components/cta";
import { Container } from "../../../../layouts/container";

export const Problem = () => {
  return (
    <div>
      <Container>
        <div className="title flex w-full items-center justify-center border-r border-b border-l border-gray-100 py-16 text-center">
          <h2 className="text-[2rem] leading-[1.3] font-medium text-black">
            Seu conhecimento é forte. <br /> Sua visibilidade não.
          </h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-r border-b border-l border-gray-100 py-10 text-base leading-[1.2] text-gray-500">
          <div className="row1 mx-auto flex max-w-full items-center">
            <div className="flex h-35 w-50 items-center justify-center border-r border-b border-gray-100 text-center">
              <p className="max-w-38.75">Você sabe muito, mas posta pouco</p>
            </div>
            <div className="flex h-35 w-50 items-center justify-center text-center">
              <p className="max-w-38.75">Quando posta, não tem consistência</p>
            </div>
          </div>
          <div className="row2 mx-auto flex max-w-full items-center">
            <div className="flex h-35 w-50 items-center justify-center text-center">
              <p className="max-w-38.75">Você posta sem estratégia</p>
            </div>
            <div className="flex h-35 w-50 items-center justify-center border-t border-l border-gray-100 text-center">
              <p className="max-w-38.75">Perfil não reflete sua senioridade</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 border-r border-l border-gray-100 py-10">
          <Cta to="/waitlist">Garantir acesso antecipado</Cta>
          <span className="text-sm text-gray-500">
            Vagas limitadas para os primeiros usuários
          </span>
        </div>
      </Container>
    </div>
  );
};
