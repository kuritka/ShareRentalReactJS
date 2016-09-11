import React from 'react';
import { connect } from 'react-redux';
import ClientElement from '../Views/ClientElement';
import * as ClientApi from '../../api/client-api';
import store from '../../store';

const ClientElementViewModel = React.createClass({

   componentDidMount: function() {
    let clientId = this.props.params.clientId;
    ClientApi.getClient(clientId);
  },

  render: function() {
    return (
      <ClientElement    {...this.props.client}      />
    );
  }

});


const mapStateToProps = function(store) {
  return {
    client: store.clientState.client
  };
};

export default connect(mapStateToProps)(ClientElementViewModel);
