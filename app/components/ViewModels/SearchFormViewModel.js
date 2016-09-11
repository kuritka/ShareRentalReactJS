import React from 'react';
import * as PortfolioApi from '../../api/portfolio-api';
import * as ClientApi from '../../api/client-api';
import { LoadSearchLayout } from '../../Actions/SearchLayoutActions';
import SearchForm from '../Views/SearchForm';

const SearchFormContainer = React.createClass({

  search: function(event) {
    event.preventDefault();

    let query = this.refs.child.getQuery();
    if (this.props.searchType === 'portfolios') {
      PortfolioApi.searchPortfolios(query);
    } 
    if (this.props.searchType === 'clients') {
      ClientApi.searchClients(query);
    } 
  },

  render: function() {
    return (
      <SearchForm search={this.search} ref="child" />
    );
  }

});

export default SearchFormContainer;
