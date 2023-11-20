import { Container, VStack } from "@chakra-ui/react";
import HsLayout from "../../components/homeScreenLayout/hsLayout";
import ModuleCard from "../../components/moduleCard/moduleCard";
import CourseCard from "../../components/courseCard/courseCard";

import { Box } from "@chakra-ui/react";
import SidebarDashboard from "../../components/sidebar/SidebarDashboard";
import { Link } from "react-router-dom";

function CourseSelection() {
  const courses = [
    {
      title: "Admin Perkantoran",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.",
      image:
        "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "15",
      chapter: "100",
      moduleStatus: "Selesai",
    },
  ];

  return (
    <Container maxW="100vw" backgroundColor="#F8F8FA">
      <SidebarDashboard />
      <Box ml="22vw">
        <HsLayout
          breadOne="Admin Perkantoran"
          breadTwo="Kursusku"
          layoutType="badge"
        />

        <VStack mb="-100px" align="stretch">
          <Link to={`/courses/modules`} style={{ textDecoration: "none" }}>
            {courses.map((courses, index) => (
              <CourseCard
                title={courses.title}
                content={courses.content}
                image={courses.image}
                waktu={courses.waktu}
                chapter={courses.chapter}
              />
            ))}
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}

const handleCardClick = (index) => {
  console.log(`Card at index ${index} clicked!`);
};

export default CourseSelection;
