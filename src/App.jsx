import Discussion from "./pages/discussion/discussion";
import Quiz from "./pages/quiz/quiz";
import ModuleSelection from "./pages/moduleSelection/moduleSelection"
import ChapterSelection from "./pages/chapterSelection/chapterSelection"
import SidebarDashboard from "./components/sidebar/SidebarDashboard";
import SidebarLearning from "./components/sidebar/SidebarLearning";
import Material from "./pages/material/material";
import Login from "./pages/loginPage/login.jsx"
import React from 'react';

const apiUrl = "https://fs-7-talenesia-backend.vercel.app";


function App() {
  return (
    <div
    >
      {/* <Quiz /> */}
      {/* { <Discussion /> } */}
      {/* <Login/> */}
       {/* <ModuleSelection/>  */}
       <Login/>
       {/* <ChapterSelection/> */}

      {/* <Quiz /> */}
      {/* <Discussion /> */}
      {/* <Material /> */}
    </div>
  );
}
export { apiUrl };
export default App;
