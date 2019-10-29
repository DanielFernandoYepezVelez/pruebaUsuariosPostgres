const { Router } = require('express');
const router = Router();

const pool = require('../../lib/dbConnect');

router.get('/users', async (req, res, next) => {
  try {
    const response = await pool.query('SELECT * FROM users');    
    
    res.status(200).json(response.rows);

  } catch (error) {
    console.log(error);
  }
});

router.get('/user/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    res.json(response.rows);
    res.send('id correcto');

  } catch (error) {
    console.log(error);
  }
});

router.post('/users', async (req, res, next) => {
  try {
    const { name, last_name, email, type_document, number_document, address, age, sexo, medidas } = req.body;

    const consulta = 'INSERT INTO users(name, last_name, email, type_document, number_document, address, age, sexo, medidas) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)';
    const values = [name, last_name, email, type_document, number_document, address, age, sexo, medidas];

    const response = await pool.query(consulta, values);
    console.log(response);

  } catch (error) {
    console.log(error);
  }
  res.send('crea usuario')
});

router.delete('/user/:id', async(req, res, next) => {
  try {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`Usuario ${id} Eliminado Correctamente`);

  } catch (error) {
    console.log(error);
  }
});

router.put('/user/:id', async(req, res, next) => {
  try {
    const id = req.params.id;
    const { name, last_name, email, type_document, number_document, address, age, sexo, medidas } = req.body;
  
    const consulta = 'UPDATE users SET name = $1, last_name = $2, email = $3, type_document = $4, number_document = $5, address = $6, age = $7, sexo = $8, medidas = $9 WHERE id = $10';
    const values = [ name, last_name, email, type_document, number_document, address, age, sexo, medidas, id ];

    const response = await pool.query(consulta, values);
    console.log(response.rows);
    res.json(`Usuario ${id} Actualizado Satisfactoriamente`);
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;