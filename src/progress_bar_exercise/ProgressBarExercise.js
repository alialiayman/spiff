import React, { useState } from "react";
import Exercise from "../exercise/Exercise";
import ProgressBar from "./componnts/ProgressBar";
import { Styled } from "./styled-components";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStartRequest = () => {
    setLoading(true);
  };

  const handleFinihRequest = () => {
    setLoading(false);
    setFinished(true);
  };

  return (
    <div>
      <div>Add solution here</div>
      <ProgressBar loading={loading} finished={finished} />
      <Styled.Container>
        <Styled.Button color="#2ebb9c" onClick={handleStartRequest}>{`${
          loading ? "Loading ..." : "Start Request"
        }`}</Styled.Button>
        <Styled.Button color="#f44336" onClick={handleFinihRequest}>
          Finish Request
        </Styled.Button>
      </Styled.Container>
    </div>
  );
};
