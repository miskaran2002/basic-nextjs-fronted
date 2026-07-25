import React from 'react'

const MyServerComponent = async() => {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await post.json();

    console.log (data);

  return (
    <div>MyServerComponent</div>
  )
}

export default MyServerComponent