import { Button } from "../ui/button";
import { Cat, Mail } from 'lucide-react';
import { socialButton } from "../actions/social";


export const Social = () => {

    return (
        <form className="flex items-center w-full gap-x-2" action={socialButton}>
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