import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PortfolioList from '../Views/PortfolioList';
import * as PortfolioApi from '../../api/portfolio-api';
import store from '../../store';
import { loadSearchLayout } from '../../Actions/SearchLayoutActions';


const PortfolioListViewModel = React.createClass({


  componentDidMount: function() {
    PortfolioApi.getPortfolios();
    store.dispatch(loadSearchLayout('portfolios', 'Portfolio results'));
  },

  render: function() {    
    return (
      <PortfolioList portfolios={this.props.portfolios} deletePortfolio={PortfolioApi.deletePortfolio} />
    );
  }

});


const mapStateToProps = function(store) {
  return {
    portfolios: store.portfolioState.portfolios
  };
};

export default connect(mapStateToProps)(PortfolioListViewModel);

