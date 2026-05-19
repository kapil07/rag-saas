import { z } from "zod"

export const baseRegisterSchema = z.object({
    name: z.string().trim(),
    email: z.email().trim(),
    password: z.string(),
    tenantName: z.string().trim(),
})

export const baseLoginSchema = z.object({
    email: z.email().trim(),
    password: z.string().trim()
})




