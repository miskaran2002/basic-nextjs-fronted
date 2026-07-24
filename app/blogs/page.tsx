import React from 'react'

const BlogsPage =async () => {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await post.json();

    console.log (data);



  return (
    <div> Blogs Page</div>
  )
}

export default  BlogsPage