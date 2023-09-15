# HNGx BACKEND STAGE 2

## Username

Yray

## Stack used

This project was developed using nodejs, express and mongodb

## Dotenv File

Using the mongodb connection string containing connection url, username, password and collection name

## Endpoint

https://hngx-backend-stage-two.vercel.app/api

## Crud Operations

### Create

Pass in a user name as req.body.name property to create a user
{name: "name goes in here"}

### Read

Pass in a user id into the endpoint to read user information
https://hngx-backend-stage-two.vercel.app/user_id

### Edit

Pass in a user id into the endpoint and then pass in the new name as a req.body.name
https://hngx-backend-stage-two.vercel.app/user_id
{name: "name goes in here"}

### Delete

Pass in a user id into the endpoint to delete a user from the database
https://hngx-backend-stage-two.vercel.app/user_id
