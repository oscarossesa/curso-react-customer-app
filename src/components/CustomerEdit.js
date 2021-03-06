import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

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

const toNumber = value => value && Number(value);

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded }) => {
   return (
      <div>
         <h2>Edición del cliente</h2>
         <form onSubmit={handleSubmit}>
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
               type="number"
               validate={isNumber}
               label="Edad"
               parse={toNumber}></Field>
            <CustomerActions>
               <button type="submit" disabled={pristine || submitting}>
                  Aceptar
               </button>
               <button type="button" disabled={submitting} onClick={onBack}>
                  Cancelar
               </button>
            </CustomerActions>
            <Prompt
               when={!pristine && !submitSucceeded}
               message="Se perderán los datos si continúa.">
            </Prompt>
         </form>
      </div>
   )
};

CustomerEdit.propTypes = {
   name: PropTypes.string,
   dni: PropTypes.string,
   age: PropTypes.number,
   onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
   {
      form: 'CustomerEdit',
      validate
   })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);