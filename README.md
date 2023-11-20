# Talenesia LMS Frontend

# Learning Management System( LMS ) Frontend

this is the frontend component of the LMS project, it is built with React and Vite, and using chakra-ui as the component library. It serves as the main interface for the LMS project.

## Table of Contents
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Project setup](#project-setup)   
- [React + Vite](#react-vite)

## Getting Started
 This is how you can get started with the project, make sure you have nodejs installed on your machine.
 
 First, clone the project:
```bash
git clone
```
Then, install the dependencies:
```bash
npm install
```
Finally, run the development server:
```bash
vite
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/App.jsx`. The page auto-updates as you edit the file.

## Available Scripts
 
    ### 'vite'
    Runs the app in the development mode.   
    Open http://localhost:3000 to view it in the browser.
    The page will reload if you make edits.
    You will also see any lint errors in the console.

    ### 'vite build'
    Builds the app for production to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.
    The build is minified and the filenames include the hashes.
    Your app is ready to be deployed!
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

    ### 'vite preview'  
    Starts a server that serves your built project.
    The server will use port 5000 by default unless it is already in use.

    ### 'vite lint'
    Runs [ESLint](https://eslint.org/) on your project.


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


## Project setup
```
npm install
```

# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
