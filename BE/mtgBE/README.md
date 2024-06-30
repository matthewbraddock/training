# MTG Backend Project

## Description

This project is a simple backend project that will allow you to add, update, delete, and get cards from a database.\
The database is a simple PostgreSQL database that will store the cards in a table.

## Database

- Has the following columns
    - Card Name
    - Card Mana Value
    - Card Type
    - Card Power/Toughness

## Endpoints

- GET
    - `/cards` - this will return all the cards in the database in an object
    - `/card?name={card_name}` - this will return a single card in the database
- POST
    - `/card` - this will add a new card to the database
- PUT
    - `/card` - this will update a card depending on the params provided
- DELETE
    - `/card?name={card_name}` - this will delete a card in the database if it exists
