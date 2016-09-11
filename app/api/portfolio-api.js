import axios from 'axios';
import store from '../store';
import { getPortfoliosSuccess, deletePortfolioSuccess, getPortfolioSuccess } from '../Actions/PortfolioActions';

/**
 * Get portfolios
 */
export function getPortfolios() {
  return axios.get('http://localhost:3001/portfolios')
    .then(response =>{
      store.dispatch(getPortfoliosSuccess(response.data));
      return response;
    });
}


export function getPortfolio(portfolioId) {
  
  return axios.get('http://localhost:3001/portfolios/'+portfolioId)
    .then(response =>{
      store.dispatch(getPortfolioSuccess(response.data));
      return response;
    });
}


export function searchPortfolios(query = '') {
  return axios.get('http://localhost:3001/portfolios?q='+ query)
    .then(response => {
      store.dispatch(getPortfoliosSuccess(response.data));
      return response;
    });
}


/**
 * Delete a portfolio
 */
export function deletePortfolio(portfolioId) {
  return axios.delete('http://localhost:3001/portfolios/' + portfolioId)
   .then(response => {
      store.dispatch(deletePortfolioSuccess(portfolioId));
      return response;
    });
}
