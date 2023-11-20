import React from "react";
import { Flex } from "@chakra-ui/react";
import SidebarDashboard from "../../components/sidebar/SidebarDashboard";
import Grade from "../../components/progressBelajar/Grade";
function Grades() {
  return (
    <>
      <Flex>
        <SidebarDashboard />
        <Grade />
      </Flex>
    </>
  );
}

export default Grades;
