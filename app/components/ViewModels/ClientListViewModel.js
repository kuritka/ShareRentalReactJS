import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ClientList from '../Views/ClientList';
import * as ClientApi from '../../api/client-api';
import store from '../../store';
import { loadSearchLayout } from '../../Actions/SearchLayoutActions';


const ClientListViewModel = React.createClass({


  componentDidMount: function() {
    ClientApi.getClients();
    store.dispatch(loadSearchLayout('clients', 'Client results'));
  },

  render: function() {    
    return (
      <ClientList clients={this.props.clients} deleteClient={ClientApi.deleteClient} />
    );
  }

});


const mapStateToProps = function(store) {
  return {
    clients: store.clientState.clients
  };
};

export default connect(mapStateToProps)(ClientListViewModel);

