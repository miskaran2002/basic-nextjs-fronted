import { cacheLife, revalidateTag } from "next/cache";

 export const getBlogs = async () => {
    
    const post = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        cache: 'force-cache',
        next: {
            revalidate: 60 * 60 * 24,
            tags: ['posts'],
        },
        
    });

    const data = await post.json();

    console.log(data);
    return data;

}

const renewBlogCache = async () => {
    revalidateTag("posts",{
        expire: 60 * 60 * 24 * 7,

    })
    
}

 