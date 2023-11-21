// eslint-disable-next-line no-unused-vars

import Dashboard from "./pages/Dashboard/Dashboard"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import Profile from "./pages/profile/Profile"
import Achievement from "./pages/achievement/Achievement"
import CourseSelection from "./pages/courseSelection/courseSelection"
import Grades from "./pages/grades/Grades"
import ModuleSelection from "./pages/moduleSelection/moduleSelection"
import ChapterSelection from "./pages/chapterSelection/chapterSelection"
import Material from "./pages/material/material"
import Discussion from "./pages/discussion/discussion"
import Login from "./pages/loginPage/login"

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
    path: "/login",
    element: <Login />,
  },
])
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
