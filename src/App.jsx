// eslint-disable-next-line no-unused-vars
import SidebarDashboard from "./components/sidebar/SidebarDashboard"
import Dashboard from "./pages/dashboard/dashboard"
import SidebarLearning from "./components/sidebar/SidebarLearning"
import Profile from "./components/profile/ProfileComponents"
import Badges from "./components/progressBelajar/Badges"
import Grade from "./components/progressBelajar/Grade"

import { Flex } from "@chakra-ui/react"

function App() {
  return (
    <div>
      <Flex>
        <SidebarDashboard />
        <Dashboard />

        {/* <Grade /> */}
        {/* <Badges /> */}
        {/* <Profile /> */}
      </Flex>
      {/* <SidebarLearning /> */}
    </div>
  )
}

export default App
