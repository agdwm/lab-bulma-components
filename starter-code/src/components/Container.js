import React from 'react';

export const Container = (props) => {
  const { children } = props

  return (
    <div className="container">
      {children}
    </div>
  )
}
