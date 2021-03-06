import React from 'react'

const Stock = (props) => {
  let {stock, stockAction} = props
  return(

  <div>

    <div className="card" onClick={() => stockAction(stock.id)}>
      <div className="card-body">
        <h5 className="card-title">{
            stock.name
          }</h5>
        <p className="card-text">{
            stock.price
          }</p>
      </div>
    </div>


  </div>

  )
}

export default Stock
