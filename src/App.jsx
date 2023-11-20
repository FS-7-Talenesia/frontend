import SidebarDashboard from "./components/sidebar/SidebarDashboard";
import Dashboard from "./pages/dashboard/dashboard";
import SidebarLearning from "./components/sidebar/SidebarLearning";
import Profile from "./pages/profile/Profile";
import Badges from "./components/progressBelajar/Badges";
import Grade from "./components/progressBelajar/Grade";

import { Flex } from "@chakra-ui/react";
import Discussion from "./pages/discussion/discussion";
import Quiz from "./pages/quiz/quiz";
import Material from "./pages/material/material";
import ForumDetail from "./pages/forumDetail/forumDetail";
import PreQuiz from "./pages/preQuiz/preQuiz";
import QuizReview from "./pages/quizreview/quizReview";
import FileSubmission from "./pages/fileSubmission/fileSubmission";

function App() {
  return (
    <div>
      <Flex>
        <SidebarDashboard />
        {/* <Grade /> */}
        {/* <Badges /> */}
        {/* <Profile /> */}
      </Flex>
      {/* <Dashboard /> */}
      {/* <SidebarLearning /> */}
      {/* <Quiz /> */}
      {/* <Discussion /> */}
      {/* <Material /> */}
      {/* <ForumDetail /> */}
      {/* <PreQuiz /> */}
      {/* <QuizReview /> */}
      {/* <FileSubmission /> */}
    </div>
  );
}

export default App;
