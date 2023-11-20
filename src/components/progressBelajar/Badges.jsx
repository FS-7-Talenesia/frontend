// eslint-disable-next-line no-unused-vars
import React from "react"
import { Box, Stack, Text, Flex, Divider } from "@chakra-ui/react"

function Badges() {
  return (
    <>
      <Box w="100vw" h="100%" p={4} top={0} left={0} ml={250} maxWidth="80vw">
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
          <Flex mt="1rem">
            <Box
              bg="tomato"
              w="30%"
              h={"30%"}
              p={4}
              color="white"
              rounded={"full"}
            >
              This is the Box
            </Box>
            <Box bg="blue" w="100%" p={4} color="white">
              This is the Box
            </Box>
            <Box bg="yellow" w="100%" p={4} color="white">
              This is the Box
            </Box>
          </Flex>
          <Flex>
            <Text>Woow</Text>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default Badges
