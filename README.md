# Flight Booking System

Author: - [Ranjeet](https://github.com/ranjeetmasaischool)

The Flight Booking System is a web application designed to simplify the process of booking flights for users. It provides a user-friendly interface for searching and booking flights, managing bookings, and completing payments securely. The system is built using React for the frontend, Spring Boot for the backend, and MySQL for the database.

## Features:

- **User Authentication:** Users can sign up for an account or log in using their credentials.
- **Flight Search:** Users can search for flights based on their departure and destination locations, travel dates, and other preferences.
- **Flight Booking:** Once users find their desired flight, they can proceed to book it, selecting preferred seats and receiving booking summaries.
- **Payment Integration with Razorpay:** Users can securely pay for their bookings using Razorpay, ensuring smooth transactions.
- **Ticket Management:** After successful payment, users receive digital tickets containing their flight details, and they can manage their bookings.

## Technology Stack:

- **Frontend: React**
- **Backend: Spring Boot**
- **Database: MySQL**

## How to Run:

### Prerequisites:
- Node.js
- npm (Node Package Manager)
- JDK (Java Development Kit)
- Maven
- MySQL

### Steps:
1. **Clone the Repository:**

    ```
     git clone https://github.com/Amanrj/final-project/
    ```

2. **Backend Setup:**
- Navigate to the backend directory:
  ```
  cd backend
  ```
- Update MySQL credentials in `application.properties` file.
- Run the Spring Boot application:
  ```
  mvn spring-boot:run
  ```

3. **Frontend Setup:**
- Navigate to the frontend directory:
  ```
  cd frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the React application:
  ```
  npm start
  ```

4. **Access the Application:**
- Once the backend and frontend servers are running, access the application in your web browser:
  ```
  http://localhost:3000
  ```

## Endpoints:

### Hello Endpoint:
- **URL:** `/hello`
- **Method:** GET
- **Description:** Endpoint to test server connection.

### Flight Endpoints:
- **URL:** `/flight`
- **Method:** GET
- **Description:** Retrieves all flights available.

- **URL:** `/flight/{number}`
- **Method:** GET
- **Description:** Retrieves flight(s) with the given flight number.

- **URL:** `/flight/{origin}/{destination}`
- **Method:** GET
- **Description:** Retrieves flight(s) from the origin to the destination.

### Airports Endpoint:
- **URL:** `/airports/{name}`
- **Method:** GET
- **Description:** Retrieves all airports with names matching the provided name.

### User Endpoints:
- **URL:** `/user`
- **Method:** GET
- **Description:** Retrieves all users.

- **URL:** `/user`
- **Method:** POST
- **Description:** Creates a new user or verifies an existing user.

- **URL:** `/user`
- **Method:** DELETE
- **Description:** Deletes all users.

### Booking Endpoints:
- **URL:** `/booking/{user}`
- **Method:** GET
- **Description:** Retrieves all bookings for the given user.

- **URL:** `/booking/{user}`
- **Method:** POST
- **Description:** Saves a new booking for the given user.

- **URL:** `/booking`
- **Method:** DELETE
- **Description:** Deletes all bookings.

- **URL:** `/booking/done/{id}`
- **Method:** POST
- **Description:** Confirms the booking with the given ID.
## Additional Notes:

- Make sure all dependencies are installed and configured properly before running the application.
- For security reasons, ensure sensitive information such as API keys and database credentials are kept secure and not exposed in the repository.
- For production deployment, consider setting up environment-specific configurations and optimizations.
