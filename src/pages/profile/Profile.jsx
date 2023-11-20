import React from "react"
import { Flex } from "@chakra-ui/react"
import SidebarDashboard from "../../components/sidebar/SidebarDashboard"
import ProfileComponents from "../../components/profile/ProfileComponents"

function Profile() {
  return (
    <>
      <Flex>
        <SidebarDashboard />
        <ProfileComponents />
      </Flex>
    </>
  );
}

export default Profile;
