# Task 3: Custom React App - Projects Page

This React application implements a Projects page where users can view projects, see hardware checkout information, and join/leave projects.

## Requirements Checklist

1. Two Material UI components used: `Button`, `Card`, `CardContent`, `CardActions`, `Typography`, `Chip`, `LinearProgress`, `Container`, `Box`  
2. Two custom components beyond Projects: `ProjectCard` and `HardwareSet`  
3. Reusable components: Both `ProjectCard` and `HardwareSet` are reused multiple times  
4. Props passed from parent to child (2+ times): 
  - `Projects` → `ProjectCard` (project data, onToggleMembership function)
  - `ProjectCard` → `HardwareSet` (name, checkedOut, capacity)
5. Custom event handler modifying state: `handleToggleMembership` in Projects component

## Features

- **Project Cards**: Display project information with name, description, and membership status
- **Hardware Sets**: Show availability of hardware sets with visual progress bars
- **Join/Leave Functionality**: Toggle project membership with button click
- **Material UI Integration**: Professional, responsive design using Material-UI components
- **State Management**: Uses React hooks (useState) to manage project data
- **Event Handling**: Custom event handler for toggling membership

## Setup Instructions

1. Navigate to the project directory:
   ```bash
   cd task3-react-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:3000`

## Hardcoded Data

Currently, the app uses hardcoded project data in the `Projects` component. In a future iteration, this will be replaced with API calls to a backend database.

## Submission Notes

- To create a zip file for submission (without node_modules):
  ```bash
  # From the parent directory
  zip -r task3-react-app.zip task3-react-app -x "task3-react-app/node_modules/*"
  ```

- Make sure to run `npm install` after extracting the zip file
