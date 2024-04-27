# Simple CRUD Application for Product Management

This project is a simple CRUD (Create, Read, Update, Delete) application designed for managing product data. It serves as a starting point for building more complex applications that require CRUD operations for products.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB (v4.x or higher)

### Installation

1. Clone the repository:
`git clone https://github.com/yourusername/simple-crud.git`
   
2. Navigate to the project directory:
`cd simple-crud`

3. Install dependencies:
`npm install`


## Running the Application

1. Start the application in development mode:
`npm run dev`

   This will start the server and automatically restart it whenever you make changes to the code.

2. Alternatively, you can start the application in production mode:
`npm run serve`


## API Endpoints

The application provides the following CRUD operations for products:

- `GET /api/products`: Retrieve all products
- `GET /api/products/:id`: Retrieve a specific product by ID
- `POST /api/products`: Create a new product
- `PUT /api/products/:id`: Update a specific product by ID
- `DELETE /api/products/:id`: Delete a specific product by ID

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
