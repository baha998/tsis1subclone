# Todo App Clone

## Overview

This document outlines the plan for creating a simple "Todo App Clone" web application as per the user's technical specification. The application will be built using HTML, CSS, and vanilla JavaScript, and will use Firebase for the backend (Firestore and Hosting).

## Project Structure

The project will follow this structure:

```
todo-app-clone/
│── public/
│   │── index.html       # Main application page
│   │── style.css        # Stylesheet
│   │── app.js           # Application logic
│── firebase.json        # Firebase Hosting configuration
│── blueprint.md         # This file
│── README.md            # Project documentation
```

## Plan

1.  **Create `blueprint.md`:** Document the plan for building the application. (This step)
2.  **Set up Project Structure:**
    *   Create a `public` directory.
    *   Move `index.html`, `style.css`, and `main.js` into the `public` directory, renaming `main.js` to `app.js`.
3.  **Create `firebase.json`:** Create the configuration file for Firebase Hosting, specifying the `public` directory as the hosting root.
4.  **Update `index.html`:**
    *   Add the basic HTML structure for the Todo app, including an input field, "Add" button, and a container for the task list.
    *   Include the necessary Firebase SDK scripts for Firebase App and Firestore.
5.  **Update `style.css`:** Add basic styling to the application for a clean user interface.
6.  **Update `app.js`:**
    *   Initialize the Firebase app.
    *   Get a reference to the Firestore database.
    *   Implement functionality to add new tasks to the "tasks" collection in Firestore.
    *   Implement real-time updates to display the list of tasks from Firestore.
    *   Implement functionality to delete tasks from the "tasks" collection in Firestore.
7.  **Create `README.md`:** Create a `README.md` file with the project title, description, and instructions for setup and deployment.
8.  **Initialize Firebase:** Use the `firebase_init` tool to initialize Firestore in the project.
9.  **Configure Firebase Server:** Create `.idx/mcp.json` to enable the Firebase server for local development and testing.
10. **Deploy:** Once the application is functional, deploy it to Firebase Hosting.
