import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Divider,
  HStack,
  Button,
  Spacer,
  Text,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  Progress,
  useSteps,
  Image,
} from "@chakra-ui/react";
// import LsLayout from "../../components/learningScreenLayout/lsLayout";
// import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";
// import Markdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import remarkSlug from "remark-slug";
// import remarkToc from "remark-toc";
// import remarkImages from "remark-images";

const Material = () => {
  const [isFinisihed, setFinished] = useState(false);

  const materials = [
    {
      title: "Slide 1: Belajar Cara Belajar",
      image:
        "https://img.freepik.com/free-vector/oversight-concept-illustration_114360-12434.jpg?t=st=1684078787~exp=1684079387~hmac=d5cc5cfd5e9e697eb932726d31f9e32934e3382ed2c7aef73a4e887ba334fa34",
      materialContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      title: "Slide 2: Motivasi Belajar",
      image:
        "https://img.freepik.com/free-vector/oversight-concept-illustration_114360-12434.jpg?t=st=1684078787~exp=1684079387~hmac=d5cc5cfd5e9e697eb932726d31f9e32934e3382ed2c7aef73a4e887ba334fa34",
      materialContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Slide 3: Teknik Belajar Efektif",
      image:
        "https://img.freepik.com/free-vector/oversight-concept-illustration_114360-12434.jpg?t=st=1684078787~exp=1684079387~hmac=d5cc5cfd5e9e697eb932726d31f9e32934e3382ed2c7aef73a4e887ba334fa34",
      materialContent:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      title: "Slide 4: Ringkasan Materi",
      image:
        "https://img.freepik.com/free-vector/oversight-concept-illustration_114360-12434.jpg?t=st=1684078787~exp=1684079387~hmac=d5cc5cfd5e9e697eb932726d31f9e32934e3382ed2c7aef73a4e887ba334fa34",
      materialContent:
        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: materials.length,
  });

  //next and previous button handler
  const handleNext = () => {
    if (activeStep < materials.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  //untuk atur progress stepper
  const max = materials.length - 1;
  const progressPercent = (activeStep / max) * 100;
  return (
    <Container display="flex" flexDir="column" maxW="4xl" minH="100vh">
      <LsLayout
        courseName="Menjadi Admin Perkantoran"
        moduleName="Onboarding dan Pengenalan Materi"
        chapterName="Kuiz : Belajar Cara Belajar 1"
        finish={isFinisihed}
        layoutType="badge"
      ></LsLayout>

      {materials.map((material, index) => (
        <Box
          key={index}
          display={index === activeStep ? "block" : "none"}
          mb={6}
        >
          <Text textStyle="h3"> {material.title}</Text>
          <Divider
            orientation="horizontal"
            borderColor="dark.80"
            size={4}
            my={4}
          />
          <Image src={material.image} />
          <Box>
            <Markdown
              remarkPlugins={[remarkGfm, remarkSlug, remarkToc, remarkImages]}
              children={material.materialContent}
            />
          </Box>
        </Box>
      ))}

      <Spacer />

      <Box position="relative">
        <Stepper size="sm" index={activeStep} gap="0">
          {materials.map((_, index) => (
            <Step key={index} gap="0">
              <StepIndicator bg="white">
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={progressPercent}
          position="absolute"
          height="3px"
          width="full"
          top="10px"
          zIndex={-1}
        />
      </Box>

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
            onClick={handlePrevious}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <HiArrowLeftCircle fontSize={25} />
            <Text ml={2}>Slide Sebelumnya</Text>
          </Button>
          <Spacer />
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            onClick={handleNext}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <Text mr={2}>Slide Selanjutnya</Text>
            <HiArrowRightCircle fontSize={25} />
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default Material;
