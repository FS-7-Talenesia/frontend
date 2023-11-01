import MultipleChoice from "../../components/multipleChoice/multipleChoice";
import {
  Container,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

function Quiz() {
  const question = "What is your favorite color?";
  const choices = ["Red", "Green", "Blue", "Yellow", "Orange"];

  return (
    <div>
      <Container maxW="4xl">
        <Breadcrumb
          spacing="8px"
          separator={<MdChevronRight color="dark.80" />}
          my={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Kursus Saya</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Menjadi Admin Perkantoran</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Belajar Cara Belajar</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box my={8}>
          <Text textStyle="h1">Judul Kuiz</Text>
        </Box>

        <MultipleChoice question={question} choices={choices} />
      </Container>
    </div>
  );
}

export default Quiz;
