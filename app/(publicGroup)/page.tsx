import { Button } from "@/components/ui/button";
import { getMe } from "../service/getMe";




export default async function HomePage() {

  const user =await getMe()
  console.log(user)
  return (
    <div>
      Hello Nextjs!!!
      <Button
      size={"lg"}
     variant={"destructive"}
      >
      Click me
      </Button>

    </div>

    
    
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    
  );
}
