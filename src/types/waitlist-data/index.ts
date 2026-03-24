import { z } from "zod";

const requiredEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.enum(values, {
    message: "Selecione uma opção",
  });

export const waitlistSchema = z.object({
  fullName: z
    .string()
    .min(2, "Digite seu nome completo")
    .refine((val) => val.trim().includes(" "), {
      message: "Digite nome e sobrenome",
    }),

  email: z.string().min(1, "Digite seu e-mail").email("E-mail inválido"),

  profile: requiredEnum([
    "empreendedor",
    "clt",
    "freelancer",
    "criador",
    "outro",
  ] as const),

  problem: requiredEnum([
    "nao_sei_postar",
    "falta_tempo",
    "sem_consistencia",
    "sem_resultado",
    "nao_posto",
  ] as const),

  frequency: requiredEnum([
    "nunca",
    "mensal",
    "semanal",
    "2_3_semana",
    "diario",
  ] as const),

  pricing: requiredEnum([
    "nao_pagaria",
    "ate_50",
    "50_150",
    "150_300",
    "300_plus",
  ] as const),

  goal: z.string().min(1, "Conta pra gente o que mudaria pra você"),
});

export type WaitlistData = z.infer<typeof waitlistSchema>;
