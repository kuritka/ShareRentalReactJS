import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
// Layouts
import MainLayout from './components/Layouts/MainLayout';


import Home from './components/Home';

import PortfolioListViewModel from './components/ViewModels/PortfolioListViewModel' 
import PortfolioElementViewModel from  './components/ViewModels/PortfolioElementViewModel' 
import ClientListViewModel from './components/ViewModels/ClientListViewModel' 
import ClientElementViewModel from  './components/ViewModels/ClientElementViewModel' 
import SearchLayoutViewModel from './components/ViewModels/SearchLayoutViewModel'

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
           <Route path="/" component={Home} />

           <Route path="portfolio" >
                <Route component={SearchLayoutViewModel}>
                    <IndexRoute component={PortfolioListViewModel} />
                </Route>
                <Route path=":portfolioId" component={PortfolioElementViewModel} />
           </Route>

            <Route path="clients" >
                <Route component={SearchLayoutViewModel}>
                    <IndexRoute component={ClientListViewModel} />
                </Route>
                <Route path=":clientId" component={ClientElementViewModel} />
           </Route>

        </Route>
    </Router>
);