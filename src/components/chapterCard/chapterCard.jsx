import React from 'react';
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
  StackDivider,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { GoLock, GoCheck,  GoCalendar, GoClock } from 'react-icons/go';

const ChapterCard = () => {
  return (
    <Card mb = "4vh" maxW="20vw" variant="elevated" border="solid" borderColor="green.500">
        <Image
          objectFit="cover" 
          height="20vh"
          src="https://i.pinimg.com/564x/61/df/c6/61dfc647ee1b3a2792c0d6d2e3b434da.jpg"
          alt="Card Image"
        />

<CardBody>
    <Stack divider={<StackDivider />} >
      <Box>
        <Heading size='sm' align="center">
          Spreadsheet & Excel 1
        </Heading>
      </Box>

      <Box>
      <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack >
                  <Icon as={GoCalendar} color="purple.500" boxSize={4} />
                  <Text fontSize='sm'color="purple.500">14 Materi</Text>
                </HStack>
              </Box>
              <Box>
                <HStack >
                  <Icon as={GoClock} color="purple.500" boxSize={4} />
                  <Text fontSize='sm'color="purple.500">14 Jam</Text>
                </HStack>
              </Box>
              <Box >
                <HStack>
                  <Icon as={GoCheck} color="green.500" boxSize={4} />
                  <Text fontSize='sm'color="green.500">Selesai</Text>
                </HStack>
            </Box>
        </Flex>
      </Box>
      
    </Stack>
  </CardBody>

    </Card>
  );
};

export default ChapterCard;
