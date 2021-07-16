import React, { useEffect, useState } from "react";
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
let progressIntervalReference;
let finishTimerReference;
const tickValue = 10;
const defaultProgressStep = 90 / (15000 / tickValue);
const Solution = () => {
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState(defaultProgressStep);

  useEffect(() => {
    if (loading) {
      progressIntervalReference = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 90) {
            return prevProgress + progressStep;
          } else {
            clearInterval(progressIntervalReference);
            return prevProgress;
          }
        });
      }, tickValue);
    } else {
      clearInterval(progressIntervalReference);
    }

    if (finished && !loading) {
      progressIntervalReference = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 100) {
            return prevProgress + progressStep;
          } else {
            clearInterval(progressIntervalReference);
            finishTimerReference = setTimeout(() => {
              setProgress(0);
              clearTimeout(finishTimerReference);
            }, 3000);
            return 100;
          }
        });
      }, tickValue);
    }
    return () => {
      clearInterval(progressIntervalReference);
      clearTimeout(finishTimerReference);
    };
  }, [loading, progressStep, finished]);

  const handleStartRequest = () => {
    setProgressStep(defaultProgressStep);
    setLoading(true);
  };

  const handleFinihRequest = () => {
    setProgressStep((100 - progress) / (1000 / tickValue));
    setLoading(false);
    setFinished(true);
  };

  return (
    <div>
      <div>Add solution here</div>
      <ProgressBar percent={progress} />
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
