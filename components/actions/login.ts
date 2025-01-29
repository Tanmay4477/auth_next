"use server"

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
    const validateField = LoginSchema.safeParse(values);
    if (!validateField) {
        return { error: "Invalid fields"}
    }
    
    return {
        success: "Email sent"
    }
} 