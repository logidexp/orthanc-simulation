# Inventory Management

A simple backend system to manage inventories and sales for small shop.

## Functionality

### Inventory Management

- View inventory infomation
- Insert new inventory
- Add amount or change price
- Remove inventory

### Bill Management

- View bill information
- Create new bill
- Process existing bill(with inventory update)
- Delete bill

## Database Schema

### Inventory Entity

| Field                | Type     | Detail                                      |
| -------------------- | -------- | ------------------------------------------- |
| id                   | ObjectID | Inventory ID                                |
| name                 | String   | Name of inventory                           |
| price                | Float    | Current price of inventory                  |
| amount               | Int      | Current amount of inventory                 |
| last_incoming_amount | Int      | Inventory amount of most recently added     |
| last_incoming_date   | DateTime | Time when inventory was most recently added |
| last_outgoing_amount | Int      | Inventory amount of most recently sold      |
| last_outgoing_date   | DateTime | Time when inventory was most recently sold  |
| last_edited          | DateTime | Latest updated time                         |

### Bill

| Field       | Type     | Detail                                           |
| ----------- | -------- | ------------------------------------------------ |
| id          | ObjectID | Bill ID                                          |
| items       | Item[]   | Items to buy for bill                            |
| total_price | Float    | Total price for items                            |
| status      | String   | Current status of bill (`Pending` or `Finished`) |
| order_date  | DateTime | Bill creation time                               |
| proc_date   | DateTime | Bill paid time                                   |

- Item

```
{name: String, amount: Number}
```

## API Design

### Inventory Management API

#### - View inventories

Endpoint: `GET /inventory`

#### - Insert new inventory

Endpoint: `POST /inventory`

Example Body:

```json
{
  "name": "book",
  "price": 10,
  "amount": 200
}
```

#### - Add amount or change price

Endpoint: `PATCH /inventory/:id`

Example Body:

```json
{
  "amount": 50, // Amount to add
  "price": 20 // Price to change
}
```

#### - Remove inventory

Endpoint: `DELETE /inventory/:id`

### Bill Management

#### - View bill information

Endpoint: `GET /bill`

#### - Create new bill

Endpoint: `POST /bill`

Example Body:

```json
{
  "items": [
    {
      "name": "bag",
      "amount": 1
    },
    {
      "name": "pen",
      "amount": 2
    },
    {
      "name": "cup",
      "amount": 1
    }
  ]
}
```

#### - Process existing bill

Endpoint: `PATCH /bill/:id`

#### - Delete bill

Endpoint: `DELETE /bill/:id`

## Running application

The application is containerized and can run with docker.

```shell
docker-compose up --build
```

Or you can run with `yarn`. You should check the database configurations on environment.

```shell
yarn start
```

