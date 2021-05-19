import React from 'react'

export const TotalValue = (props) => {

  const total = props.total

  return (
    (total === 0)
      ?
      null
      :
      <div className="bill-container">
        <p data-testid="totalValue" value={total}>Current Total is £{total}</p>
      </div>
  )
}
