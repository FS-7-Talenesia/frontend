import React, { useState, useRef } from "react";
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
import { Worker } from "@react-pdf-viewer/core";

import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const Material = () => {
  const [isFinished, setFinished] = useState(false);
  const boxRef = useRef(null);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setFinished(true);
    }
  };
  return (
    <Container display="flex" flexDir="column" maxW="4xl" minH="100vh">
      <LsLayout
        courseName="Menjadi Admin Perkantoran"
        moduleName="Onboarding dan Pengenalan Materi"
        chapterName="Kuiz : Belajar Cara Belajar 1"
        finish={isFinished}
        layoutType="badge"
      ></LsLayout>

      <div
        style={{ overflowX: "auto", maxHeight: "80vh" }}
        onScroll={handleScroll}
        ref={boxRef}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer fileUrl="/src/pages/material/Pengenalan_Profesi_Admin.pdf" />
        </Worker>
      </div>
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
            <Text ml={2}>Slide Sebelumnya</Text>
          </Button>
          <Spacer />
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            // onClick={handleNext}
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
