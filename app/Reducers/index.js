import { combineReducers } from 'redux';

// Reducers
import PortfolioReducer from './PortfolioReducer';
import ClientReducer from './ClientReducer';
import SearchLayoutReducer from './SearchLayoutReducer';


// Combine Reducers
var Reducers = combineReducers({
    portfolioState: PortfolioReducer,
    clientState: ClientReducer,
    searchLayoutState: SearchLayoutReducer
});

export default Reducers;
