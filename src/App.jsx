import SidebarDashboard from "./components/sidebar/SidebarDashboard";
import Dashboard from "./pages/dashboard/dashboard";
import SidebarLearning from "./components/sidebar/SidebarLearning";
import Profile from "./pages/profile/Profile";
import Badges from "./components/progressBelajar/Badges";
import Grade from "./components/progressBelajar/Grade";

import { Flex } from "@chakra-ui/react";
import Discussion from "./pages/discussion/discussion";
import Quiz from "./pages/quiz/quiz";
import ModuleSelection from "./pages/moduleSelection/moduleSelection"
import ChapterSelection from "./pages/chapterSelection/chapterSelection"
import SidebarDashboard from "./components/sidebar/SidebarDashboard";
import SidebarLearning from "./components/sidebar/SidebarLearning";
import Material from "./pages/material/material";
import Login from "./pages/loginPage/login.jsx"
import CourseSelection from "./pages/courseSelection/courseSelection.jsx"
import Material from "./pages/material/material";
import ForumDetail from "./pages/forumDetail/forumDetail";
import PreQuiz from "./pages/preQuiz/preQuiz";
import QuizReview from "./pages/quizreview/quizReview";
import FileSubmission from "./pages/fileSubmission/fileSubmission";
import React from 'react';

const apiUrl = "https://fs-7-talenesia-backend.vercel.app";


function App() {
  return (
    <div
    >
      {/* <Quiz /> */}
      {/* <Discussion /> */}
      {/* <Login/> */}
       {/* <ModuleSelection/>  */}
       {/* <Login/> */}
      {/* <CourseSelection/> */}
      {/* <ChapterSelection/> */}
      {/* <Quiz /> */}
      {/* <Discussion /> */}
      {/* <Material /> */}
      {/* <Grade /> */}
      {/* <Badges /> */}
      {/* <Profile /> */}
      {/* <Dashboard /> */}
      {/* <Material /> */}
      {/* <ForumDetail /> */}
      {/* <PreQuiz /> */}
      {/* <QuizReview /> */}
      {/* <FileSubmission /> */}


    </div>
  );
}
export { apiUrl };
export default App;
