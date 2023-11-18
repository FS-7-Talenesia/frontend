// eslint-disable-next-line no-unused-vars
import SidebarDashboard from "./components/sidebar/SidebarDashboard"
import Dashboard from "./pages/dashboard/dashboard"
import SidebarLearning from "./components/sidebar/SidebarLearning"
import Profile from "./pages/profile/Profile"

import { Flex } from "@chakra-ui/react"

function App() {
  return (
    <div>
      <Flex>
        <SidebarDashboard />
        <Profile />
      </Flex>
      {/* <Dashboard /> */}
      {/* <SidebarLearning /> */}
    </div>
  )
}

export default App
