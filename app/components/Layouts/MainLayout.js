import React from 'react';
import { Link } from 'react-router';

const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="navigation row">
          <ul>
            <li><Link to="/" activeClassName="active">Home</Link></li>
             <li><Link to="/clients" activeClassName="active">Clients</Link></li>
             <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
             <li><Link to="/sent" activeClassName="active">Sent</Link></li>
             <li><Link to="/log" activeClassName="active">Log</Link></li>
             <li><Link to="/about" activeClassName="active">About</Link></li>
          </ul>
        </div>
        <main>
           {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;