import { FC, useEffect, useRef, useState } from "react";
import Button from "../Button/Button.component";
import "./TutorialOverlay.scss";

interface TutorialOverlayProps {
  config: StepsConfig;
  closeCallback: () => void;
}
interface ElementStyle {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
}
export interface StepConfig {
  highlightIds: string[];
  info?: string;
  title?: string;
  infoBoxAlignment?: "center" | "left";
}

export interface StepsConfig {
  steps: Map<number, StepConfig>;
  highLightPadding?: number;
  infoBoxHeight?: number;
  infoBoxMargin?: number;
  infoBoxThemeColor?: string;
  darkerBackground?: boolean;
  scrollLock?: boolean;
  infoBoxShadow?: boolean;
  highlightBoxBorderColor?: string;
  highlightBoxBorderWidth?: number;
  highlightBoxBorderRadius?: number;
}

export const TutorialOverlay: FC<TutorialOverlayProps> = ({
  config,
  closeCallback,
}: TutorialOverlayProps) => {
  const [rectStyles, setRectStyles] = useState<ElementStyle[]>([]);
  const [step, setStep] = useState<number>(1);
  const stepRef = useRef<number>(1);
  stepRef.current = step;
  const currentElements = useRef<
    { id: string; element: HTMLElement; initialColor: string }[]
  >([]);
  const infoBoxElement = useRef<HTMLDivElement>(null);
  const overlayElement = useRef<HTMLDivElement>(null);
  let timeout = useRef<number | undefined>();

  // Apply selected info box theme to global CSS variable
  setColor(config.infoBoxThemeColor);

  function resetHighlightedElements(): void {
    console.log("Remove highlighted elements: ", currentElements.current);
    currentElements.current.forEach((item) => {
      item.element.classList.remove("foreground");
      item.element.style.backgroundColor = item.initialColor;
      console.log(
        "set style",
        window.getComputedStyle(item.element).backgroundColor
      );
    });
    currentElements.current = [];
  }

  /**
   * Find elements in the document with specified IDs and apply config style to them.
   * It should be called after each step change.
   * @returns
   */
  async function setHighlightedElementPositions() {
    console.log("Calculate positions. Step:", stepRef.current);
    const stepConfig = config.steps.get(stepRef.current);
    const elementIds = stepConfig?.highlightIds;
    if (!elementIds) {
      console.warn(`Missing element ids for step ${stepRef.current}`);
      return;
    }
    let positions: ElementStyle[] = [];
    let elements: { id: string; element: HTMLElement; initialColor: string }[] =
      [];

    // Check if elements for current step are already set.
    const alreadyCalculated = elementIds[0] === currentElements.current[0]?.id;

    if (!alreadyCalculated) {
      //If new elements are found, previous settings should be reset.
      resetHighlightedElements();
    }

    elementIds.forEach((id: string, index: number) => {
      const element: HTMLElement | null = document.getElementById(id);
      if (!element) {
        console.error(`Highlighted element with id ${id} was not found.`);
        return;
      }

      if (!alreadyCalculated) {
        const initialBgColor = window.getComputedStyle(element).backgroundColor;
        let backgroundColor = getInheritedBackgroundColor(element);

        // We need initial color when reseting elements. When color is transparent we set it to white
        // for better visibility but after reset we need to revert values.
        elements.push({
          id: id,
          element: element,
          initialColor: initialBgColor,
        });
        element.classList.add("foreground");
        element.style.backgroundColor = backgroundColor;
      }

      const selectedElPosition: DOMRect = element.getBoundingClientRect();
      const borderWidth = config.highlightBoxBorderWidth ?? 3;

      if (selectedElPosition) {
        const position: ElementStyle = {
          id: id,
          left: selectedElPosition.left + window.pageXOffset - borderWidth,
          top: selectedElPosition.top + window.pageYOffset - borderWidth,
          width: selectedElPosition.width,
          height: selectedElPosition.height,
          borderColor: config.highlightBoxBorderColor,
          borderWidth: borderWidth,
          borderRadius: config.highlightBoxBorderRadius,
        };
        positions.push(position);
        //Use position of first element to calculate infoBox
        if (index === 0) {
          calculateInfoBoxPosition(position, stepConfig.infoBoxAlignment);
        }
      }
    });
    if (currentElements.current.length === 0 || !alreadyCalculated) {
      // Set elements to state if current value is empty or elements are not already assigned.
      // The elements should not be assigned twice, because background colors are altered first time and
      // we don't know how to revert them if initial color is not set correctly.
      currentElements.current = elements;
    }

    setRectStyles(positions);
  }

  /**
   * Calculate info box position. It is displayed above or under the element.
   * It depend how much space is left above the element.
   * The box can be aligned center or left baseline of the element.
   * Config also provides box height and vertical margin from the element.
   * @param position Calculated position of first element in the step array.
   * @param alignment Selected alignment of the box.
   */
  function calculateInfoBoxPosition(
    position: ElementStyle,
    alignment: "center" | "left" | undefined
  ) {
    const boxHeight = config.infoBoxHeight ?? 200;
    const margin = config.infoBoxMargin ?? 30;

    //calculate top
    let newBoxTop = position.top - boxHeight - margin;
    //Check if there is enough space.
    if (newBoxTop < 10) {
      //Set info box under the element.
      newBoxTop = position.top + position.height + margin;
    }
    const el = infoBoxElement.current;
    if (el) {
      let newBoxLeft: number;
      // Calculate left position based on config settings.
      // Config can be set to left or center, center being default.
      if (alignment === "left") {
        newBoxLeft = position.left < 10 ? 10 : position.left;
      } else {
        newBoxLeft = position.left + position.width / 2;
        const halfOfBoxWidth = el.clientWidth / 2;
        newBoxLeft =
          newBoxLeft - halfOfBoxWidth < 10 ? 10 + halfOfBoxWidth : newBoxLeft;
      }
      el.style.height = boxHeight + "px";
      el.style.top = newBoxTop + "px";
      el.style.left = newBoxLeft + "px";
      el.style.transform = alignment !== "left" ? "translate(-50%)" : "";

      //Get info content element
      const infoContentEl: HTMLElement | null = el.children[0]
        .lastChild as HTMLElement;

      if (infoContentEl) {
        // Set infoContent's height to prevent overflow and make it scrollable if
        // text does not fit in.
        infoContentEl.style.height = `calc(${boxHeight}px - (3rem + 75px))`;
      }

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }

  /**
   * Advance to next step.
   */
  const nextStep = (): void => {
    if (step === config.steps.size) {
      console.warn("It is the last step.");
      return;
    }
    setStep((oldStep) => oldStep + 1);
  };

  /**
   * Returns to previous step.
   */
  const previousStep = (): void => {
    if (step === 1) {
      console.warn("It is already first step.");
      return;
    }
    setStep((oldStep) => oldStep - 1);
  };

  /**
   *  Reset step value and fire closeCallback.
   */
  const skip = (): void => {
    setStep(1);
    closeCallback();
  };

  useEffect(() => {
    //Every time step value changes it needs to recalculate positions for all elements in new step.
    setHighlightedElementPositions();
  }, [step]);

  useEffect(() => {
    // Disable scrolling if it is selected in config.
    if (config.scrollLock) {
      document.body.style.overflow = "hidden";
    }

    if (config.darkerBackground) {
      if (!overlayElement.current) {
        return;
      }
      overlayElement.current.style.backdropFilter = "blur(2px) brightness(0.9)";
    }

    // Initial calculation. Add some timeout to make sure all elements are already loaded.
    setTimeout(() => {
      setHighlightedElementPositions();
    }, 100);

    window.addEventListener("resize", handleResize);

    function handleResize() {
      // Emulating debounce functionality. Take event only after 250ms.
      clearTimeout(timeout.current);
      timeout.current = window.setTimeout(function () {
        console.log("Resized finished. step", stepRef.current);
        setHighlightedElementPositions();
      }, 250);
    }

    return () => {
      document.body.style.overflow = "visible";
      resetHighlightedElements();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="TutorialOverlay" ref={overlayElement}></div>
      <div
        className="InfoBox"
        ref={infoBoxElement}
        style={{
          boxShadow: config.infoBoxShadow
            ? "1px 1px 5px -1px var(--tutorial-primary)"
            : "none",
        }}
      >
        <div>
          <div className="InfoTitle">
            <span style={{ color: config.infoBoxThemeColor || "" }}>
              {config.steps.get(step)?.title}
            </span>
            <Button addStyles={["small", "full"]} onClick={skip}>
              Skip
            </Button>
          </div>
          <div className="InfoContent">
            <p>{config.steps.get(step)?.info}</p>
          </div>
        </div>
        <div className="BoxFooter">
          <div className="InfoSteps">
            <span>{`${step} / ${config.steps.size}`}</span>
          </div>
          <div className="ButtonWrapper">
            <Button
              addStyles={["small", step === 1 ? "disabled" : ""]}
              onClick={previousStep}
            >
              Previous
            </Button>
            <Button
              addStyles={["small"]}
              onClick={step !== config.steps.size ? nextStep : skip}
            >
              {step !== config.steps.size ? "Next" : "Finish"}
            </Button>
          </div>
        </div>
      </div>
      {rectStyles.map((style: ElementStyle) => {
        return (
          <div
            style={style}
            className="HighlightedElement"
            key={style.id}
          ></div>
        );
      })}
    </>
  );
};

/**
 * Sets a color to a css variable.
 * @param {string} newColor Color value.
 * @param {string} variable CSS variable name
 */
function setColor(
  newColor: string | undefined,
  variable: string = "--tutorial-primary"
) {
  if (!newColor) {
    console.warn(
      "The color to be set to a CSS variable is not defined. Default value is used."
    );
    return;
  }
  document.documentElement.style.setProperty(variable, newColor);
}

/**
 * Return rgba color value for computed background color of the element.
 * It recursively search for computed value of the parents.
 * It does not return value if the parent's bg color is gradient.
 * Source: https://stackoverflow.com/questions/46336002/how-to-get-computed-background-color-style-inherited-from-parent-element
 * @param {HTMLElement} el
 * @returns {string}
 */
function getInheritedBackgroundColor(el: HTMLElement): string {
  // get default style for current browser
  let defaultStyle = getDefaultBackground(); // typically "rgba(0, 0, 0, 0)"

  // get computed color for el
  let backgroundColor = window.getComputedStyle(el).backgroundColor;
  let backgroundImage = window.getComputedStyle(el).backgroundImage;
  console.log("backgound image", backgroundImage);
  if (backgroundImage !== "none") {
    //If parent background contains image or gradient it returns transparent.
    return "rgba(0, 0, 0, 0)";
  }
  // if we got a real value, return it. It dismiss values with alpha value.
  if (backgroundColor != defaultStyle && !backgroundColor.includes("rgba"))
    return backgroundColor;

  // if we've reached the top parent el without getting an explicit color, return default
  if (!el.parentElement) return "white";

  // otherwise, recurse and try again on parent element
  return getInheritedBackgroundColor(el.parentElement);
}

function getDefaultBackground(): string {
  // have to add to the document in order to use getComputedStyle
  let div = document.createElement("div");
  document.head.appendChild(div);
  let bg = window.getComputedStyle(div).backgroundColor;
  document.head.removeChild(div);
  return bg;
}
