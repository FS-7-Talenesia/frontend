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
import { MdOutlineModeComment } from "react-icons/md";

function ForumComment({ title, content, author, date, selected }) {
  return (
    <div>
      <Card variant="outline" my={4} borderColor="gray.500">
        <CardHeader pb={0}>
          <HStack>
            <VStack alignItems="left">
              <Text textStyle="h3">{title}</Text>
              <Text textStyle="caption1Normal">oleh {author}</Text>
            </VStack>

            <Spacer />
            {selected === true && (
              <Badge colorScheme="green">Jawaban Terpilih</Badge>
            )}
          </HStack>
        </CardHeader>
        <CardBody>
          <Text textStyle="body1Normal" mb={2}>
            {content}
          </Text>
          <HStack pb={3}>
            <MdOutlineModeComment fontSize="24px" />
            <Text textStyle="body1Normal" ml={1}>
              Balas
            </Text>
          </HStack>
          <Text textStyle="caption1Normal">{date}</Text>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForumComment;
