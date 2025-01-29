"use server"

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export async function login(values: z.infer<typeof RegisterSchema>) {
    const validateField = RegisterSchema.safeParse(values);
    if (!validateField) {
        return { error: "Invalid fields"}
    }
    
    return {
        success: "Email sent"
    }
} 