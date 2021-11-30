import React from 'react'
import PropTypes from 'prop-types';

import './Searchbar.css'

export default class Item extends React.Component {
  render() {
    return (
      <li style={{ borderColor: 'red', cursor: 'pointer' }} onClick={() => this.props.onPress(this.props.val)}>
        <p dangerouslySetInnerHTML={{ __html: this.props.val.name.toLowerCase().replace(this.props.searchTerm, `<mark>${this.props.searchTerm}</mark>`) }}></p>
      </li>
    )
  }

}


Item.propTypes = {
  val: PropTypes.shape({
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye: PropTypes.string,
    birth_year: PropTypes.string,
    gender: PropTypes.string
  }).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}