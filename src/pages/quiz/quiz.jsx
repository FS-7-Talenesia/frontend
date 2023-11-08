import MultipleChoice from "../../components/multipleChoice/multipleChoice";
import {
  Container,
  Button,
  Text,
  Spacer,
  Box,
  HStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";

import quizDummyData from "./quizDummyData.json";
import { useState, useEffect } from "react";
import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

function Quiz() {
  const questions = quizDummyData;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState(
    Array(questions.length).fill(null)
  );

  useEffect(() => {
    const newSelectedChoices = [...selectedChoices];
    if (newSelectedChoices[currentQuestion] === undefined) {
      newSelectedChoices[currentQuestion] = null;
    }
    setSelectedChoices(newSelectedChoices);
  }, [currentQuestion]);

  const handleChoiceChange = (choice) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[currentQuestion] = choice;
    setSelectedChoices(newSelectedChoices);
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const question = questions[currentQuestion].question;
  const choices = questions[currentQuestion].choices;
  console.log(selectedChoices);
  return (
    <div>
      <Container display="flex" flexDir="column" maxW="4xl" minH="100vh">
        <LsLayout
          courseName="Menjadi Admin Perkantoran"
          moduleName="Onboarding dan Pengenalan Materi"
          chapterName="Kuiz : Belajar Cara Belajar 1"
          finish={true}
          layoutType="quiz"
        ></LsLayout>

        <Flex
          flexDir="row"
          maxW="500"
          py={3}
          flexWrap="wrap"
          ml="0"
          mr="0"
          m="auto"
        >
          {questions.map((_, index) => (
            <Box
              key={index}
              border="1px"
              borderColor="dark.100"
              width={10}
              py={2}
              textAlign="center"
              m={1}
              borderRadius={5}
              bg={currentQuestion === index ? "deepBlueSea" : "transparent"}
              color={currentQuestion === index ? "light.100" : "dark.100"}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </Box>
          ))}
        </Flex>

        <MultipleChoice
          question={question}
          choices={choices}
          handler={handleChoiceChange}
          selectedChoice={selectedChoices[currentQuestion]}
        />

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
              onClick={handlePrevQuestion}
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
              onClick={handleNextQuestion}
              _hover={{ background: "steelBlue", color: "light.80" }}
              alignContent={"center"}
            >
              <Text mr={2}>Soal Selanjutnya</Text>
              <HiArrowRightCircle fontSize={25} />
            </Button>
          </HStack>
        </Box>
      </Container>
    </div>
  );
}

export default Quiz;
