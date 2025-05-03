# API Gateway Installation Guide

Follow these steps to install and set up the `api-gateway`:

## Prerequisites

1. Ensure you have **Node.js** (v16.x or later) and **npm** installed. You can download them from [Node.js Official Website](https://nodejs.org/).

---

## Installation Steps

1. **Download the Project Files**  
   Copy the project files to your local system.

2. **Navigate to the Project Directory**

   ```bash
   cd api-gateway
   ```

3. **Install Dependencies**  
   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

4. **Environment Configuration**  
   Create a `.env` file in the project root and add the following environment variables:

   ```plaintext
   PORT=4000
   API_BASE_URL=https://example.com  # Base URL for the APIs being proxied
   ```

   Replace `API_BASE_URL` with the actual URL for the backend services you are proxying.

5. **Start the Service**
   ```bash
   npm run dev
   ```

---

## Installed Libraries

| **Library**             | **Version** | **Purpose**                                                           |
| ----------------------- | ----------- | --------------------------------------------------------------------- |
| `body-parser`           | ^2.2.0      | Middleware for parsing JSON and URL-encoded request bodies.           |
| `cors`                  | ^2.8.5      | Middleware to enable Cross-Origin Resource Sharing.                   |
| `dotenv`                | ^16.4.7     | Manages environment variables.                                        |
| `express`               | ^5.1.0      | Framework for building web APIs.                                      |
| `helmet`                | ^8.1.0      | Secures Express apps by setting various HTTP headers.                 |
| `http-proxy-middleware` | ^3.0.3      | Middleware to proxy HTTP requests to other servers or services.       |
| `morgan`                | ^1.10.0     | HTTP request logger middleware for Node.js.                           |
| `nodemon`               | ^3.1.9      | Automatically restarts the server on file changes during development. |

---
