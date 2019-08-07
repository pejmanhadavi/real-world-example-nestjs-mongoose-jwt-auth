<div align="center">
  <img width="250" src="https://camo.githubusercontent.com/18fe3feea5e3593c593e12e552494a3995eceacf/687474703a2f2f6b616d696c6d79736c69776965632e636f6d2f7075626c69632f6e6573742d6c6f676f2e706e672331" alt="Awesome">
  <br>
  <h3>real-world-example-nestjs-mongoose-jwt-auth-roles-and-permission</h3>
  <hr>
</div>

# Getting started

## Installation

Clone the repository

    git clone https://github.com/pejmanhadavi/real-world-example-nestjs-mongoose-jwt-auth.git

Switch to the repo folder

    cd real-world-example-nestjs-mongoose-jwt-auth
    
Install dependencies
    
    npm install

Create a .env file and write it as follows

    MONGO_URI='mongodb://localhost/YOURMONGODBNAME'
    JWT_SECRET='YOURJWTSECRETCHANGEIT'
    ENCRYPT_JWT_SECRET='YOURJWTENCRIPTINGPASSCHANGEIT'
    JWT_EXPIRATION=30m
 
----------

## Database

The example codebase uses [Mongoose](https://mongoosejs.com/).

----------

## NPM scripts
- `npm run start:watch` - Start application in watch mode

----------
# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication.
This app uses <strong>refresh-Token</strong> mechanism to refresh jsonwebtoken after 30 minutes.

----------
 
# Swagger API docs

Visit http://127.0.0.1:3000/api in your browser

This example repo uses the NestJS swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)

## Authors

 **Pejman Hadavi**
