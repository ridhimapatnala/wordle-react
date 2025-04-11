# Wordle Game Clone 🎯

This is a **Wordle-style game** built using **React**. In this game, players try to guess a secret five-letter word within six tries. After each guess, feedback is provided to indicate which letters are:
- 🟩 Correct and in the right position
- 🟨 Correct but in the wrong position
- ⬛ Not in the word at all

## 🚀 Tech Stack

- **React** – Frontend UI
- **JavaScript** – Game logic
- **CSS** – Styling
- **JSON Server** – Mock backend for storing game state or word list

---

## 🛠️ Getting Started

> ### 📝 Instructions:
> Follow these steps exactly to set up and run the project successfully on your local machine.

### 1. Clone the Repository

```bash
# Replace <your-username> and <repo-name> with your actual GitHub username and repository name
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
2. Install Dependencies
bash
Copy
Edit
npm install
This command installs all required packages listed in package.json.

3. Run the React App
bash
Copy
Edit
npm start
This will:

Launch the development server

Automatically open http://localhost:3000 in your default browser

Reload the page as you make changes to your code

Show lint errors in the terminal or browser console if any

🗂️ Running JSON Server (Mock Backend)
If the project uses a backend API (like for storing words, high scores, or game history), you'll need a mock server. Here's how:

1. Install JSON Server
bash
Copy
Edit
npm install -g json-server
You only need to do this once globally.

2. Create a db.json File
In the root directory of the project, create a file named db.json with the following content:

json
Copy
Edit
{
  "words": [
    { "id": 1, "word": "apple" },
    { "id": 2, "word": "brain" },
    { "id": 3, "word": "crane" }
  ]
}
Feel free to add more words. Each word should be a valid 5-letter word.

3. Start the JSON Server
bash
Copy
Edit
json-server --watch db.json --port 3001
This command:

Starts the mock API server on http://localhost:3001

Watches the db.json file for changes and updates the API in real-time

📦 Available Scripts
These scripts are predefined in package.json. Run them using npm run <script-name>.

npm start
Runs the app in development mode at http://localhost:3000.

npm test
Launches the test runner in the interactive watch mode.

npm run build
Builds the app for production to the build folder.
It bundles React in production mode and optimizes the build for best performance