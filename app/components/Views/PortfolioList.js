import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.portfolios.map(portfolio => {

        return (
          <div key={portfolio.id} className="data-list-item">
            <div className="details">
              <Link to={'/portfolio/' + portfolio.id}>{portfolio.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deletePortfolio.bind(null, portfolio.id)} className="delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
