// eslint-disable-next-line no-unused-vars
import React from "react"
import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  Progress,
  Flex,
} from "@chakra-ui/react"
import { FaCalendarAlt } from "react-icons/fa"
import { IoIosAlarm } from "react-icons/io"

function Dashboard() {
  return (
    <>
      <Box w="100vw" h="100%" p={4} top={0} left={0} ml={250} maxWidth="80vw">
        <Stack m={2} p={2}>
          <Text fontSize={29} fontFamily={"Overlock"}>
            Selamat Datang, User
          </Text>
        </Stack>
        {/* Pelajaran yang sedang dilakukan */}
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={6}
          width="100%"
          // height="50%"
          maxHeight="85vh"
        >
          <GridItem w="100%" h="100%" bg="steelBlue" rounded={25}>
            <Text
              fontSize="1.55rem"
              m={2}
              p={2}
              fontFamily={"Overlock"}
              color="white"
            >
              Lanjut Belajar Yuk
            </Text>
            <Grid templateRows="repeat(2, 1fr)" gap={1} mx={4}>
              <GridItem w="100%" h="100%" bg="deepBlueSea" rounded={10}>
                <Text
                  fontSize="17px"
                  my={1}
                  mx={1}
                  p={0.5}
                  fontFamily="Overlock"
                  color="white"
                  fontWeight="bold"
                >
                  Kursus Belajar HRGA
                </Text>
                <Stack>
                  <Progress
                    colorScheme="green"
                    size="xs"
                    hasStripe
                    value={75}
                    mx={2}
                  ></Progress>
                </Stack>
                <Text my={1} mx={1} p={0.5} color="white" fontFamily="overlock">
                  Progress Penyelesaian : 75%
                </Text>
                <Box bgColor="babyGreen" rounded={10} m={5} p={0.5}>
                  <Text
                    mx={2}
                    textAlign="center"
                    color="black"
                    fontFamily="overlock"
                    fontWeight="italic"
                  >
                    Lanjutkan Modul Terakhir: Belajar Cara Belajar 1
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </GridItem>
          {/* Event Selanjutnya */}
          <GridItem w="100%" h="100%" bg="steelBlue" rounded={25} name="">
            <Text
              fontSize="1.55rem"
              m={2}
              p={2}
              fontFamily={"Overlock"}
              color="white"
            >
              Event Selanjutnya
            </Text>
            <Box bg="white" m={3} rounded={10}>
              <Flex>
                <Box
                  bg="babyGreen"
                  width="30%"
                  height="100%"
                  m={1}
                  color="white"
                  rounded={10}
                >
                  <Box Align="center" m={2}>
                    <FaCalendarAlt size="2rem" />
                    <Text fontFamily="overlock" fontSize=".75rem">
                      1 Januari 2023
                    </Text>
                  </Box>
                </Box>
                <Box width="100%" height="100%" m={1}>
                  <Text
                    p={2}
                    m={2}
                    Align="justify-center"
                    fontFamily="overlock"
                  >
                    Live Session Belajar Cara Belajar 1
                  </Text>
                </Box>
              </Flex>
            </Box>
          </GridItem>
          {/* Diskusi Terbaru */}
          <GridItem w="100%" h="100%" bg="steelBlue" rounded={25}>
            <Text
              fontSize="1.55rem"
              m={2}
              p={2}
              fontFamily={"Overlock"}
              color="white"
            >
              Diskusi Terbaru
            </Text>
          </GridItem>
          {/* Tugas yang harus diselesaikan */}
          <GridItem w="100%" h="100%" bg="steelBlue" rounded={25} name="">
            <Text
              fontSize="1.55rem"
              m={2}
              p={2}
              fontFamily="Overlock"
              color="white"
            >
              Tugas Menunggu Diselesaikan
            </Text>
            <Box bg="white" m={3} rounded={10}>
              <Flex>
                <Box width="100%" height="100%" m={1} fontFamily="overlock">
                  <Text p={2} m={2} Align="justify-center">
                    Live Session Belajar Cara Belajar 1
                  </Text>
                </Box>
                <Box width="40%" height="100%" m={1} p={0.5}>
                  <Flex alignItems="center">
                    <IoIosAlarm size="2rem" color="orange" m={2} />
                    <Text
                      fontFamily="overlock"
                      fontSize="11px"
                      m={2}
                      p={2}
                      color="black"
                    >
                      3 hari 2 jam
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default Dashboard
