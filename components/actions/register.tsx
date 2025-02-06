"use server"

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcrypt";
import {prisma} from "@/lib/db";

export async function register(values: z.infer<typeof RegisterSchema>) {
    const validateField = RegisterSchema.safeParse(values);
    if (validateField.success === false) {
        return { error: "Invalid fields"}
    }
        
    const {email, password, name} = validateField.data;

    const existingUser = await prisma.user.findUnique(
        {
            where: {
                email,
            }
        }
    );

    if(existingUser) {
        return { error: "Email already taken "};
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    console.log("inside regsiter.tsx file", user);
    // send verification email
    
    return {
        success: "User Created"
    }
} 