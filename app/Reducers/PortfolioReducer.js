import * as types from '../Actions/ActionTypes';
import _ from 'lodash';

const initialState = {
  portfolios: [],
  portfolio: {}
};

//Object.assign({}, state, { portfolios: action.portfolios }); creates new object instead modifying it, best practice 
//Object.assign(state, { portfolios: action.portfolios }); mopifies existing oject

const portfolioReducer = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_PORTFOLIOS_SUCCESS:
      return Object.assign({}, state, { portfolios: action.portfolios });

    case types.GET_PORTFOLIO_SUCCESS:
      return Object.assign({}, state, { portfolio: action.portfolio });

    case types.DELETE_PORTFOLIO_SUCCESS:
      const newportfolios = _.filter(state.portfolios, portfolio => portfolio.id != action.portfolioId);
      return Object.assign({}, state, { portfolios: newportfolios });

  }

  return state;

}

export default portfolioReducer;
