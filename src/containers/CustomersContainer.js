import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from '../components/AppFrame';
import CustomerList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';

class CustomersContainer extends Component {

   componentDidMount() {
      this.props.fetchCustomers();
   }


   handleAddNew = () => {
      console.log("Nuevo Cliente");
      this.props.history.push("/customers/new");

   }

   renderBody = (customers) => (
      <>
         <CustomerList
            customers={customers}
            urlPath={"customer/"}>
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
}


CustomersContainer.defaultProps = {
   customers: []
}

//BEFORE

// const mapDispatchToProps = dispatch => (
//    {
//       fetchCustomers: () => dispatch(fetchCustomers())
//    }
// )

//AFTER
const mapDispatchToProps = { fetchCustomers };

const mapStateToProps = state => ({
   customers: state.customers
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));