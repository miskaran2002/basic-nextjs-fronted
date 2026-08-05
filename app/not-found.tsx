import Link from "next/link"
import { FileQuestionIcon, ArrowLeftIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="space-y-6 max-w-md">
        
        
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted/50 border border-border">
          <FileQuestionIcon className="h-12 w-12 text-primary" aria-hidden="true" />
        </div>

        
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Oops! The page you are looking for doesn't exist or has been moved to another URL. 
          </p>
        </div>

        
        <div>
          <Button asChild className="gap-2 shadow-sm">
            <Link href="/">
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

      </div>
    </div>
  )
}