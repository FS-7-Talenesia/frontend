import React, { useState } from "react";
import MultipleChoice from "../../components/multipleChoice/multipleChoice";

function Quiz() {
  const [selectedChoice, setSelectedChoice] = useState("");
  const question = "What is your favorite color?";
  const choices = ["Red", "Green", "Blue"];

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  return (
    <div>
      <MultipleChoice
        question={question}
        choices={choices}
        selectedChoice={selectedChoice}
        onChoiceChange={handleChoiceChange}
      />
      <p>You selected: {selectedChoice}</p>
    </div>
  );
}

export default Quiz;
