import * as types from '../Actions/ActionTypes';

const initialState = {
  searchType: '',
  title: ''
};

const searchLayoutReducer = function(state = initialState, action) {

  switch(action.type) {
  
    case types.LOAD_SEARCH_LAYOUT:    
      return Object.assign({}, state, {
        searchType: action.searchType,
        title: action.title
      });

  }

  return state;
}

export default searchLayoutReducer;
