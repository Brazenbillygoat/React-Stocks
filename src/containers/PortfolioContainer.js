import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {

    const {portfolioArray, removeStock} = this.props

    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioArray.map((stock) => {
              return <Stock stock={stock} stockAction={removeStock} key={stock.id} />
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
