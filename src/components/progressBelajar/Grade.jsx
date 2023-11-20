// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  Box,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
  AccordionButton,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react"

import { BsCardChecklist } from "react-icons/bs"

function Grade() {
  return (
    <>
      <Box w="100vw" h="100%" p={4} top={0} left={0} ml={350} maxWidth="80vw">
        <Stack m={2} p={2}>
          <Text fontSize={29} fontFamily={"Overlock"}>
            Rekapitulasi Nilai
          </Text>
        </Stack>
        <Accordion
          defaultIndex={[0]}
          fontFamily="overlock"
          allowToggle
          backgroundColor="darkblue"
          color="white"
          boxShadow="xl"
          rounded={10}
        >
          <AccordionItem>
            <h2>
              <AccordionButton color={"white"}>
                <Grid
                  templateColumns="repeat(5, 1fr)"
                  gap={"5rem"}
                  fontFamily={"overlock"}
                >
                  <GridItem w="100%" h="10" fontSize={20}>
                    Kelas Admin HRGA
                  </GridItem>
                  <GridItem w="100%" h="10" fontSize={20} ml={90}>
                    Nilai Course
                  </GridItem>
                  <GridItem w="100%" h="10" fontSize={20} ml={10} mr={"-5rem"}>
                    Rentang
                  </GridItem>
                  <GridItem
                    w="100%"
                    h="10"
                    fontSize={20}
                    ml={"-1rem"}
                    mr={"-10rem"}
                  >
                    Persentase
                  </GridItem>
                </Grid>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex>
                <Box py={2} mx={2}>
                  <BsCardChecklist size={25} />
                </Box>
                <Box ml={2}>
                  <Text>Quiz</Text>
                  <Text>Kuis- Pengenalan Profesi Admin</Text>
                </Box>
                <Box ml={"11rem"}>
                  <Text fontSize={20}>-</Text>
                </Box>
                <Box ml={"12.5rem"}>
                  <Text fontSize={20}>-</Text>
                </Box>
                <Box ml={"11.5rem"}>
                  <Text fontSize={20}>0%</Text>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Section 2 title
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  )
}

export default Grade
