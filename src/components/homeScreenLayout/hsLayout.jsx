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

function HsLayout({ breadOne, breadTwo, breadThree, breadFour }) {
  const lastBreadcrumb = breadFour || breadThree || breadTwo || breadOne;

  return (
    <div>
      <Button
        background="babyGreen"
        my={70}
        position={"fixed"}
        _hover={{ background: "leafGreen" }}
        borderRadius="0 10px 10px 0"
        left={0}
      >
        <MdMenu color="dark.100" />
      </Button>
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
    </div>
  );
}

export default HsLayout;
