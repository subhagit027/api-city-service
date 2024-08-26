# City API Service

## Overview

City API Service is a Node.js application that provides a RESTful API for managing city data. It uses Express.js for handling HTTP requests and MongoDB (with Mongoose) for data storage and retrieval. This API allows you to perform CRUD operations on city data, including adding, updating, deleting, and retrieving cities.

## Features

- **Add a New City:** Endpoint to add a new city with unique name validation.
- **Update Existing City:** Endpoint to update city details by city ID.
- **Delete a City:** Endpoint to delete a city by ID or name.
- **Retrieve Cities:** Endpoint to get cities with support for pagination, filtering, sorting, and searching.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Add City](#add-city)
  - [Update City](#update-city)
  - [Delete City](#delete-city)
  - [Get Cities](#get-cities)

## Getting Started

Follow these instructions to set up and run the City API Service on your local machine.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or via a cloud service)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/subhagit027/api-city-service.git
   cd api-city-service
2. **Install the dependencies:**

    ```bash
    npm install
3. **Create a .env file in the root directory and add your MongoDB connection string:**

    ```bash
    MONGODB_URI=mongodb://localhost:27017/citiesdb
    PORT=3000

### Project Structure
    /nodejs-city-api
      /models
        city.js            # Mongoose model for City
      /controllers
        cityController.js  # Controller for City API
      /routes
        cityRoutes.js      # Routes for City API
      server.js            # Main server file

### Usage

1. **Start the server**
      ```bash
      nodemon server.js
    
2. **The server will start on http://localhost:3000 (or the port specified in the .env file).**

### API Endpoints

## Add City
- Endpoint: /api/cities
- Method: POST
- Description: Adds a new city.
- Request Body:
    ```bash
    {
  "name": "New York",
  "population": 8419000,
  "country": "USA",
  "latitude": 40.7128,
  "longitude": -74.0060
    }

- Response:
    ```bash
    {
  "message": "City added successfully",
  "city": {
    "_id": "60d5ec49d7f09a20c8d3e5c6",
    "name": "New York",
    "population": 8419000,
    "country": "USA",
    "latitude": 40.7128,
    "longitude": -74.0060
    }
  }

## Update City
- Endpoint: /api/cities/:id
- Method: PUT
- Description: Updates an existing city.
- Request Body:
    ```bash
    {
  "name": "Los Angeles",
  "population": 3980000,
  "country": "USA",
  "latitude": 34.0522,
  "longitude": -118.2437
  }

- Response:
    ```bash
    {
  "message": "City updated successfully",
  "city": {
    "_id": "60d5ec49d7f09a20c8d3e5c6",
    "name": "Los Angeles",
    "population": 3980000,
    "country": "USA",
    "latitude": 34.0522,
    "longitude": -118.2437
    }
  }

## Delete City
- Endpoint: /api/cities/:id
- Method: DELETE
- Description: Deletes a city.
- Response:
    ```bash
    {
  "message": "City deleted successfully"
    }

## Get Cities
- Endpoint: /api/cities
- Method: GET
- Description: Retrieves a list of cities with support for pagination, filtering, sorting, searching, and projection.
- Query Parameters:
    - page (default: 1)
    - limit (default: 10)
    - sort (default: 'name')
    - filter (default: '{}')
    - search (default: '')
    - projection (default: '')
- Response
    ```bash
    {
    "cities": [
        {
            "_id": "66ccda6299fc34691f971578",
            "name": "New York",
            "population": 12234234523,
            "country": "USA",
            "latitude": 123.2412,
            "longitude": 132.124,
            "__v": 0
        }
    ],
    "pagination": {
        "page": "1",
        "limit": "10",
        "totalCities": 1,
        "totalPages": 1
    }
  }



    
