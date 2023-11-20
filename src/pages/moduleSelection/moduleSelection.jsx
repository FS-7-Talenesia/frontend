import { Container, VStack } from "@chakra-ui/react";
import HsLayout from "../../components/homeScreenLayout/hsLayout";
import ModuleCard from "../../components/moduleCard/moduleCard";

import {
  Box,
  Link,
} from "@chakra-ui/react";

function ModuleSelection() {
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
    <Container maxW="100vw"  backgroundColor="#F8F8FA">
      <Box ml="20vw">
      <HsLayout breadOne="Admin Perkantoran" breadTwo="Kursus Saya" breadThree="Modul" layoutType="badge" />
      
      <VStack mb="-100px" align="stretch">
      {modules.map((module, index) => (
          <ModuleCard
            title={module.title}
            content={module.content}
            image={module.image}
            waktu={module.waktu}
            chapter={module.chapter}
            moduleStatus={module.moduleStatus}
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


export default ModuleSelection;
