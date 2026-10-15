# Todo App — React + Vite

A simple and interactive Todo List application built using React and Vite. This project allows users to manage daily tasks with features like adding, editing, deleting, completing, and filtering tasks.

## Features

- **Add Tasks:** Create new tasks with a title.
- **Edit Tasks:** Update existing task titles.
- **Delete Tasks:** Remove tasks you no longer need.
- **Mark as Complete:** Mark tasks as completed or pending using checkboxes.
- **Filter Tasks:** View all tasks, pending tasks, or completed tasks.
- **Task Statistics:** Display the total number of tasks, completed tasks, and pending tasks.
- **Input Validation:** Prevent empty or whitespace-only tasks.
- **Unique Task IDs:** Generate unique identifiers using `crypto.randomUUID()`.
- **Responsive Layout:** Use a flexible layout that adapts to different screen sizes.

## Tech Stack

- **React** — Build the user interface using components and hooks.
- **Vite** — Development server and build tool.
- **JavaScript (ES6+)** — Application logic and event handling.
- **CSS3** — Styling and layout.
- **React Hooks (`useState`)** — Manage application state.
- **HTML5** — Structure the application.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)

### Installation

**1. Create a Vite project**

```bash
npm create vite@latest
```

Select React as the framework and JavaScript as the variant when prompted.

**2. Navigate to the project directory**

```bash
cd your-project-name
```

Replace `your-project-name` with your actual project folder name.

**3. Install dependencies**

```bash
npm install
npm install react-dom react-router-dom
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173/`.

## Project Structure

```text
your-project-name/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: Your project structure may vary depending on the Vite template you selected.*

## How to Use

1. Enter a task in the input field.
2. Click **Add Task** to add it to the list.
3. Use the checkbox to mark a task as completed or pending.
4. Click **Edit** to modify a task and **Save** to apply the changes.
5. Click **Cancel** to discard an edit.
6. Click **Delete** to remove a task.
7. Use the **All**, **Pending**, and **Completed** filters to view specific tasks.
8. Check the task statistics to track your progress.

## React Concepts Practiced

This project demonstrates practical use of:

- `useState` for managing tasks, filters, and editing state.
- Event handling with `onClick`, `onChange`, and `onSubmit`.
- Rendering lists dynamically using `map()`.
- Filtering arrays using `filter()`.
- Updating objects immutably using the spread operator.
- Conditional rendering using ternary operators.
- Controlled form inputs.
- Generating unique IDs for list items.
- Preventing default form submission behavior with `event.preventDefault()`.

## Current Limitations

- Tasks are stored in React state and are lost when the page is refreshed.
- Tasks are not synchronized across devices.
- The application does not use a backend or database.

## Future Improvements

- Persist tasks using `localStorage`.
- Add task deadlines and priorities.
- Add search functionality.
- Improve responsive styling and accessibility.
- Add user authentication and database integration.

## License

This project is available for learning and personal use.

---

**Built with React and Vite.**