// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Grid, GridItem, Text, Flex, Stack } from "@chakra-ui/react";
import { IoPeopleCircleSharp, IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProfileComponents() {
  return (
    <>
      <Box w="100vw" h="100%" p={4} top={0} left={0} ml={350} maxWidth="80vw">
        <Stack m={2} p={2}>
          <Text fontSize={29} fontFamily={"Overlock"}>
            My Profile
          </Text>
        </Stack>
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem colSpan={2} colsSpan={2} bg="deepBlueSea" rounded={20}>
            <Box>
              <Flex>
                <Box p={2} m={2}>
                  <IoPeopleCircleSharp
                    // bgColor="red"
                    color={"white"}
                    size={200}
                  />
                </Box>
                <Grid
                  templateRows="repeat(1, .5fr)"
                  templateColumns="repeat(2, .5fr)"
                  gap={1}
                  fontFamily={"overlock"}
                >
                  <GridItem
                    rowSpan={1}
                    colSpan={2}
                    // bg="tomato"
                    my={5}
                    p={5}
                    ml={"-2em"}
                    mt={"3rem"}
                  >
                    <Flex>
                      <IoLocationOutline color="white" />
                      <Text
                        fontFamily={"overlock"}
                        fontSize={".95rem"}
                        color={"white"}
                      >
                        Asia/Jakarta
                      </Text>
                    </Flex>
                    <Text
                      fontFamily={"overlock"}
                      fontSize={"3rem"}
                      my={"-1rem"}
                      color={"white"}
                    >
                      Tim Talenesia
                    </Text>
                    <Grid
                      templateColumns="repeat(4, .75fr)"
                      gap={0.5}
                      mt={4}
                      fontFamily={"overlock"}
                    >
                      <GridItem
                        w="80%"
                        h="100%"
                        // bg="blue.500"
                        fontFamily={"overlock"}
                      >
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          ID Profile
                        </Text>
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          A23342A
                        </Text>
                      </GridItem>
                      <GridItem
                        w="100%"
                        h="100%"
                        // bg="blue.500"
                        ml={"-.25rem"}
                        mr={2}
                        fontFamily={"overlock"}
                      >
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          Email Address
                        </Text>
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          timtalenesia@talenesia.com
                        </Text>
                      </GridItem>
                      <GridItem
                        w="100%"
                        h="100%"
                        // bg="blue.500"
                        ml={"1rem"}
                        fontFamily={"overlock"}
                      >
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          Phone
                        </Text>
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          +628129221
                        </Text>
                      </GridItem>
                      <GridItem
                        w="100%"
                        h="100%"
                        // bg="blue.500"
                        ml={"-1.12rem"}
                        fontFamily={"overlock"}
                      >
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          Kota
                        </Text>
                        <Text
                          fontFamily={"overlock"}
                          fontSize={"12px"}
                          my={"5px"}
                          px={2}
                          color={"white"}
                        >
                          Jakarta
                        </Text>
                      </GridItem>
                    </Grid>
                  </GridItem>
                  <GridItem
                    rowSpan={1}
                    colSpan={1}
                    bg="leafGreen"
                    rounded={20}
                    ml={"-2rem"}
                    mb={"10px"}
                    mt={"-2.4rem"}
                    mx={"-1rem"}
                    width={"50%"}
                  >
                    <Text color="white" m={1} mx={4} textAlign={"center"}>
                      Accountant
                    </Text>
                  </GridItem>
                </Grid>
              </Flex>
            </Box>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="deepBlueSea"
            rounded={20}
            height={"100%"}
            maxHeight={"100vh"}
            mb={5}
          >
            <Text
              fontSize="25px"
              my={1}
              mx={"1rem"}
              p={0.5}
              fontFamily="Overlock"
              color="white"
              fontWeight="bold"
            >
              Kursus yang Saya Ikuti
            </Text>
            <Link to="/courses/modules" style={{ textDecoration: "none" }}>
              <Box bg="leafGreen" p={3} m={2} mx={5} rounded={20}>
                <Text
                  fontSize="17px"
                  my={0.6}
                  mx={2}
                  p={0.2}
                  fontFamily="Overlock"
                  color="white"
                  fontWeight="bold"
                >
                  Kelas Intensif - Administrasi Perkantoran
                </Text>
                <Text
                  fontSize="15px"
                  my={0.6}
                  mx={2}
                  p={0.2}
                  fontFamily="Overlock"
                  color="white"
                  fontWeight="italic"
                >
                  Progress Penyelesaian: 25%
                </Text>
              </Box>
            </Link>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="deepBlueSea"
            rounded={20}
            height={"100%"}
            maxHeight={"100vh"}
            mb={5}
          >
            <Text
              fontSize="25px"
              my={1}
              mx={"1rem"}
              p={0.5}
              fontFamily="Overlock"
              color="white"
              fontWeight="bold"
            >
              Sesi Aktif Saya
            </Text>
            <Box bg="leafGreen" p={3} m={2} mx={5} rounded={20}>
              <Text
                fontSize="17px"
                my={0.6}
                mx={2}
                p={0.2}
                fontFamily="Overlock"
                color="white"
                fontWeight="bold"
              >
                Akses pertama kali
              </Text>
              <Text
                fontSize="15px"
                my={0.6}
                mx={2}
                p={0.2}
                fontFamily="Overlock"
                color="white"
                fontWeight="italic"
              >
                20 November 2023, 23.36
              </Text>
            </Box>
            <Box bg="leafGreen" p={3} m={2} mx={5} rounded={20}>
              <Text
                fontSize="17px"
                my={0.6}
                mx={2}
                p={0.2}
                fontFamily="Overlock"
                color="white"
                fontWeight="bold"
              >
                Akses terakhir kali
              </Text>
              <Text
                fontSize="15px"
                my={0.6}
                mx={2}
                p={0.2}
                fontFamily="Overlock"
                color="white"
                fontWeight="italic"
              >
                21 November 2023, 16.15
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default ProfileComponents;
