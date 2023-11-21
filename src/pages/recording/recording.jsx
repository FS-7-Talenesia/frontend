import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Divider,
  HStack,
  Button,
  Spacer,
  Text,
} from "@chakra-ui/react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";
import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

const Recording = () => {
  const [isFinisihed, setFinished] = useState(false);

  return (
    <Container display="flex" flexDir="column" maxW="4xl" minH="100vh">
      <LsLayout
        courseName="Menjadi Admin Perkantoran"
        moduleName="Onboarding dan Pengenalan Materi"
        chapterName="Kuiz : Belajar Cara Belajar 1"
        finish={isFinisihed}
        layoutType="badge"
      ></LsLayout>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/RhP73IaX-gA"
        title="#1 Persiapan Belajar Untuk Jadi Admin Belajar Cara Belajar 1 [Recording - 17 Mei 2023]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
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
            // onClick={handlePrevious}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <HiArrowLeftCircle fontSize={25} />
            <Text ml={2}>Bagian Sebelumnya</Text>
          </Button>
          <Spacer />
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            // onClick={handleNext}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <Text mr={2}>Bagian Selanjutnya</Text>
            <HiArrowRightCircle fontSize={25} />
          </Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default Recording;
