import {
  Container,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Box,
  Divider,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";
import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

function QuizReview() {
  return (
    <Container display="flex" flexDir="column" maxW="4xl" minH="100vh">
      {/* header and sidebar */}
      <LsLayout
        courseName="Menjadi Admin Perkantoran"
        moduleName="Onboarding dan Pengenalan Materi"
        chapterName="Kuiz 1 Belajar Cara Belajar 1"
        finish={false}
        layoutType="quiz"
      />

      {/* Content */}
      <Text textStyle="h3" py={2}>
        Ringkasan Test: 10/10 pertanyaan sudah dijawab.
      </Text>

      {/* table */}
      <TableContainer my={6}>
        <Table variant="simple" colorScheme="gray" textStyle="body1Normal">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Pertanyaan</Th>
              <Th>Jawaban</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>What color is ur bugatti?</Td>
              <Td>Red</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>What is the capital of France?</Td>
              <Td>Paris</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Who painted the Mona Lisa?</Td>
              <Td>Leonardo da Vinci</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>What is the largest planet in our solar system?</Td>
              <Td>Jupiter</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>What is the chemical symbol for gold?</Td>
              <Td>Au</Td>
            </Tr>
            <Tr>
              <Td>6</Td>
              <Td>What is the capital of Japan?</Td>
              <Td>Tokyo</Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>Who wrote the novel "Pride and Prejudice"?</Td>
              <Td>Jane Austen</Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>What is the largest ocean on Earth?</Td>
              <Td>Pacific Ocean</Td>
            </Tr>
            <Tr>
              <Td>9</Td>
              <Td>What is the square root of 64?</Td>
              <Td>8</Td>
            </Tr>
            <Tr>
              <Td>10</Td>
              <Td>Who is the current president of the United States?</Td>
              <Td>Joe Biden</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Spacer />
      <Box
        my={6}
        mb={8}
        display="flex"
        justifyContent="flex-end"
        flexDir="column"
      >
        <Divider
          orientation="horizontal"
          borderColor="dark.80"
          size={4}
          mb={8}
        />
        <HStack>
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            //   onClick={handlePrevQuestion}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <HiArrowLeftCircle fontSize={25} />
            <Text ml={2}>Soal Sebelumnya</Text>
          </Button>
          <Spacer />
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            //   onClick={handleNextQuestion}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <Text mr={2}>Soal Selanjutnya</Text>
            <HiArrowRightCircle fontSize={25} />
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}
export default QuizReview;
