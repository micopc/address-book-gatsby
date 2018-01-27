import React from 'react'
import Link from 'gatsby-link'

import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'

class IndexPage extends React.Component {
  state = {
    searchTerm: '',
  }

  handleSearchTermChange = (event) => {
    if (event.target.value.length > 5) {
      return
    }
    
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-6 text-center">
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleSearchTermChange}
            />
            <ContactList />
          </div>
          <div className="col col-6 text-center">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage
