import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm , Fild } from 'redux-form';

const CustomerEdit = ({ name, dni, age }) => {
   return (
      <div>
         <h2>Edición del cliente</h2>
         <h3>Nombre: {name} / {dni} / {age}</h3>
      </div>
   )
}

CustomerEdit.propTypes = {
   name: PropTypes.string,
   dni: PropTypes.string,                       
   age: PropTypes.number,
}

export default reduxForm({ form: 'CustomerEdit' })(CustomerEdit);