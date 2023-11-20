import { useState } from "react";
import {
  Container,
  Button,
  Box,
  Text,
  Flex,
  Badge,
  Spacer,
  HStack,
  Image,
  Textarea,
  DarkMode,
} from "@chakra-ui/react";

import SidebarLearning from "../../components/sidebar/SidebarLearning";
import { MdMenu } from "react-icons/md";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { MdListAlt, MdOutlineModeComment } from "react-icons/md";
import ForumComment from "../../components/forumComment/forumComment";

function ForumDetail() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      {/* Sidebar */}
      <Button
        background="babyGreen"
        my={10}
        position={"fixed"}
        _hover={{ background: "leafGreen" }}
        borderRadius="0 10px 10px 0"
        left={0}
        onClick={() => setIsSidebarOpen(true)}
      >
        <MdMenu color="dark.100" />
      </Button>
      <Box
        position="fixed"
        top={0}
        left={isSidebarOpen ? 0 : "-100%"}
        width="30vw"
        height="100vh"
        background="white"
        transition="all 0.4s ease-in-out"
        boxShadow="md"
        zIndex={999}
      >
        <SidebarLearning onClose={() => setIsSidebarOpen(false)} />
      </Box>

      {/* Content */}
      <Container maxW="4xl" py={10}>
        <Button
          backgroundColor="deepBlueSea"
          color="light.100"
          // onClick={handlePrevious}
          _hover={{ background: "steelBlue", color: "light.80" }}
          alignContent={"center"}
        >
          <HiArrowLeftCircle fontSize={25} />
          <Text ml={2}>Slide Sebelumnya</Text>
        </Button>

        {/* Heading */}

        <Box my="8">
          <HStack>
            <Text textStyle="h3">
              Bagaimana menjadi admin yang hebat di era digital saat ini?
            </Text>
            <Spacer />
            <Badge colorScheme={"red"}>
              {/* {finish === true ? "Sudah Selesai" : "Belum Selesai"} */}
              Belum Selesai
            </Badge>
          </HStack>
          <Text textStyle="h5" fontWeight="normal" mt={2}>
            oleh <strong>Joe Mama</strong>
          </Text>
        </Box>

        {/* Question */}

        <Text textStyle="body1Normal" textAlign="justify">
          Lorem ipsum dolor sit amet consectetur. Bibendum sagittis venenatis
          scelerisque ullamcorper. Sagittis lorem ut adipiscing lorem et. Odio
          ornare condimentum lorem pellentesque blandit accumsan. Dignissim eget
          quis tincidunt etiam eget enim proin sit. Convallis condimentum
          eleifend sed vel euismod varius. Risus porttitor ornare ullamcorper
          tincidunt varius gravida feugiat. Tortor suscipit quis vulputate sed
          nunc dapibus. Aliquam erat sit in at eu vulputate. Fames dictumst
          feugiat sed leo ac. Tellus id fusce eu urna sit euismod egestas proin.
        </Text>
        <Image src="https://i.imgur.com/Aws2q6D.gif" mt={4} />

        {/* Icon and Form */}
        <Flex flexDir="row">
          <Box mt={8} mr={4}>
            <HStack>
              <MdOutlineModeComment fontSize={28} />
              <Text textStyle="h4">9 Komentar</Text>
            </HStack>
          </Box>
          <Box mt={8}>
            <HStack>
              <MdListAlt fontSize={28} />
              <Text textStyle="h4">Diskusi Belajar Cara Belajar 1</Text>
            </HStack>
          </Box>
        </Flex>

        <Textarea placeholder="Tulis Jawaban" my={4} borderColor="gray.500" />
        <Button
          backgroundColor="deepBlueSea"
          color="light.100"
          // onClick={handlePrevious}
          _hover={{ background: "steelBlue", color: "light.80" }}
          alignContent={"center"}
        >
          Kirim
        </Button>

        <ForumComment
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          selected={true}
        />
        <ForumComment
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          selected={false}
        />
      </Container>
    </div>
  );
}
export default ForumDetail;
