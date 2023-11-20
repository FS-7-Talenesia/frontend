// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { Text, Radio, RadioGroup, Box, VStack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function MultipleChoice({ question, choices, handler, selectedChoice }) {
  return (
    <div>
      <Text textStyle="h3" fontWeight="normal" mb={4}>
        {question}
      </Text>
      <RadioGroup
        onChange={handler ? handler : () => {}}
        value={selectedChoice ? selectedChoice : ""}
      >
        {choices.map((choice, index) => (
          <VStack key={index}>
            <Box
              as="label"
              htmlFor={`choice-${index}`}
              borderRadius="md"
              border="1px solid"
              bg={selectedChoice === choice ? "babyGreen" : "light.100"}
              textStyle="body1Normal"
              width="100%"
              px={8}
              py={3}
              mb={3}
            >
              <Radio id={`choice-${index}`} value={choice}>
                {choice}
              </Radio>
            </Box>
          </VStack>
        ))}
      </RadioGroup>
      {/* <p>You selected: {selectedChoice}</p> */}
    </div>
  );
}

export default MultipleChoice;
