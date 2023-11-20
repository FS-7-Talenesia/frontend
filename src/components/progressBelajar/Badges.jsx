// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Divider,
  Image,
  VStack,
} from "@chakra-ui/react";
import SidebarDashboard from "../sidebar/SidebarDashboard";
import badgePaths from "./badgePath.json";
import { IoLockClosed } from "react-icons/io5";

function Badges() {
  return (
    <>
      <SidebarDashboard />
      <Box
        w="100vw"
        h="100%"
        p={8}
        top={0}
        left={0}
        ml={"20vw"}
        maxWidth="80vw"
      >
        <Stack m={2} p={2}>
          <Text fontSize={29} fontFamily={"Overlock"}>
            Achievement
          </Text>
        </Stack>
        <Divider borderColor="black" />
        <Stack m={2} p={2}>
          <Text fontSize={20} fontFamily={"Overlock"}>
            Kelas Intensif - Admin Perkantoran
          </Text>
        </Stack>
        <Box bgColor="deepBlueSea" p="2" m="4" rounded={25}>
          <Flex
            mt="1rem"
            overflowX="scroll"
            scrollBehavior="smooth"
            sx={{
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "24px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#29B574",
                borderRadius: "24px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            {badgePaths.map((badge, index) => (
              <VStack
                key={index}
                color="white"
                minWidth={"180px"}
                mr={4}
                mb={4}
                position={"relative"}
              >
                <Image
                  src={badge.path}
                  boxSize={"140px"}
                  filter={badge.completed ? "none" : "grayscale(100%)"}
                />
                {!badge.completed && (
                  <Box
                    position="absolute"
                    top="40%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                  >
                    <IoLockClosed size="40px" color="black" />
                  </Box>
                )}
                <Text textStyle="h4">{badge.name}</Text>
              </VStack>
            ))}
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Badges;
