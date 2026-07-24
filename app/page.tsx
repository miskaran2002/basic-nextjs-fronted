import Link from "next/link"
import LikeButton from "./ui/LikeButton";



export default function Home() {
  return (
    <div>hello Next js
      Blog page <Link href="/blogs">Go to blogs</Link>

      
      <LikeButton />
    </div>
    
  );
}
