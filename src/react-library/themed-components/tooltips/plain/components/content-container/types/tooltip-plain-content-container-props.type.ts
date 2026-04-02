import type { IContent, IShow } from "@react-library/common";

import type { TooltipPlainContent } from "../../../types/tooltip-plain-content.type";

/**
 * Props for tooltip plain content container component
 */
export type TooltipPlainContentContainerProps = (
	IContent<TooltipPlainContent> &
	IShow
);
