// eslint-disable-next-line no-unused-vars
import SidebarDashboard from "./components/sidebar/SidebarDashboard"
import Dashboard from "./pages/dashboard/dashboard"
import { Flex } from "@chakra-ui/react"
import SidebarLearning from "./components/sidebar/SidebarLearning"

function App() {
  return (
    <div>
      <Flex>
        <SidebarDashboard />
        <Dashboard />
      </Flex>
      {/* <SidebarLearning /> */}
    </div>
  )
}

export default App
