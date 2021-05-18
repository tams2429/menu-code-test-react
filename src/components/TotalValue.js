import React from 'react'

export const TotalValue = (props) => {

  const total = props.total

  return (
    (total === 0)
      ?
      null
      :
      <div className="bill-container">
        <p>Current Total is £{total}</p>
      </div>
  )
}
