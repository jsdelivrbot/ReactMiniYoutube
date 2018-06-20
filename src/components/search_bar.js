
import React, { Component } from 'react'  // { Component } == React.Component

class SearchBar extends Component{

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
      return (
        <div className="search-bar">
          <input
            value = {this.state.term}
            onChange = {event => this.setState({term: event.target.value})}/>
        </div>
      )
  }
}

export default SearchBar; // other components can access this one
