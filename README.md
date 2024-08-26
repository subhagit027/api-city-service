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
