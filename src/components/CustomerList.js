import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({ customers, urlPath }) => {

   //console.log('customers', customers);

   return (
      <div>
         <div className="customers-list">
            {
               customers.map(c => {
                  //console.log(c);
                  return <CustomerListItem
                     key={c.dni}
                     dni={c.dni}
                     name={c.name}
                     editAction={'Editar'}
                     delAction={'Eliminar'}
                     urlPath={urlPath} />
               })
            }
         </div>
      </div>
   )
}

CustomersList.propTypes = {
   customers: PropTypes.array.isRequired,
   urlPath: PropTypes.string.isRequired,
}

export default CustomersList