import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioIds: [],
    sort: "",
    filter: "All"
  }

  componentDidMount = async () => {
    fetch('http://localhost:3000/stocks')
    .then(res=>res.json())
    .then(stocks=> {
      this.setState({stocks})
    })
  }

  addStockToPortfolio = (id) => {
    if (!this.state.portfolioIds.includes(id)) {
      this.setState({
        portfolioIds: [...this.state.portfolioIds, id]
      })
    }
  }

  removeStockFromPortfolio = (id) => {
    let updatedPortfolio = [...this.state.portfolioIds]
    let indexToRemove = this.state.portfolioIds.findIndex((el) => el === id)
    updatedPortfolio.splice(indexToRemove, 1)
    this.setState({
      portfolioIds: updatedPortfolio
    })
  }

  displayPortfolio = () => {
    let myPortfolio = this.state.portfolioIds.map((id) => {
      return this.state.stocks.find((stock) => stock.id === id)
    })
    return myPortfolio
  }

  updateFilter = (val) => {
    this.setState({
      filter: val
    })
  }

  updateSort = (val) => {
    this.setState({
      sort: val
    })
  }

  filterStocks = () => {
    let currentStocks = [...this.state.stocks]
    if (this.state.filter !== "All"){
      let filteredStocks = currentStocks.filter((stock) => {
        return stock.type === this.state.filter
      })
     
      return this.sortStocks(filteredStocks)
    }
    return this.sortStocks(currentStocks)
  }
  
  sortStocks = (arr) => {
    switch (this.state.sort) {
      case "Alphabetically":
        return arr.sort((a,b) => a.name > b.name ? 1 : -1)
      case "Price":
        return arr.sort((a,b) => a.price > b.price ? 1 : -1)
      default:
        return this.state.stocks
    }
  }


  render() {
    return (
      <div>
        <SearchBar updateFilter={this.updateFilter} updateSort={this.updateSort} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">
            
              <StockContainer stocks={this.filterStocks()} addStock={this.addStockToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioArray={this.displayPortfolio()} removeStock={this.removeStockFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
