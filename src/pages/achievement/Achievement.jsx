import { Flex } from "@chakra-ui/react";
import SidebarDashboard from "../../components/sidebar/SidebarDashboard";
import Badges from "../../components/progressBelajar/Badges";

function Achievement() {
  return (
    <>
      <Flex>
        <SidebarDashboard />
        <Badges />
      </Flex>
    </>
  );
}

export default Achievement;
