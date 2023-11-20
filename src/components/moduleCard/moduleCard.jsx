import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Stack,
  Box,
  Button,
  Image,
  Tooltip,
  HStack,
  Divider,
  Progress,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { GoCommentDiscussion, GoCheckCircle, GoLock } from "react-icons/go";
import { Link } from "react-router-dom";

function ModuleCard({
  title,
  content,
  image,
  waktu,
  chapter,
  moduleStatus,
  badgeStatus,
}) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("");
  const [isCardDisabled, setIsCardDisabled] = useState(false);
  const [isCardDone, setIsCardDone] = useState(false);
  const [isBadgeLocked, setIsBadgeLocked] = useState(false);

  useEffect(() => {
    if (moduleStatus === "BelumSelesai") {
      setButtonLabel("Lanjut");
      setIsBadgeLocked(true);
    } else if (moduleStatus === "Locked") {
      setButtonLabel("Terkunci");
      setIsBadgeLocked(true);
      setIsCardDisabled(true);
    } else {
      setIsCardDone(true);
      setButtonLabel("Tinjau Ulang");
    }
  }, [moduleStatus]);

  const toggleShowContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <Card
      mt="15px"
      maxW="90vw"
      width="70vw"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      opacity={isCardDisabled ? 0.4 : 1}
      backgroundColor={isCardDisabled ? "gray" : "white"}
      pointerEvents={isCardDisabled ? "none" : "auto"}
    >
      <HStack>
        <CardHeader>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "250px" }}
            src={
              isCardDisabled
                ? "https://img.freepik.com/premium-vector/locked-icon-isolated-white-background-vector-illustration_230920-1643.jpg"
                : image
            }
            alt={title}
            borderRadius="lg"
          />
        </CardHeader>

        <Stack spacing={-20}>
          <CardBody>
            <HStack justifyContent="space-between">
              <Heading size="lg">{title}</Heading>
              <Flex ml={10} alignItems="center" justify="center">
                {isBadgeLocked ? (
                  <Tooltip label="Badge Locked" placement="top" hasArrow>
                    <GoLock boxSize={6} color="gray.500" />
                  </Tooltip>
                ) : (
                  <Tooltip label="Unlocked" placement="top" hasArrow>
                    <GoCheckCircle boxSize={6} color="currentColor" />
                  </Tooltip>
                )}
              </Flex>
            </HStack>
            <Box width="60%">
              <Flex mb={2} width="100%">
                <Box mr={4}>
                  <HStack spacing={2}>
                    {
                      <Icon
                        as={GoCommentDiscussion}
                        color="green.500"
                        boxSize={4}
                      />
                    }
                    <Text color="purple.500" fontSize={14}>
                      Estimasi Penyelesaian: {waktu} Jam
                    </Text>
                  </HStack>
                </Box>
                <Box mr={5}>
                  <Text>|</Text>
                </Box>
                <Box>
                  <HStack>
                    {
                      <Icon
                        as={GoCommentDiscussion}
                        color="yellow.500"
                        boxSize={4}
                      />
                    }
                    <Text fontSize={14}>{chapter} Chapters</Text>
                  </HStack>
                </Box>
              </Flex>
            </Box>
            <Text>
              {showFullContent ? content : `${content.slice(0, 200)}...`}
              {content.length > 200 && (
                <Button
                  onClick={toggleShowContent}
                  variant="link"
                  colorScheme="blue"
                >
                  {showFullContent ? "Show Less" : "Show More"}
                </Button>
              )}
            </Text>

            <Progress
              mt={4}
              value={isCardDisabled ? 0 : isCardDone ? 100 : 50}
              aria-valuenow="50"
              role="progressbar"
              colorScheme={isCardDone ? "green" : "purple"}
              hasStripe={false}
              isAnimated={true}
            />
          </CardBody>
          <CardFooter mt={-4}>
            <Link
              to={`/courses/modules/chapters`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="solid"
                colorScheme={isCardDisabled ? "gray" : "blue"}
                disabled={isCardDisabled}
              >
                {buttonLabel}
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </HStack>
    </Card>
  );
}

export default ModuleCard;
