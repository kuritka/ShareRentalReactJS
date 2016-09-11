import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../Layouts/SearchLayout';


const mapStateToProps = function(store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

  if (searchType === 'portfolios') {
    totalResults = store.portfolioState.portfolios.length;
  }
  if (searchType === 'clients') {
    totalResults = store.clientState.clients.length;
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
