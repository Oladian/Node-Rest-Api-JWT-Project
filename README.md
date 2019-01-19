# PROYECTO 1ª EVALUACIÓN DE PROGRAMACIÓN DE SERVICIOS Y PROCESOS

_Servidor con json-javascript que utiliza autenticación mediante tokens (jwt)_

## Como ejecutar sin Docker:

_Para poner en funcionamiento el servidor sin usar contenedores ejecuta los siguientes comandos:_
```
npm install bcryptjs body-parser express jsonwebtoken mongoose morgan --save
```
```
npm install nodemon -g
```
## Como ejecutar con Docker:

_Para poner en funcionamiento el servidor en contenedores ejecuta los siguientes comandos:_
```
sudo docker build -f Dockerfile -t node-rest-jwt:api .
```
```
sudo docker run -dti --name="server" -p "<tuIP:3000:3000>" node-rest-jwt:api
```
```
sudo docker start server
```
### Pre-requisitos

_Se necesitará MongoDB, Node.js y npm para poder ejecutar correctamente el servidor_

## Rutas de acceso a los datos

_Rutas de usuarios_
```
POST    /users/register
```
```
POST    /users/authenticate
```

_Rutas de eventos_

```
GET     /events/
```
```
POST    /events/
```
```
GET     /events/:eventId
```
```
PUT     /events/:eventId
```
```
DELETE  /events/:eventId
```

## Construido con 

* [MongoDB](https://www.mongodb.com/es) - Base de datos utilizada
* [NPM](https://www.npmjs.com/) - Sistema de módulos
* [NODE.JS](https://nodejs.org/es/) - Ejecución de Javascript
* [JSON](https://www.json.org/) - Formato de datos para persistencia
