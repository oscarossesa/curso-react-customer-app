This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `Estructura del proyecto`

 + components
   + AppFrame.js
   + AppHeader.js
   + CustomerData.js
   + CustomersActions.js
 + App.js
 + index.js

### `Utilización de Redux`

+ Instalar redux
+ Instalar react-redux
+ Crear un store
+ Vincular el store a la App mediante Provider
+ Generar la acción
+ Conectar mediante connect al componente qwue va a acceder al estado
+ Crear el método mapDispatchToProps y vincularlo con la acción
+ Lanzar la acción desde "componentDidMount"
+ ...hacer que efectivamete realice el fetch contra el server

### `Utilización de Redux-Actions`

+ Conectar plugin de redux para Chrome
+ Crear constants
+ Instalar Redux-Actions
+ Utilizar Redux-Actions
  + Modificar actionCreator
  + Simplificar mapDsispatchToProps

## Tips

https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c

## Paquetes

 + npm install --save react-router-dom --> componente link
 + npm install redux
 + npm install react-redux
 + npm install redux-actions
 + npm install json-server --> permite realizar las operatorias rest con datos de prueba
   + Levantar api REST: json-server --watch db.json --port 3001
 + npm install --save redux-promise --> middelware, similar a thunk pero que devuelve promise
 + npm install reselect
 + npm install --save redux-form