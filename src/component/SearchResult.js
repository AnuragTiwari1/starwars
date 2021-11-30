import React from 'react'
import Item from './Item'

export default class SearchResult extends React.Component {

  render() {
    return (
      <div>
        <ul style={{ borderColor: 'red' }}>
          {this.props.data.map((person) => {
            return <Item key={person.url} val={person} searchTerm={this.props.searchTerm} onPress={this.props.onPress} />
          })}
        </ul>
      </div>
    )

  }

}