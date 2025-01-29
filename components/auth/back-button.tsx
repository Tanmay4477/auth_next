import { Button } from "../ui/button";
import { handleBackButton } from "../actions/handle-back-button";

interface BackButtonProps {
    href: string;
    label: string;
}


export const BackButton = ({ href, label }: BackButtonProps) => {

    return (
        <form action={handleBackButton} className="w-full flex items-center justify-center">
            <input type="hidden" name="href" value={href} />
            <Button
                type="submit"
                variant="link"
                className="font-normal text-sm"
                size="sm"
            >{label}</Button>
        </form>
    );
};
