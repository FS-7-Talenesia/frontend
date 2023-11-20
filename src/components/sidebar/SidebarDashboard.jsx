// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Image, UnorderedList, ListItem, Flex } from "@chakra-ui/react";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsBookFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";

import { Link } from "react-router-dom";

function SidebarDashboard() {
  return (
    <div>
      <Box
        width="20vw"
        boxShadow="dark-lg"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
        zIndex={99999}
        backgroundColor={"white"}
      >
        <Box>
          <Image
            src="/src/assets/Logo Full.jpg"
            alt="Logo Talenesia"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
        <Box m={2}>
          <UnorderedList
            m="10px"
            py={2}
            fontFamily="overlock"
            fontSize={15}
            px={2}
          >
            <Link to={`/`}>
              <ListItem
                listStyleType="none"
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={2}
              >
                <Flex align="center">
                  <Box as={AiFillHome} mr={2} />
                  Dashboard
                </Flex>
              </ListItem>
            </Link>

            <Link to={`/courses`}>
              <ListItem
                listStyleType="none"
                pt={5}
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={5}
              >
                <Flex align="center">
                  <Box as={BsBookFill} mr={2} />
                  <a href="#">KursusKu</a>
                </Flex>
              </ListItem>
            </Link>

            <Link to={`/profile`}>
              <ListItem
                listStyleType="none"
                pt={5}
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={5}
              >
                <Flex align="center">
                  <Box as={CgProfile} mr={2} />
                  Profile
                </Flex>
              </ListItem>
            </Link>

            <Link to={`/achievements`}>
              <ListItem
                listStyleType="none"
                pt={5}
                position="relative"
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={5}
              >
                <Flex align="center">
                  <Box as={GiProgression} mr={2} />
                  <a href="#">Achievement</a>
                </Flex>
              </ListItem>
            </Link>

            <Link to={`/grades`}>
              <ListItem
                listStyleType="none"
                pt={5}
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={5}
              >
                <Flex align="center">
                  <Box as={AiFillSetting} mr={2} />
                  <a href="#">Nilai</a>
                </Flex>
              </ListItem>
            </Link>

            <Link to={`/logout`}>
              <ListItem
                listStyleType="none"
                pt={5}
                _hover={{
                  background: "steelBlue",
                  color: "white",
                  padding: "8px",
                }}
                borderRadius="xl"
                p="4px"
                mt="4px"
                my={5}
              >
                <Flex align="center">
                  <Box as={BiLogOutCircle} mr={2} />
                  <a href="#">Log Out</a>
                </Flex>
              </ListItem>
            </Link>
          </UnorderedList>
        </Box>
      </Box>
    </div>
  );
}

export default SidebarDashboard;
