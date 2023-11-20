import {
  Box,
  Container,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  LinkBox,
} from "@chakra-ui/react";
import LsLayout from "../../components/learningScreenLayout/lsLayout";
import DragDropFile from "../../components/dragDropFile/dragDropFile";

function FileSubmission() {
  return (
    <div>
      <Container maxW={"4xl"}>
        <LsLayout
          courseName="Menjadi Admin Perkantoran"
          moduleName="Onboarding dan Pengenalan Materi"
          chapterName="Studi Kasus 1: Belajar Cara Belajar 1"
          finish={false}
          layoutType="badge"
        />
        <Image src="https://i.imgur.com/b7fSCKI.png" my={2} boxSize={"md"} />
        <Text textStyle="body1Normal" fontWeight="normal" my={6}>
          Intruksi: <br />
          1. Cermati Studi Kasus Diatas <br />
          2. Tuliskan jawabanmu dalam bentuk dokumen <br />
          3. Format penamaan dokumen: Nama_Studi kasus 1 Belajar Cara Belajar 1
          <br />
          4. Kumpulkan tugasmu ke LMS sebelum deadline tugas. <br />
          Link artikel:
          https://docs.google.com/document/d/1dnfEGZyStGhkHU3XD9QU1MhXwa6CdbDuAAIS6iPnjxY/edit
        </Text>
        {/* table */}
        <Box
          border={"1px solid gray"}
          borderRadius={"md"}
          my={6}
          p={3}
          textStyle={"body1Normal"}
        >
          <TableContainer borderRadius={"sm"}>
            <Table variant="striped" colorScheme="gray" textStyle="body1Normal">
              <Tbody>
                <Tr>
                  <Th>Status Pengujian</Th>
                  <Td>Anda Belum Mengirim Tugas</Td>
                </Tr>
                <Tr>
                  <Th>Status Penilaian</Th>
                  <Td>Belum Dinilai</Td>
                </Tr>
                <Tr>
                  <Th>Waktu Tersisa</Th>
                  <Td>2 Hari 8 Jam</Td>
                </Tr>
                <Tr>
                  <Th>Terakhir Diubah</Th>
                  <Td>Senin 19.00, 21 Desember 2023</Td>
                </Tr>
                <Tr>
                  <Th>Pengajuan Berkas</Th>
                  <Td>-</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>

        {/* File Submssion */}
        <DragDropFile />
      </Container>
    </div>
  );
}

export default FileSubmission;
