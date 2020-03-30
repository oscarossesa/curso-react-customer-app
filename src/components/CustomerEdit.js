import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isNumber = value => (
   isNaN(Number(value)) && "El campo debe ser un número"
);

const validate = values => {
   const error = {};

   if (!values.name) {
      error.name = "El campo nombre es requerido";
   }

   if (!values.dni) {
      error.dni = "El campo dni es requerido";
   }

   return error;
};

const MyField = ({ input, meta, type, name, label }) => (
   <div>
      <label htmlFor={name}>{label}</label>
      <input {...input} type={!type ? "text" : type} />
      {
         meta.touched && meta.error && <span>{meta.error}</span>
      }
   </div>
);

const CustomerEdit = ({ name, dni, age }) => {
   return (
      <div>
         <h2>Edición del cliente</h2>
         <form action="">
            <Field 
               name="name" 
               component={MyField} 
               label="Nombre"></Field>
            <Field 
               name="dni" 
               component={MyField} 
               label="Dni"></Field>
            <Field 
               name="age" 
               component={MyField} 
               validate={isNumber} 
               label="Edad"></Field>
         </form>
      </div>
   )
};

CustomerEdit.propTypes = {
   name: PropTypes.string,
   dni: PropTypes.string,
   age: PropTypes.number,
};

const CustomerEditForm = reduxForm(
   { 
         form: 'CustomerEdit',
         validate
   })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);