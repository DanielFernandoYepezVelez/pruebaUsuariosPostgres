if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); //puedo leer el archivo .env
}

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

/* Initializations */
const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Todos los middlewares de express son funciones, por ende, se deben ejecutar */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/* Routes */
app.use(require('./routes/api/user'));

/* Static Files */
app.use(express.static(path.join(__dirname, './public/assets/')));

/* Starting The Server */
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});