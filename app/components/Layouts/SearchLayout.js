import React from 'react';
import SearchFormViewModel from '../ViewModels/SearchFormViewModel';

// "Stateless Functional Component"
export default function(props) {
  return (
    <div className="search">
      <header className="search-header">
        {props.title}
        <SearchFormViewModel searchType={props.searchType} />
      </header>
      <div className="search-results">
        {props.children}
      </div>
      <footer className="search-footer">
        {props.totalResults} Results
      </footer>
    </div>
    );
}
