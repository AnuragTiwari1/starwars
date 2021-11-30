import React from 'react'
import './input.css'


export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input onChange={this.props.search} placeholder="Type Here" />
      </div>
    )
  }
}

