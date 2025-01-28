import { redirect } from "next/navigation";
import { Button } from "../ui/button"

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({href, label}: BackButtonProps) => {

    return (
        <form action={async () => {
            "use server"
            redirect(href)}
        }>
            <Button type="submit" variant="link" className="font-normal w-full" size="sm" asChild>
                {label}
            </Button>
        </form>
    )
}