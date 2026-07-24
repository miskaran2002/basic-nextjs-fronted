"use client";

import React from 'react'


const DislikeButton = ({blogSlug}: {blogSlug: string}) => {
  return (
    <button onClick={()=>{
        console.log("dislike button clicked for blog:",blogSlug)
    }}>Dislike{blogSlug}</button>
  )
}

export default DislikeButton