import React, { useState } from "react";
import "./multipleChoice.css";
import { Text, Radio, RadioGroup } from "@chakra-ui/react";

function MultipleChoice({ question, choices, onChoiceChange }) {
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
    onChoiceChange(choice);
  };

  return (
    <div className="multipleChoice">
      <Text textStyle="h2">{question}</Text>
      <RadioGroup
        onChange={handleChoiceChange}
        value={selectedChoice}
        textStyle="h3"
      >
        {choices.map((choice, index) => (
          <Radio key={index} value={choice}>
            {choice}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

export default MultipleChoice;
