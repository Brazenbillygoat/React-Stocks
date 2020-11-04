import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  
  
  render() {
    const {stocks, addStock} = this.props
    return (
      <div>
        <h2>Stocks</h2>
        {stocks.map((stock) => {
          return <Stock stock={stock} stockAction={addStock} key={stock.id} />
        })
          
        }
      </div>
    );
  }

}

export default StockContainer;
