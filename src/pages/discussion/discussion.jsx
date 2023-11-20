import ForumCard from "../../components/forumCard/forumCard";
import { Container, Button, Text, Spacer, Box, HStack } from "@chakra-ui/react";
import { HiDocumentPlus, HiArrowRightCircle } from "react-icons/hi2";
import LsLayout from "../../components/learningScreenLayout/lsLayout";

function Discussion() {
  return (
    <div>
      <Container maxW="4xl">
        <LsLayout
          courseName="Menjadi Admin Perkantoran"
          moduleName="Onboarding dan Pengenalan Materi"
          chapterName="Diskusi Studi Kasus : Belajar Cara Belajar 1"
          finish={true}
          layoutType="badge"
        ></LsLayout>

        <Box
          my={6}
          mb={8}
          display="flex"
          justifyContent="flex-end"
          flexDir="column"
        >
          <HStack>
            <Button
              backgroundColor="deepBlueSea"
              color="light.100"
              // onClick={handlePrevQuestion}
              _hover={{ background: "steelBlue", color: "light.80" }}
              alignContent={"center"}
            >
              <HiDocumentPlus fontSize={25} />
              <Text ml={2}>Tambah Topik Diskusi</Text>
            </Button>
            <Spacer />
            <Button
              backgroundColor="deepBlueSea"
              color="light.100"
              // onClick={handleNextQuestion}
              _hover={{ background: "steelBlue", color: "light.80" }}
              alignContent={"center"}
            >
              <Text mr={2}>Ke Chapter Selanjutnya</Text>
              <HiArrowRightCircle fontSize={25} />
            </Button>
          </HStack>
        </Box>

        <ForumCard
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          status="open"
          answerCount={3}
        />
        <ForumCard
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          status="close"
          answerCount={3}
        />
        <ForumCard
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          status="close"
          answerCount={3}
        />
      </Container>
    </div>
  );
}

export default Discussion;
