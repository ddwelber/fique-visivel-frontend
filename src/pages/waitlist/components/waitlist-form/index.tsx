import { useState } from "react";
import { useWaitlistForm } from "../../../../hooks/use-waitlist-form";
import type { WaitlistData } from "../../../../types/waitlist-data";

import { CheckCircle2, Loader2, XCircle } from "lucide-react";
import { trackEvent } from "../../../../lib/analytics";

export function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useWaitlistForm();

  const onSubmit = async (data: WaitlistData) => {
    try {
      setLoading(true);

      await fetch(import.meta.env.VITE_SHEETS_API_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
      });

      setStatus("success");
      trackEvent("form_submit");
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNextStep1 = async () => {
    const isValid = await trigger(["fullName", "email", "profile"]);

    if (isValid) {
      setStep(2);

      trackEvent("form_step_next", {
        from: 1,
        to: 2,
      });
    } else {
      trackEvent("form_step_error", {
        step: 1,
      });
    }
  };

  const handleNextStep2 = async () => {
    const isValid = await trigger(["problem", "frequency"]);

    if (isValid) {
      setStep(3);

      trackEvent("form_step_next", {
        from: 2,
        to: 3,
      });
    } else {
      trackEvent("form_step_error", {
        step: 2,
      });
    }
  };

  if (status === "success") {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-md border border-gray-100 p-8 text-center">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <CheckCircle2 size={20} className="text-green" /> Você está na lista
        </h2>
        <p className="text-gray-500">
          Assim que abrirmos, você será avisado primeiro.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex w-full max-w-md flex-col items-center gap-4 rounded-md border border-gray-100 p-8 text-center">
        <h2 className="text-xl font-semibold">
          <XCircle size={20} className="text-red" /> Erro ao enviar
        </h2>
        <p className="text-gray-500">Tente novamente em alguns instantes.</p>

        <button
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-md bg-black px-4 py-3 text-white"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-6 rounded-md border border-gray-100 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">
          Etapa {step} de {totalSteps}
        </p>
        <div className="h-1 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-black">Vamos começar</h3>
            <p className="text-base text-gray-500">
              Queremos entender seu momento profissional
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Seu nome *</label>

            <input
              {...register("fullName")}
              placeholder="Ex: João Silva"
              className={`rounded-md border p-3 ${
                errors.fullName
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            />

            {errors.fullName && (
              <span className="text-red text-sm">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Seu melhor e-mail *</label>
            <input
              {...register("email", {
                required: "Digite seu email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email inválido",
                },
              })}
              placeholder="seu@email.com"
              className={`rounded-md border p-3 transition outline-none ${
                errors.email
                  ? "border-red focus:border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            />
            {errors.email && (
              <span className="text-red text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Como você se define hoje? *
            </label>
            <select
              {...register("profile", {
                required: "Selecione uma opção",
              })}
              className={`rounded-md border p-3 outline-none ${
                errors.profile
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            >
              <option value="">Selecione</option>
              <option value="empreendedor">Empreendedor</option>
              <option value="clt">CLT</option>
              <option value="freelancer">Freelancer</option>
              <option value="criador">Criador</option>
              <option value="outro">Outro</option>
            </select>

            {errors.profile && (
              <span className="text-red text-sm">{errors.profile.message}</span>
            )}
          </div>

          <button
            type="button"
            onClick={handleNextStep1}
            className="mt-2 cursor-pointer rounded-md bg-black px-4 py-3 text-base font-medium text-white transition-colors hover:bg-black/85"
          >
            Continuar
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-black">
              Seu momento no LinkedIn
            </h3>
            <p className="text-base text-gray-500">
              Isso nos ajuda a montar sua estratégia de conteúdo
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              O que mais te trava hoje para postar? *
            </label>
            <select
              {...register("problem", {
                required: "Selecione uma opção",
              })}
              className={`rounded-md border p-3 outline-none ${
                errors.problem
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            >
              <option value="">Selecione</option>
              <option value="nao_sei_postar">Não sei o que postar</option>
              <option value="falta_tempo">Falta tempo</option>
              <option value="sem_consistencia">Sem consistência</option>
              <option value="sem_resultado">Sem resultado</option>
              <option value="nao_posto">Não posto</option>
            </select>

            {errors.problem && (
              <span className="text-red text-sm">{errors.problem.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Com que frequência você posta hoje? *
            </label>
            <select
              {...register("frequency", {
                required: "Selecione uma opção",
              })}
              className={`rounded-md border p-3 outline-none ${
                errors.frequency
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            >
              <option value="">Selecione</option>
              <option value="nunca">Nunca</option>
              <option value="mensal">Mensal</option>
              <option value="semanal">Semanal</option>
              <option value="2_3_semana">2-3x semana</option>
              <option value="diario">Diário</option>
            </select>

            {errors.frequency && (
              <span className="text-red text-sm">
                {errors.frequency.message}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-1/3 cursor-pointer rounded-md border border-gray-100 py-3 text-sm"
            >
              Voltar
            </button>

            <button
              type="button"
              onClick={handleNextStep2}
              className="w-2/3 cursor-pointer rounded-md bg-black py-3 text-sm text-white transition-colors hover:bg-black/85"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium text-black">
              Definindo o valor disso pra você
            </h3>
            <p className="text-base text-gray-500">
              Se você conseguisse se posicionar melhor e transformar seus posts
              em oportunidades, qual seria o valor disso hoje?
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Quanto você pagaria por algo que te ajuda a gerar oportunidades
              com seus posts? *
            </label>
            <select
              {...register("pricing", {
                required: "Selecione uma opção",
              })}
              className={`rounded-md border p-3 outline-none ${
                errors.pricing
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            >
              <option value="">Selecione</option>
              <option value="nao_pagaria">Não pagaria</option>
              <option value="ate_50">Até R$50</option>
              <option value="50_150">R$50–150</option>
              <option value="150_300">R$150–300</option>
              <option value="300_plus">R$300+</option>
            </select>

            {errors.pricing && (
              <span className="text-red text-sm">{errors.pricing.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Se você se posicionasse melhor, o que mudaria? *
            </label>
            <textarea
              {...register("goal", {
                required: "Conta pra gente o que mudaria pra você",
              })}
              placeholder="Ex: mais oportunidades, mais autoridade, mais clientes..."
              className={`min-h-25 rounded-md border p-3 outline-none ${
                errors.goal
                  ? "border-red"
                  : "border-gray-100 focus:border-black"
              }`}
            />

            {errors.goal && (
              <span className="text-red text-sm">{errors.goal.message}</span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-1/3 cursor-pointer rounded-md border border-gray-100 py-3 text-sm"
            >
              Voltar
            </button>

            <button
              type="submit"
              disabled={loading}
              className={`flex w-2/3 items-center justify-center gap-2 rounded-md py-3 text-sm text-white transition-colors ${
                loading
                  ? "cursor-not-allowed bg-black/50"
                  : "cursor-pointer bg-black hover:bg-black/85"
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Carregando
                </>
              ) : (
                "Entrar na waitlist"
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
