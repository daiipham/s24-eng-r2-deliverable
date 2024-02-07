import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { type Database } from "@/lib/schema";


type Profile = Database["public"]["Tables"]["profiles"]["Row"];



export default function ProfilesDetailsDialog({ profiles }: { profiles: Profile }) {






  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-3 w-full">Learn More</Button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{profiles.display_name}</DialogTitle>
           <DialogDescription>
           {profiles.email}
           </DialogDescription>

           <DialogDescription>
            {profiles.biography}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
