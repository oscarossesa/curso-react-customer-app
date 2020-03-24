import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {

   componentDidMount() {
      this.props.fetchCustomers();
   }


   handleAddNew = () => {
      this.props.history.push("/customers/new");
   }

   renderBody = (customers) => (
      <>
         <CustomerList
            customers={customers}
            urlPath={"customers/"}>
         </CustomerList>
         <CustomersActions>
            <button onClick={this.handleAddNew}>Nuevo Cliente</button>
         </CustomersActions>
      </>
   )

   render() {
      return (
         <div>
            <AppFrame
               header={"Listado de Clientes"}
               body={this.renderBody(this.props.customers)}>
            </AppFrame>
         </div>
      )
   }
}

CustomersContainer.propTypes = {
   fetchCustomers: PropTypes.func.isRequired,
   customers: PropTypes.array.isRequired,
};


CustomersContainer.defaultProps = {
   customers: []
};

const mapStateToProps = state => ({ 
   customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));