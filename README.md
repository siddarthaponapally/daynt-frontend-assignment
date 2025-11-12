## Project Overview

Challenge:
Build a small full-stack application that allows users to add, view, and delete runners’ data including their name, run date, and miles run.

What I built:

->A React.js frontend where users can enter runner details, view all entries, and delete any record.

->An Express.js + Node.js backend connected to MongoDB Atlas for data storage.

->The backend exposes REST APIs for CRUD operations.

->The UI automatically refreshes data after each add/delete operation.

->Displays “No Runners Data Available” when there are no runners in the database.


## Assumptions

->Each runner entry includes:
{ name: String, date: Date, milesrun: Number }

->The date is entered via <input type="date"> and stored in ISO format.

->No authentication (public access).

->Backend and frontend run separately (5000 / 3000).

->Follows REST endpoints:

    GET /runnerboard/allrunners

    POST /runnerboard/add-runnerboard

    DELETE /runnerboard/deleterunner/:id

->Intended for local development/testing.


## Prerequisites

Node.js for Required for async/await
npm is Comes with Node
MongoDB Atlas Used for runner data
Express.js  is used Backend
React.js is used for Frontend


Postman for API testing, VS Code for development, Git for versioning.

-> Vercel for frontend deployment

-> Render for backend deployment


## Setup Instructions
-> Installation

In both /backend and /frontend directories:

npm install

-> Environment Variables

Create a .env file in the backend directory using .env.example as reference:

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/runnerDB
PORT=5000


Keys:

MONGO_URI → MongoDB connection string

PORT → Backend port number

Seeding Data

{
  "name": "Siddartha",
  "date": "13/11/2025",
  "milesrun": 5.2
}


## Run & Verify
Start Backend
npm start


Expected output:

Server is started and running at 5000
MongoDB Connected Successfully

Start Frontend
npm start


Visit http://localhost:3000.

## Verification Steps

Add Runner

Enter name, date, miles → click Submit

Alert: “Runner added successfully”

Entry appears in list.

View Runners

Displays name, date (DD/MM/YYYY), miles.

Delete Runner

Click Delete

Alert: “Runner deleted successfully”

Entry disappears.

Empty State

If no runners exist, shows:
     “No Runners Data Available”

Data Persistence

Refresh page → data remains (MongoDB persistence).


## Features & Limitations
-> Features

Add, list, and delete runners.

Auto-refresh after operations.

Error handling and alerts.

“No Runners Data Available” message for empty list.

Date formatted as DD/MM/YYYY.

-> Limitations

No authentication or validation.

Miles run accepts any text.

No pagination/search.

Limited responsiveness.

## Notes on Architecture
 Folder Structure
-> Backend
backend/
├── server.js
├── routes/
│   └── runnerboardRoute.js
├── controller/
│   └── runnerboardController.js
├── models/
│   └── runnerModel.js
├── .env
└── package.json

-> Frontend
frontend/
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json


## Data & State Flow

Frontend:

useState for input and data management.

useEffect for fetching runners on load.

Fetch API for all CRUD operations.

Displays empty state text when no data available.

Backend:

Express router → Controller → MongoDB (via Mongoose).

Model:

{
  name: String,
  date: Date,
  milesrun: Number
}

## Accessibility & UI
## Accessibility

Inputs have clear placeholders.

Buttons labeled properly.

Adequate spacing & contrast.

Empty state message clearly visible.

## UI Styling

Centered container card with shadow & padding.

Buttons: blue (submit), red (delete).

Consistent typography & spacing.

Empty list displays centered message:

     No Runners Data Available


## Example APIs
Method      Endpoint                            Description
GET         /runnerboard/allrunners             Fetch all runners
POST        /runnerboard/add-runnerboard        Add a new runner
DELETE      /runnerboard/deleterunner/:id       Delete runner

## Conclusion

This MERN Runner Dashboard showcases:

Full CRUD with MongoDB + Express + React

Clean UI with responsive updates

Empty state message for better UX


