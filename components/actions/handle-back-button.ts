"use server"

import { redirect } from "next/navigation";

export async function handleBackButton(formData: FormData) {
    console.log("something")
    const href = formData.get("href") as string;
    redirect(href);
}