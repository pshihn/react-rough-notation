import React from "react";
export declare type types = "underline" | "box" | "circle" | "highlight" | "strike-through" | "crossed-off";
export interface RoughNotationProps {
    animate?: boolean;
    animationDelay?: number;
    animationDuration?: number;
    children: any;
    color?: string;
    customElement?: string;
    getAnnotationObject?: Function;
    padding?: number;
    show?: boolean;
    strokeWidth?: number;
    type: types;
}
declare function RoughNotation({ animate, animationDelay, animationDuration, children, color, customElement, getAnnotationObject, padding, show, strokeWidth, type, ...rest }: RoughNotationProps): React.DOMElement<React.DOMAttributes<HTMLElement>, HTMLElement>;
export default RoughNotation;
