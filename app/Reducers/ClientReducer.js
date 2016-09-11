import * as types from '../Actions/ActionTypes';
import _ from 'lodash';

const initialState = {
  clients: [],
  client: {}
};


const clientReducer = function(state = initialState, action) {
  switch(action.type) {

    case types.GET_CLIENTS_SUCCESS:
      return Object.assign({}, state, { clients: action.clients });

    case types.GET_CLIENT_SUCCESS:
      return Object.assign({}, state, { client: action.client });

    case types.DELETE_CLIENT_SUCCESS:
      const newClients = _.filter(state.clients, client => client.id != action.clientId);
      return Object.assign({}, state, { clients: newClients });

  }

  return state;

}

export default clientReducer;
