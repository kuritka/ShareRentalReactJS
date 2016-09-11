import * as types from '../Actions/ActionTypes';

export function getPortfoliosSuccess(portfolios) {
  return {
    type: types.GET_PORTFOLIOS_SUCCESS,
    portfolios
  };
}


export function getPortfolioSuccess(portfolio) {
  return {
    type: types.GET_PORTFOLIO_SUCCESS,
    portfolio
  };
}

export function deletePortfolioSuccess(portfolioId) {
  return {
    type: types.DELETE_PORTFOLIO_SUCCESS,
    portfolioId
  };
}
