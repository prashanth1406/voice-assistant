# Voice Order Tracking Service

A backend service built with Node.js and Express to track orders using the AfterShip API. This service provides structured tracking data with checkpoints and features Redis caching for optimized performance.

## Prerequisites

- **Node.js**: v18 or later
- **Redis**: A running Redis instance for caching

## Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd voice-order-tracking
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure environment variables**:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    NODE_ENV=development
    AFTERSHIP_API_KEY=your_aftership_api_key
    REDIS_URL=redis://localhost:6379
    ```

## Running the Application

-   **Development mode** (with nodemon):
    ```bash
    npm run dev
    ```

-   **Production mode**:
    ```bash
    npm start
    ```

## API Endpoints

### Health Check
-   **URL**: `/health`
-   **Method**: `GET`
-   **Response**: `{"status": "ok"}`

### Get Tracking Information
-   **URL**: `/api/tracking`
-   **Method**: `POST`
-   **Body**:
    ```json
    {
      "trackingNumber": "YOUR_TRACKING_NUMBER"
    }
    ```
-   **Response**:
    Returns formatted tracking data including:
    -   `id`: Internal tracking ID
    -   `trackingNumber`: The order tracking number
    -   `slug`: Carrier identifier
    -   `status`: Current shipment status (e.g., InTransit, Delivered)
    -   `latestCheckpoint`: The most recent tracking event
    -   `checkpoints`: A full list of tracking events sorted by date (latest first)
    -   `updatedAt`: Timestamp of the last update

## Features

-   **AfterShip Integration**: Connects to the AfterShip REST API to fetch real-time tracking data.
-   **Redis Caching**: Caches formatted tracking information for 1 hour to reduce API calls and improve response times.
-   **Structured Data**: Formats raw AfterShip data into a clean, easy-to-use structure for frontend consumers.
-   **Sorted Checkpoints**: Automatically sorts all tracking events so the most recent updates appear at the top.


## Environment Configuration:

```bash
PORT=3000
NODE_ENV=development
AFTERSHIP_API_KEY=asat_a4209c9c2e334bceb3eb6094d40438e8
REDIS_URL=redis://localhost:6379
```

