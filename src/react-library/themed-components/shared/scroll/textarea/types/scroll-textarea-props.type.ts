import type { DetailedHTMLProps } from "react";

import type { IColour, IRefCallback, IStyle } from "@react-library/common";

import type { ScrollTextareaStyle } from "./scroll-textarea-style.type";
import type { ScrollColour } from "../../shared/types/scroll-colour.type";

/**
 * Props for the scroll textarea component
 */
export type ScrollTextareaProps = (
	IColour<ScrollColour> &
	DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> &
	Partial<IRefCallback<HTMLTextAreaElement>> &
	IStyle<ScrollTextareaStyle>
);
