import ForumCard from "../../components/forumCard/forumCard";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Box,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { MdChevronRight } from "react-icons/md";

function Discussion() {
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
          <Text textStyle="h1">Judul Forum</Text>
        </Box>

        <ForumCard
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          status="open"
          answerCount={3}
        />
        <ForumCard
          title="Bagaimana Menjadi Admin yang Hebat?"
          content="Lorem ipsum dolor sit amet consectetur. Viverra semper vulputate ante tristique elementum ut rhoncus urna nullam. Fusce tellus eget et sem aliquet nunc."
          author="Agus"
          date="17 Agustus 2023"
          status="open"
          answerCount={3}
        />
      </Container>
    </div>
  );
}

export default Discussion;
