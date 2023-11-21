import React, { useRef, useState } from "react";
import { Box, Flex, Text, CloseButton, Button } from "@chakra-ui/react";
import { LuUploadCloud } from "react-icons/lu";
import { FaFilePdf, FaFileAlt, FaFileWord } from "react-icons/fa";

import axios from "axios";

function DragDropFile() {
  const inputFileRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleBoxClick = () => {
    inputFileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFiles([file]);
  };

  const handleFileSubmission = () => {
    const formData = new FormData();
    formData.append("file", files[0]);
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://fs-7-talenesia-backend.vercel.app/file/upload/submission/655b92f3af0f443905afce6f",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setFiles([event.dataTransfer.files[0]]);
      event.dataTransfer.clearData();
    }
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    inputFileRef.current.value = null;
  };

  const getFileIcon = (fileType) => {
    if (fileType === "application/pdf")
      return <FaFilePdf fontSize={"24px"} color="red" />;
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )
      return <FaFileWord fontSize={"24px"} color="blue" />;
    return <FaFileAlt fontSize={"24px"} />;
  };
  return (
    <form
      id="form-file-upload"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <Box
        display="flex"
        flexDir="column"
        p={10}
        border={"1px dashed gray"}
        borderRadius={"md"}
        alignItems="center"
        my={8}
        onClick={handleBoxClick}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="input-file-upload"
          multiple={false}
          ref={inputFileRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept=".doc,.docx,application/pdf"
        />
        <label id="label-file-upload">
          <Flex flexDir="column" justifyContent="center" alignItems="center">
            <LuUploadCloud fontSize="48px" />
            <Text textStyle="h4" my={4} fontWeight={"normal"}>
              Serahkan file tugas Anda di sini, atau klik untuk memilih file
            </Text>
            <Text textStyle={"caption1Normal"}>maks. ukuran file 2Mb</Text>
          </Flex>
        </label>
      </Box>

      {files.map((file, index) => (
        <Box
          key={index}
          w="100%"
          p={4}
          my={2}
          display="flex"
          flexDir="row"
          alignContent={"center"}
          border={"1px solid gray"}
          borderRadius={"md"}
        >
          {getFileIcon(file.type)}
          <Text textStyle={"h4"} ml={4}>
            {file.name}
          </Text>
          <CloseButton
            ml="auto"
            size={"sm"}
            onClick={() => handleRemoveFile(index)}
          />
        </Box>
      ))}

      <Box textAlign="center">
        <Button
          type="submit"
          backgroundColor="deepBlueSea"
          color="light.100"
          mb={8}
          _hover={{ backgroundColor: "blue" }}
          textStyle="body1Normal"
          onClick={handleFileSubmission}
        >
          Kirim Tugas
        </Button>
      </Box>
    </form>
  );
}

export default DragDropFile;
