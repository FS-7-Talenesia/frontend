import { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Text,
  Spacer,
  Badge,
  HStack,
  Button,
} from "@chakra-ui/react";
import { MdChevronRight, MdMenu } from "react-icons/md";

function LsLayout({ courseName, moduleName, chapterName, finish, layoutType }) {
  const initialStartTime = Date.now();
  const [startTime, setStartTime] = useState(
    Number(localStorage.getItem("startTime")) || initialStartTime
  );
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    if (layoutType === "quiz" && !startTime) {
      const now = Date.now();
      setStartTime(now);
      localStorage.setItem("startTime", now.toString());
    }
  }, [layoutType, startTime]);

  useEffect(() => {
    if (layoutType === "quiz" && startTime) {
      const interval = setInterval(() => {
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - startTime) / 1000);
        const remainingTime = 600 - elapsedSeconds;
        if (remainingTime <= 0) {
          setStartTime(now);
          localStorage.setItem("startTime", now.toString());
          setTimer(600);
        } else {
          setTimer(remainingTime);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [layoutType, startTime]);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div>
      <Button
        background="babyGreen"
        my={10}
        position={"fixed"}
        _hover={{ background: "leafGreen" }}
        borderRadius="0 10px 10px 0"
        left={0}
      >
        <MdMenu color="dark.100" />
      </Button>
      <Box maxW="4xl">
        <Breadcrumb
          spacing="8px"
          separator={<MdChevronRight color="dark.80" />}
          mb={4}
          pt={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Kursus Saya</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">{courseName}</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">{moduleName}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box my={14}>
          <HStack>
            <Text textStyle="h1">{chapterName}</Text>
            <Spacer />
            {layoutType === "quiz" && (
              <Box textAlign="center">
                <Text textStyle="h4" color="dark.100" fontWeight="normal">
                  Sisa Waktu
                </Text>
                <Text textStyle="h3" color="dark.100">
                  {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              </Box>
            )}
            {layoutType === "badge" && (
              <Badge colorScheme={finish === true ? "green" : "red"}>
                {finish === true ? "Sudah Selesai" : "Belum Selesai"}
              </Badge>
            )}
          </HStack>
        </Box>
      </Box>
    </div>
  );
}
export default LsLayout;