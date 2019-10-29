CREATE DATABASE pruebaUsuarios;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  type_document VARCHAR(50),
  number_document VARCHAR(50),
  address VARCHAR(50),
  age VARCHAR(10),
  sexo BOOLEAN DEFAULT false,
  medidas JSONB
);

INSERT INTO users(name, last_name, email, type_document, number_document, address, age, sexo, medidas) VALUES
    ('Daniel Ferando', 'Yepez Vélez', 'daniepez.02@gmail.com', 'Cedula de Ciudadania', '122098765', 'Calle 34 #45-56', '20', 'true', '{"estatura":"1.68", "peso":"58kg", "IMC":"25"}');

INSERT INTO users(name, last_name, email, type_document, number_document, address, age, sexo, medidas) VALUES
    ('Daniel Ferando', 'Yepez Vélez', 'danipez.02@gmail.com', 'Cedula de Ciudadania', '122098765', 'Calle 34 #45-56', '20', 'true', '{"estatura": 1.68, "peso": 58, "IMC": 25}');