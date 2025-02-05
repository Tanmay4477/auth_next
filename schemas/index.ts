import * as z from "zod";
import bcrypt from "bcrypt";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum six characters is needed"
    }),
    name: z.string().min(1, {
        message: "Name is required",
    })
})

