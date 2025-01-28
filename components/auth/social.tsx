import { Button } from "../ui/button";
import { Cat, Mail } from 'lucide-react';


export const Social = () => {

    const handleClick = async () => {
        "use server"
        console.log("Button cliccked")
    };

    return (
        <form className="flex items-center w-full gap-x-2" action={handleClick}>
            <Button 
              size="lg"
              className="w-full"
              variant="outline"
              type="submit"
            >
              <Mail className="h-5 w-5"/>
            </Button>
            <Button 
              size="lg"
              className="w-full"
              variant="outline"
              type="submit"
            >
              <Cat className="h-5 w-5"/>
            </Button>
        </form>
    )
}