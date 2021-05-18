import React from 'react'

export const TotalValue = (props) => {

  const total = props.total

  return (
    <div className="bill-container">
      <p>Current Total is {total}</p>
    </div>
  )
}
