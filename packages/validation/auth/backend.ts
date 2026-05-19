import { z } from "zod";
import { baseRegisterSchema } from "./base";


export const backendRegisterSchema = baseRegisterSchema.extend({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long"),

  email: z
    .email("Email is required and must be a valid email")
    .trim(),

  password: z.string()

});
