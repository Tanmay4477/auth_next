import { Button } from "../ui/button";
import { redirect } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactNode;
    mode? : "modal" | "redirect";
    asChild? : boolean
}

export const LoginButton = ( { mode, children, asChild }: LoginButtonProps ) => {

    const handleClick = async () => {
        "use server"
        console.log("Button clicked on server");
        redirect("/auth/login")
    }
    

    if (mode === "modal") {
        return (
            <span>Modal appears</span>
        )
    }

    return (
        <form action={handleClick}>
            <Button type="submit" variant="secondary" size="lg" className="cursor-pointer">{children}</Button>
        </form>
    )
}