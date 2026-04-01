import type { PropsWithChildren } from "react";

import type { IContent } from "@react-library/common";

import type { TooltipPlainContent } from "../../../types/tooltip-plain-content.type";

/**
 * Props for tooltip plain internal component
 */
export type TooltipPlainInternalProps = (
	IContent<TooltipPlainContent> &
	PropsWithChildren
)
