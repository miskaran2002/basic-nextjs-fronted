import React from 'react'

const BlogsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>BlogsLayout is only is special only for blogs route  inside the blogs directory
      {children}

    </div>
  )
}

export default BlogsLayout