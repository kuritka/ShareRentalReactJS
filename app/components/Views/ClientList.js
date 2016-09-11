import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.clients.map(client => {

        return (
          <div key={client.id} className="data-list-item">
            <div className="details">
              <Link to={'/clients/' + client.id}>{client.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deleteClient.bind(null, client.id)} className="delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
