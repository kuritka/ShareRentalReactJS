import axios from 'axios';
import store from '../store';
import { getClientsSuccess, getClientSuccess, deleteClientSuccess } from '../Actions/ClientActions';

/**
 * Get portfolios
 */
export function getClients() {
  return axios.get('http://localhost:3001/clients/')
    .then(response =>{
      store.dispatch(getClientsSuccess(response.data));
      return response;
    });
}



export function searchClients(query = '') {
  return axios.get('http://localhost:3001/clients?q='+ query)
    .then(response => {
      store.dispatch(getClientsSuccess(response.data));
      return response;
    });
}

export function getClient(clientId) {
  
  return axios.get('http://localhost:3001/clients/'+clientId)
    .then(response =>{
      store.dispatch(getClientSuccess(response.data));
      return response;
    });
}



export function deleteClient(clientId) {
  return axios.delete('http://localhost:3001/clients/' + clientId)
   .then(response => {
      store.dispatch(deleteClientSuccess(clientId));
      return response;
    });
}


