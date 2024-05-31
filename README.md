## **Schedule API**

Schedule is an API that responsible for time booking management.

## Pre-Installation

### NodeJs and Package Manager

Api is build in Typescript NodeJs that will be compiled into Javascript which is built on Chrome's V8 Javascript Engine.

### Installation

1. Create environment file named `.env`
2. In `.env` file, set `API_KEY`
3. Install

```
npm install
```

4. Start

```
npm run dev
```

### Using Docker Compose

1. Run Docker Compose

```
docker-compose up -d
```

2. Stop Docker

```
docker-compose stop
```

## Usage

### API Docs :

- **URL**

  /api/appointments?date=2024-05-31

- **Purpose**
  This endpoint is used to find all available timeslot within specific date.
- **Method:**
  `GET`
- **URL Params**

  `date = [string]`

- **HEADER**

        {
            api_key : "string"
        }

- **Success Response:**
- **Code:** 200 <br />
  **Content:**
  `[
    {
        "date": "2024-04-31",
        "time": "8:00",
        "available_slots": 1
    }
]`

  - **Code:** 403 Forbidden<br />
    **Content:**
    ```
        {
            "error": "Forbiden Access"
        }
    ```

- **URL**

  /api/appointments

- **Purpose**
  This endpoint is used to cancel the booking slot.

- **Method:**
  `PUT`
- **URL Params**

  `id = [string]`

- **HEADER**

        {
            api_key : "string"
        }

- **Success Response:**

  - **Code:** 200 Created<br />
    **Content:**
    ```
        {
            "message":"Appointment cancelled"
        }
    ```
  - **Code:** 403 Forbidden<br />
    **Content:**
    ```
        {
            "error": "Forbiden Access"
        }
    ```
