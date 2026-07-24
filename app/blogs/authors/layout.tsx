import React from 'react'

const AuthorsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>AuthorsLayout is only is special only for blogs route  inside the Authors directory
      {children}

    </div>
  )
}

export default AuthorsLayout