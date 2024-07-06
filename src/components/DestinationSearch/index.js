import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const filteredList = destinationsList.filter(eachElement =>
      eachElement.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className=""
            value={searchInput}
            onChange={this.onSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul type="none" className="element-container">
          {filteredList.map(eachElement => (
            <DestinationItem
              key={eachElement.id}
              destinationDetails={eachElement}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
