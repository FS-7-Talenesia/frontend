# Talenesia LMS Frontend

# Learning Management System( LMS ) Frontend

this is the frontend component of the LMS project, it is built with React and Vite, and using chakra-ui as the component library. It serves as the main interface for the LMS project.

## Table of Contents

- [Getting Started](#getting-started)
- [Running the Docker Container](#running-the-docker-container)
- [Pages](#pages)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [React + Vite](#react-vite)

## Getting Started

Before running the LMS Talenesia frontend application locally, ensure that the corresponding backend application is up and running.

### Installation

First, clone the project:

1.  Clone the project repository 'git clone `git clone https://github.com/FS-7-Talenesia/frontend.git`
2.  Navigate to the project directory `cd frontend`
3.  Install the dependencies `npm install`
4.  Run the application `vite`  
    Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

You can start editing the page by modifying `src/App.jsx`. The page auto-updates as you edit the file.

## Running the Docker Container

To run the Docker container that hosts the app, follow these steps:

1. Make sure you have Docker installed on your machine. You can download and install Docker from the official Docker website (https://www.docker.com/get-started).

2. Build the Docker image by running the following command in the root directory of your project:

```bash
docker build -t my-app .
```

3. Once the Docker image is built, you can run a Docker container from this image:

```bash
docker run -p 5173:5173 my-app
```

## Pages

The following pages are available in the application:

- Home (`/`): Displays the dashboard with the course information.
- Profile (`/profile`): Displays the user's profile.
- Courses (`/courses`): Displays the course selection page.
- Achievements (`/achievements`): Displays the user's achievements.
- Grades (`/grades`): Displays the user's grades.
- Logout (`/logout`): Logs the user out and redirects to the course selection page.
- Course Modules (`/courses/modules`): Displays the module selection page for a specific course.
- Course Modules Chapters (`/courses/modules/chapters`): Displays the chapter selection page for a specific module.
- Learn (`/learn`): Displays the learning material page.
- Learn Forum (`/learn/forum`): Displays the discussion forum page for the learning material.
- Login (`/login`): Displays the login page.

## Features

The following features are available in the application:

- Login: Users can login to the application.
- Logout: Users can logout of the application.
- Dashboard: Users can view the dashboard with the course information.
- Profile: Users can view their profile.
- Courses: Users can view the course selection page.
- Achievements: Users can view their achievements.
- Grades: Users can view their grades.
- Course Modules: Users can view the module selection page for a specific course.
- Course Modules Chapters: Users can view the chapter selection page for a specific module.
- Learn: Users can view the learning material page.
- Learn Forum: Users can view the discussion forum page for the learning material.

## Tech Stack

The following technologies are used in the project:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library that gives you the building blocks you need to build your React applications.
- [React Router](https://reactrouter.com/) - A collection of navigational components that compose declaratively with your application.
- [React Icons](https://react-icons.github.io/react-icons/) - A collection of icons for popular icon libraries.
- axios - Promise based HTTP client for the browser and node.js.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
  and many more.

## Available Scripts

This is the list of available scripts that you can run in the project directory:

```
### vite
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.
The page will reload if you make edits.
You will also see any lint errors in the console.

### vite build
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### vite preview
Starts a server that serves your built project.
The server will use port 5000 by default unless it is already in use.

### vite lint
Runs [ESLint](https://eslint.org/) on your project.
```

## Project Structure

```
├── public
│   ├── vite.svg
├── src
│   ├── assets
│   │      ├── badgeDesign
│   │      ├── Logo Full.jpg
│   │      ├── 1.png
│   │      ├── 2.png
│   │      ├── 3.png
│   │      ├── 4.png
│   │      ├── 5.png
│   │      ├── 6.png
│   │      ├── 7.png
│   │      ├── 8.png
│   │      ├── 9.png
│   │      ├── 10.png
│   │      ├── 11.png
│   │      ├── 12.png
│   │      ├── 13.png
│   ├── components
│   │      ├── chapterCard
│   │      ├── courseCard
│   │      ├── dashboard
│   │      ├── dragDropFile
│   │      ├── forumcard
│   │      ├── forumcomment
│   │      ├── homeScreenLayout
│   │      ├── learningScreenLayout
│   │      ├── login
│   │      ├── moduleCard
│   │      ├── multipleChoice
│   │      ├── profile
│   │      ├── progressBelajar
│   │      ├── sidebar
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── .eslintrc.cjs
├── .gitignore
├── .package.json
├── .package-lock.json
├── .README.md
├── .LICENSE
└── .CHANGELOG.md
```

## Usage

To start the application, run the following command in the project directory:

```bash
vite
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
