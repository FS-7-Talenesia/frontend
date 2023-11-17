import ForumCard from "../../components/forumCard/forumCard";
import { Container } from "@chakra-ui/react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";

function Discussion() {
  return (
    <div>
      <Container maxW="4xl">
        <LsLayout
          courseName="Menjadi Admin Perkantoran"
          moduleName="Onboarding dan Pengenalan Materi"
          chapterName="Diskusi Studi Kasus : Belajar Cara Belajar 1"
          finish={true}
          layoutType="badge"
        ></LsLayout>

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
          status="close"
          answerCount={3}
        />
      </Container>
    </div>
  );
}

export default Discussion;
