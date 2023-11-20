import {
  Badge,
  Card,
  CardHeader,
  HStack,
  Text,
  Spacer,
  VStack,
  CardBody,
} from "@chakra-ui/react";
import { GoCommentDiscussion } from "react-icons/go";

function ForumCard({
  title,
  content,
  author,
  date,
  status,
  answerCount,
  bgColor,
  color,
}) {
  return (
    <div>
      <Card
        variant="outline"
        my={6}
        borderColor="dark.80"
        bgColor={bgColor}
        color={color}
        rounded={15}
      >
        <CardHeader>
          <HStack>
            <VStack alignItems="left">
              <Text textStyle="h3">{title}</Text>
              <Text textStyle="caption1Normal">oleh {author}</Text>
            </VStack>

            <Spacer />
            <Badge colorScheme={status === "open" ? "green" : "red"}>
              {status === "open" ? "Sudah Selesai" : "Belum Selesai"}
            </Badge>
          </HStack>
        </CardHeader>
        <CardBody>
          <Text textStyle="body1Normal">{content}</Text>
          <HStack py={5}>
            <GoCommentDiscussion fontSize="28px" />
            <Text textStyle="body1Normal" pl={2}>
              {answerCount} jawaban
            </Text>
          </HStack>
          <Text textStyle="caption1Normal">{date}</Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForumCard;
