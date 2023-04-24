import { FC } from "react";
import "./TutorialOverlay.scss";
interface TutorialOverlayProps {
    config: StepsConfig;
    closeCallback: () => void;
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
export declare const TutorialOverlay: FC<TutorialOverlayProps>;
export {};
