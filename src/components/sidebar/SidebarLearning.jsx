// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Box,
  CloseButton,
  Text,
  Flex,
  Progress,
  LinkBox,
  Badge,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import "../sidebar/sidebar.css";
import { Link } from "react-router-dom";

function SidebarLearning({ onClose, isFinished }) {
  return (
    <div>
      {/* Module */}
      <Box width="30vw" height="100vh" boxShadow="dark-lg">
        <Flex>
          <Box p={4}>
            <CloseButton
              size="md"
              bg="statusRed"
              borderRadius="2xl"
              onClick={onClose}
            />
          </Box>
          <Box p={4} pr={2} pl={2}>
            <Text fontFamily="overlock" fontSize={23}>
              Daftar Modul
            </Text>
          </Box>
        </Flex>
        <Box pt={8} p={5}>
          <Progress colorScheme="blue" size="md" hasStripe value={20} />
          <Flex>
            <Text fontFamily="overlock">Progress Belajar Anda</Text>
            <Text pl={3} color="#29B574">
              20%
            </Text>
          </Flex>
        </Box>
        {/* Course Name */}
        <Accordion
          fontFamily="overlock"
          allowToggle
          backgroundColor="darkblue"
          color="white"
          boxShadow="xl"
        >
          <AccordionItem>
            <p>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontFamily="overlock">
                  Belajar Cara Belajar
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4}>
              <LinkBox>
                <Link to={`/learn`}>
                  <HStack
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    mb={2}
                    color="white"
                  >
                    <Text>Belajar Mandiri : Belajar Cara Belajar 1</Text>
                    <Spacer />
                    <Badge
                      colorScheme={isFinished ? "green" : "red"}
                      fontSize="sm"
                    >
                      {isFinished ? "Selesai" : "Belum Selesai"}
                    </Badge>
                  </HStack>
                </Link>

                <Link to={`/learn/quiz`}>
                  <HStack
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    mb={2}
                    color="white"
                  >
                    <Text>Kuiz</Text>
                    <Spacer />
                    <Badge
                      colorScheme={isFinished ? "green" : "red"}
                      fontSize="sm"
                    >
                      {isFinished ? "Selesai" : "Belum Selesai"}
                    </Badge>
                  </HStack>
                </Link>

                <Link to={`/learn/casestudy`}>
                  <HStack
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    mb={2}
                    color="white"
                  >
                    <Text>Studi Kasus</Text>
                    <Spacer />
                    <Badge
                      colorScheme={isFinished ? "green" : "red"}
                      fontSize="sm"
                    >
                      {isFinished ? "Selesai" : "Belum Selesai"}
                    </Badge>
                  </HStack>
                </Link>

                <Link to={`/learn/recording`}>
                  <HStack
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    mb={2}
                    color="white"
                  >
                    <Text>Recording</Text>
                    <Spacer />
                    <Badge
                      colorScheme={isFinished ? "green" : "red"}
                      fontSize="sm"
                    >
                      {isFinished ? "Selesai" : "Belum Selesai"}
                    </Badge>
                  </HStack>
                </Link>

                <Link to={`/learn/forum`}>
                  <HStack
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    mb={2}
                    color="white"
                  >
                    <Text>Diskusi Studi Kasus</Text>
                    <Spacer />
                    <Badge
                      colorScheme={isFinished ? "green" : "red"}
                      fontSize="sm"
                    >
                      {isFinished ? "Selesai" : "Belum Selesai"}
                    </Badge>
                  </HStack>
                </Link>
              </LinkBox>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <p>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Course Name
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </p>
            <AccordionPanel pb={4}>
              <LinkBox>
                <Link href="/google.com">
                  <Box
                    borderRadius={10}
                    backgroundColor="steelBlue"
                    p={3}
                    color="white"
                    _hover={{ background: "skyBlue" }}
                  >
                    lorem ipsum dolor siamet
                  </Box>
                </Link>
              </LinkBox>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
}

export default SidebarLearning;
