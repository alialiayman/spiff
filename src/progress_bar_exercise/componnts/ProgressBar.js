import React, { useEffect, useState } from "react";
import { Styled } from "./styled-components";

let progressIntervalReference;
let finishTimerReference;
const DEFAULT_TIMER_VALUE = 100;
const DEFAULT_PROGRESS_VALUE = 90 / (15000 / DEFAULT_TIMER_VALUE);

const ProgressBar = ({ loading, finished }) => {
  const [progress, setProgress] = useState(0);
  const [progressStep, setProgressStep] = useState(DEFAULT_PROGRESS_VALUE);

  useEffect(() => {
    if (finished && progress < 90) {
      setProgressStep((100 - progress) / (1000 / DEFAULT_TIMER_VALUE));
    }
  }, [finished, progress]);

  useEffect(() => {
    if (loading) {
      setProgressStep(DEFAULT_PROGRESS_VALUE);
      progressIntervalReference = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < 90) {
            return prevProgress + progressStep;
          } else {
            clearInterval(progressIntervalReference);
            return prevProgress;
          }
        });
      }, DEFAULT_TIMER_VALUE);
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
      }, DEFAULT_TIMER_VALUE);
    }
    return () => {
      clearInterval(progressIntervalReference);
      clearTimeout(finishTimerReference);
    };
  }, [loading, progressStep, finished]);

  return <Styled.ProgressBar percent={progress} />;
};

export default ProgressBar;
