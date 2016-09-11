import * as types from '../Actions/ActionTypes';

export function loadSearchLayout(searchType, title) {
  return {
    type: types.LOAD_SEARCH_LAYOUT,
    searchType: searchType,
    title: title
  };
}
