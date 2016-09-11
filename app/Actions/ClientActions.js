import * as types from '../Actions/ActionTypes';

export function getClientsSuccess(clients) {
  return {
    type: types.GET_CLIENTS_SUCCESS,
    clients
  };
}


export function getClientSuccess(client) {
  return {
    type: types.GET_CLIENT_SUCCESS,
    client
  };
}

export function deleteClientSuccess(clientId) {
  return {
    type: types.DELETE_CLIENT_SUCCESS,
    clientId
  };
}
