import React from "react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";
import {
  Box,
  Container,
  Divider,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
} from "@chakra-ui/react";
import { HiArrowRightCircle } from "react-icons/hi2";

function PreQuiz() {
  return (
    <div>
      <Container maxW={"4xl"} minH="100vh">
        <LsLayout
          courseName="Menjadi Admin Perkantoran"
          moduleName="Onboarding dan Pengenalan Materi"
          chapterName="Kuiz 1 Belajar Cara Belajar 1"
          finish={false}
          layoutType="badge"
        ></LsLayout>
        <Box textStyle="h4" fontWeight={"normal"}>
          <Text>
            Jumlah Pertanyaan : <strong>5</strong>
          </Text>
          <Text>
            Jumlah Kesempatan : <strong>Tak terbatas</strong>
          </Text>
          <Text>
            Durasi Pengerjaan : <strong>10 Menit</strong>
          </Text>
          <Text>
            Metode Penilaian : <strong>Berdasarkan nilai Tertinggi</strong>
          </Text>
          <Text>
            Jumlah Pertanyaan : <strong>5</strong>
          </Text>
          Catatan :
          <strong>
            Kuiz ini dianjurkan selesai sebelum kelas Belajar Cara Belajar 1
            dimulai
          </strong>
        </Box>
        <Divider my={6} borderColor={"gray.400"} />
        {/* Content */}
        <Box>
          <Text textStyle="h3" py={2}>
            Riwayat Pengerjaan
          </Text>
          <Text textStyle="body1Normal">
            Kami hanya akan menampilkan nilai terbaik dari yang Anda telah
            selesaikan.
          </Text>
        </Box>
        {/* table */}
        <TableContainer my={6}>
          <Table variant="simple" colorScheme="gray" textStyle="body1Normal">
            <Thead>
              <Tr>
                <Th>Tanggal</Th>
                <Th>Kesempatan</Th>
                <Th isNumeric>Nilai</Th>
                <Th>Ulasan</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Senin, 17 Agustus 2023</Td>
                <Td>Ke -1 </Td>
                <Td isNumeric>80.0</Td>
                <Td>-</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box my={10} mb={8}>
          <Button
            backgroundColor="deepBlueSea"
            color="light.100"
            // onClick={handleNext}
            _hover={{ background: "steelBlue", color: "light.80" }}
            alignContent={"center"}
          >
            <Text mr={2}>Mulai Kuiz</Text>
            <HiArrowRightCircle fontSize={25} />
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default PreQuiz;
