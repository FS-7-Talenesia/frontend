import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
  Spacer,
  Badge,
  HStack,
  Button,
} from "@chakra-ui/react";
import { MdChevronRight, MdMenu } from "react-icons/md";
import SidebarDashboard from "../sidebar/SidebarDashboard";



function HsLayout({ breadOne, breadTwo, breadThree, breadFour }) {
  const lastBreadcrumb = breadFour || breadThree || breadTwo || breadOne;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  return (
    <div>

      <Box>
        <Breadcrumb
          spacing="8px"
          separator={<MdChevronRight color="dark.80" />}
          mb={4}
          pt={4}
        >
          {breadOne && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {breadTwo && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{breadTwo}</BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {breadThree && (
            <BreadcrumbItem>
              <BreadcrumbLink href="#">{breadThree}</BreadcrumbLink>
            </BreadcrumbItem>
          )}

          {breadFour && (
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{breadFour}</BreadcrumbLink>
            </BreadcrumbItem>
          )}
        </Breadcrumb>
        <Box my={1}>
          <HStack>
            <Text textStyle="h1" fontSize="40px">{lastBreadcrumb}</Text>
          </HStack>
        </Box>
      </Box>
      <Box
        position="fixed"
        top={0}
        left={isSidebarOpen ? 0 : "-100%"}
        height="100vh"
        backgroundColor={"white"}
        transition="all 0.4s ease-in-out"
        zIndex={999}
      >
        <SidebarDashboard onClose={() => setIsSidebarOpen(false)} />
      </Box>
    </div>
  );
}

export default HsLayout;
