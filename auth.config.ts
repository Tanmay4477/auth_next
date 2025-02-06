import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas" 
import bcrypt from "bcrypt"

export default { providers: [
    Credentials({

        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials)

            if (validatedFields.success) {
                const { email, password } = validatedFields.data;
                const user = await getUserByEmail(email);
                if (!user || !user.password) return null;

            }
        }
    })
  ],
} satisfies NextAuthConfig

 