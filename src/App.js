import React from 'react'
import SearchResult from "./component/SearchResult";
import SearchBar from "./component/SearchBar"
import { BASE_URL, MIN_CHAR_LENGTH } from './constant';
import { Person } from './component/Person';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      person: null
    }
  }

  searchData(e) {
    this.setState({ searchTerm: e.target.value, person: null })
    if (e.target.value.length >= MIN_CHAR_LENGTH) {
      this.getNameList(e.target.value)
    }
  }

  getNameList(name) {
    console.log(name, 'this is e');
    this.setState({ data: [] })
    fetch(`${BASE_URL}/?search=${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data.results })
      })
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        <SearchBar search={this.searchData.bind(this)} />
        {(this.state.data.length > 0) ? <SearchResult data={this.state.data} searchTerm={this.state.searchTerm} onPress={(person) => this.setState({ person, data: [] })} /> : null}
        {this.state.person && <Person {...this.state.person} />}
      </div>
    )
  }
}
export default App;