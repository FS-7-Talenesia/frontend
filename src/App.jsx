// eslint-disable-next-line no-unused-vars

import Dashboard from "./pages/Dashboard/Dashboard";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Profile from "./pages/profile/Profile";
import Achievement from "./pages/achievement/Achievement";
import CourseSelection from "./pages/courseSelection/courseSelection";
import Grades from "./pages/grades/Grades";
import ModuleSelection from "./pages/moduleSelection/moduleSelection";
import ChapterSelection from "./pages/chapterSelection/chapterSelection";
import Material from "./pages/material/material";
import Discussion from "./pages/discussion/discussion";
import Login from "./pages/loginPage/login";
import FileSubmission from "./pages/fileSubmission/fileSubmission";
import Quiz from "./pages/quiz/quiz";
import Recording from "./pages/recording/recording";
import QuizReview from "./pages/quizreview/quizReview";
import PreQuiz from "./pages/preQuiz/preQuiz";
import ForumDetail from "./pages/forumDetail/forumDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/courses",
    element: <CourseSelection />,
  },
  {
    path: "/achievements",
    element: <Achievement />,
  },
  {
    path: "/grades",
    element: <Grades />,
  },
  {
    path: "/logout",
    element: <CourseSelection />,
    // halaman non page
  },
  {
    path: "/courses/modules",
    element: <ModuleSelection />,
  },
  {
    path: "/courses/modules/chapters",
    element: <ChapterSelection />,
  },
  {
    path: "/learn",
    element: <Material />,
  },
  {
    path: "/learn/forum",
    element: <Discussion />,
  },
  {
    path: "/learn/quiz",
    element: <Quiz />,
  },
  {
    path: "/learn/casestudy",
    element: <FileSubmission />,
  },
  {
    path: "/learn/recording",
    element: <Recording />,
  },
  {
    path: "/learn/prequiz",
    element: <PreQuiz />,
  },
  {
    path: "/learn/summary",
    element: <QuizReview />,
  },
  {
    path: "/learn/discussion",
    element: <ForumDetail />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
