import { Container, Progress, VStack } from "@chakra-ui/react";
import HsLayout from "../../components/homeScreenLayout/hsLayout";
import ModuleCard from "../../components/moduleCard/moduleCard";

import {
  Box,
  Link,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import ChapterCard from "../../components/chapterCard/chapterCard";

function ChapterSelection() {
  const modules = [
    {
      title: "Onboarding Dan Pengenalan Materi",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nuncLorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.",
      image: "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "2",
      chapter: "4",
      moduleStatus: "Selesai",

    },
    {
      title: "Mengenal Microsoft Office dan Google Workspace",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.adsadadsadaoskdosakdoakdakdadkosakdosadkosadmsaodmasdsadsadsadsadsad",
      image: "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "4",
      chapter: "10",
      moduleStatus: "BelumSelesai",


    },{
      title: "Mengenal fitur-fitur Google untuk kolaborasi",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.",
      image: "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "3",
      chapter: "10",
      moduleStatus: "Locked",
    },
    {
      title: "Spreadsheet dan Excel",
      content:
        "Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc.",
      image: "https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg",
      waktu: "6",
      chapter: "1",
      moduleStatus: "Locked",
    },
    
  ];

  return (
    <Container maxW="100vw" backgroundColor="#F8F8FA">
        <Box ml="20vw">
            <HsLayout breadOne="Admin Perkantoran" breadTwo="Kursus Saya" breadThree="Module" breadFour="Spreadsheet dan Excel"layoutType="badge" />
            
            <Box mb="5vh" width="67vw" height="40vh" position="relative" rounded={10} border={"solid"} borderColor={"green"}>
            <Image
            rounded={10}
                fit="cover"
                src="https://img.freepik.com/free-vector/abstract-wave-colorful-banner-design_1055-8490.jpg"
                alt="Background Image"
                width="100%"
                height="100%"
                objectFit="cover"

            />
            </Box>

            <Progress rounded={100} mb="5vh" size="lg" width="67vw" colorScheme="linkedin" value={50} border={"1px"}/>

            <VStack align="stretch" mb="5vh">
            <SimpleGrid width="70vw" columns={{ base: 1, md: 3 }} spacing={4}>
                {modules.map((module, index) => (
                <ChapterCard
                    key={index}
                    title={module.title}
                    content={module.content}
                    image={module.image}
                    waktu={module.waktu}
                    chapter={module.chapter}
                    moduleStatus={module.moduleStatus}
                />
                ))}
            </SimpleGrid>
            </VStack>
        </Box>
        </Container>

  );
}

const handleCardClick = (index) => {
  console.log(`Card at index ${index} clicked!`);
};


export default ChapterSelection;
