import { Container, VStack } from "@chakra-ui/react";
import HsLayout from "../../components/homeScreenLayout/hsLayout";
import ModuleCard from "../../components/moduleCard/moduleCard";
import CourseCard from "../../components/courseCard/courseCard"


import {
  Box,
  Link,
} from "@chakra-ui/react";

function CourseSelection() {
  const courses = [
    {
      title: "Admin Perkantoran",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.",
      image: "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "15",
      chapter: "100",
      moduleStatus: "Selesai",

    }
  ];

  return (
    <Container maxW="100vw"  backgroundColor="#F8F8FA">
      <Box ml="20vw">
      <HsLayout breadOne="Admin Perkantoran" breadTwo="Kursus Saya" breadThree="Modul" layoutType="badge" />
      
      <VStack mb="-100px" align="stretch">
      {courses.map((courses, index) => (
          <CourseCard
            title={courses.title}
            content={courses.content}
            image={courses.image}
            waktu={courses.waktu}
            chapter={courses.chapter}
          />
      ))}
      </VStack>
      </Box>
    </Container>
  );
}

const handleCardClick = (index) => {
  console.log(`Card at index ${index} clicked!`);
};


export default CourseSelection;
