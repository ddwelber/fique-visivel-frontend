import { z } from "zod";

const onlyLettersRegex = /^[A-Za-zÀ-ÿ\s]+$/;
const safeTextRegex = /^[^<>$]*$/;

const isMalicious = (val: string) => /<|>|javascript:|on\w+=/i.test(val);

const sanitize = (val: string) =>
  val.replace(/<script.*?>.*?<\/script>/gi, "").trim();

const secureString = ({
  min,
  max,
  fieldName,
}: {
  min: number;
  max: number;
  fieldName: string;
}) =>
  z
    .string()
    .min(min, {
      message: `${fieldName} deve ter no mínimo ${min} caracteres`,
    })
    .max(max, {
      message: `${fieldName} muito longo (máx. ${max} caracteres)`,
    })
    .superRefine((val, ctx) => {
      if (isMalicious(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Conteúdo inválido detectado",
        });
      }
    })
    .transform((val) => sanitize(val));

const requiredEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z.enum(values, {
    message: "Selecione uma opção válida",
  });

export const waitlistSchema = z.object({
  fullName: secureString({
    min: 5,
    max: 100,
    fieldName: "Nome completo",
  })
    .refine((val) => val.includes(" "), {
      message: "Digite nome e sobrenome",
    })
    .refine((val) => onlyLettersRegex.test(val), {
      message: "Nome deve conter apenas letras",
    }),

  email: z
    .string()
    .min(5, { message: "E-mail muito curto" })
    .max(100, { message: "E-mail muito longo" })
    .email({ message: "E-mail inválido" })
    .superRefine((val, ctx) => {
      if (isMalicious(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Entrada inválida",
        });
      }
    })
    .transform((val) => sanitize(val)),

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

  goal: secureString({
    min: 10,
    max: 300,
    fieldName: "Objetivo",
  }).refine((val) => safeTextRegex.test(val), {
    message: "Caracteres inválidos no texto",
  }),
});

export type WaitlistData = z.infer<typeof waitlistSchema>;
