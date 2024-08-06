# Note Taker

## Description

Note Taker is a simple web application that allows users to write, save, and delete notes. It uses an Express.js back end and saves and retrieves note data from a JSON file. The application is designed to help small business owners organize their thoughts and keep track of tasks they need to complete.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/note-taker.git

2. Navigate to the project directory:
    cd note-taker

3. Install the necessary dependencies:
    npm install

## Usage

1. Start the application:
   ```bash
   node server.js

2. Open your web browser and navigate to http://localhost:3000.

3. You will be presented with a landing page with a link to the notes page.

4. Click on the link to go to the notes page, where you can view existing notes, add new notes, and delete notes.

## API Routes

- **GET `/api/notes`**
  - Retrieves all saved notes.
  - Response: JSON array of note objects.

- **POST `/api/notes`**
  - Saves a new note.
  - Request body: JSON object with `title` and `text` properties.
  - Response: JSON object of the saved note.

- **DELETE `/api/notes/:id`**
  - Deletes a note with the specified ID.
  - Response: JSON object indicating success.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

## Questions

If you have any questions, please contact me at my email.

You can also find more of my work on [GitHub](https://github.com/TayDeveloping).
