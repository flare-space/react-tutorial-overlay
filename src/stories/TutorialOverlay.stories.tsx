import { useState } from "react";
import { storiesOf } from "@storybook/react";
import {
  TutorialOverlay,
  StepConfig,
  StepsConfig,
} from "../components/TutorialOverlay/TutorialOverlay";

const stories = storiesOf("Test", module);

stories.add("TutorialOverlay", () => {
  const [showTutorial, setShowTutorial] = useState(true);
  const config: StepsConfig = {
    steps: new Map<number, StepConfig>(),
    infoBoxHeight: 200,
    infoBoxMargin: 30,
    infoBoxThemeColor: "green",
    darkerBackground: true,
    scrollLock: true,
    infoBoxShadow: true,
    highlightBoxBorderColor: "green",
    highlightBoxBorderRadius: 3,
    highlightBoxBorderWidth: 3,
  };

  config.steps.set(1, {
    highlightIds: ["testEl"],
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "Hello",
  });

  config.steps.set(2, {
    highlightIds: ["testEl3", "testEl2"],
    info: "This is second step",
    title: "Hello again",
    infoBoxAlignment: "left",
  });

  config.steps.set(3, {
    highlightIds: ["testEl4"],
    info: "Thats all folks",
    title: "Adijo",
    infoBoxAlignment: "center",
  });

  const close = (): void => {
    console.log("close tutorial");
    setShowTutorial(false);
  };
  return (
    <>
      {showTutorial && (
        <TutorialOverlay config={config} closeCallback={close} />
      )}

      <div
        style={{ height: "100vh", backgroundColor: "lightblue", width: "100%" }}
      >
        <div
          id="testEl"
          style={{
            position: "absolute",
            left: "200px",
            top: "50px",
            height: "50px",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          First element
        </div>
        <div
          id="testEl1"
          style={{
            position: "absolute",
            left: "200px",
            top: "50px",
            height: "50px",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          Second element
        </div>
        <div
          id="testEl2"
          style={{
            position: "absolute",
            left: "500px",
            top: "50px",
            height: "50px",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          Third element
        </div>
        <div
          id="testEl3"
          style={{
            position: "absolute",
            left: "200px",
            top: "150px",
            height: "50px",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          Fourth element
        </div>
        <div
          id="testEl4"
          style={{
            position: "absolute",
            left: "200px",
            top: "400px",
            height: "50px",
            backgroundColor: "white",
            width: "200px",
          }}
        >
          Fifth element
        </div>
      </div>
    </>
  );
});
