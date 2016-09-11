import React from 'react';
import { connect } from 'react-redux';
import PortfolioElement from '../Views/PortfolioElement';
import * as PortfolioApi from '../../api/portfolio-api';
import store from '../../store';

const PortfolioElementViewModel = React.createClass({

   componentDidMount: function() {
    let portfolioId = this.props.params.portfolioId;
    PortfolioApi.getPortfolio(portfolioId);
  },

  render: function() {
    return (
      <PortfolioElement    {...this.props.portfolio}      />
    );
  }

});


const mapStateToProps = function(store) {
  return {
    portfolio: store.portfolioState.portfolio
  };
};

export default connect(mapStateToProps)(PortfolioElementViewModel);
