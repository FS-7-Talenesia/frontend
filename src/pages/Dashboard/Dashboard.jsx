import { Flex } from "@chakra-ui/react";
import SidebarDashboard from "../../components/sidebar/SidebarDashboard";
import DashboardComponent from "../../components/dashboard/DashboardComponent";
function Dashboard() {
  return (
    <div>
      <Flex>
        <SidebarDashboard />
        <DashboardComponent />

        {/* <Grade /> */}
        {/* <Badges /> */}
        {/* <Profile /> */}
      </Flex>
    </div>
  );
}
export default Dashboard;
