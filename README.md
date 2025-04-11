
Wordle Game Clone
This is a Wordle-style game built using React. In this game, players try to guess a secret five-letter word within six tries. After each guess, feedback is provided to indicate which letters are:

Correct and in the right position

Correct but in the wrong position

Not in the word at all

Tech Stack

React – Frontend UI

JavaScript – Game logic

CSS – Styling

JSON Server – Mock backend for storing game state or word list

Getting Started

Follow these steps exactly to set up and run the project successfully on your local machine.

Clone the Repository

https://github.com/ridhimapatnala/wordle-react.git
cd <repo-name>

Install Dependencies

npm install

This command installs all required packages listed in package.json.

Run the React App

npm start

This will:

Launch the development server

Automatically open http://localhost:3000 in your default browser

Reload the page as you make changes to your code

Show lint errors in the terminal or browser console if any

Running JSON Server (Mock Backend)
The project uses a backend API (like for storing words), you'll need a mock server. Here's how:

Install JSON Server

npm install -g json-server

You only need to do this once globally.

Create a db.json File

Feel free to add more words. Each word should be a valid 5-letter word.

Start the JSON Server

json-server --watch db.json --port 3001

This will:

Start the mock API server on http://localhost:3001

Watch the db.json file for changes and update the API in real time

Available Scripts

These scripts are predefined in package.json. Run them using:

npm run <script-name>

npm start
Runs the app in development mode at http://localhost:3000

npm test
Launches the test runner in the interactive watch mode

npm run build
Builds the app for production to the build folder
It bundles React in production mode and optimizes the build for best performance