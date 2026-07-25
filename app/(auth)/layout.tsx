import React from 'react'

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>AuthLayout is only is special only for blogs route  inside the blogs directory
      {children}

    </div>
  )
}

export default AuthLayout