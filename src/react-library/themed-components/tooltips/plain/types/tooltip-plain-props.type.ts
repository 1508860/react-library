import type { PropsWithChildren } from "react";

import type { IContent } from "@react-library/common";

import type { TooltipPlainContent } from "./tooltip-plain-content.type";

/**
 * Props for tooltip plain component
 */
export type TooltipPlainProps = (
	IContent<TooltipPlainContent> &
	PropsWithChildren
)
