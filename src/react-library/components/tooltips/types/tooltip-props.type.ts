import type { PropsWithChildren } from "react";

import type {
	IContent,
	IIsDisabled,
	IOverlayPortalMargin,
	IPositionStrategies,
	IShowBackdrop
} from "@react-library/common";

import type { TooltipContent } from "./tooltip-content.type";
import type { TooltipOverlayPortalMarginSize } from "./tooltip-overlay-portal-margin-size.type";
import type { TooltipPositionStrategiesExternal } from "./tooltip-position-strategies-external.type";

/**
 * Props for the tooltip component
 */
export type TooltipProps = (
	IContent<TooltipContent> &
	Partial<IIsDisabled> &
	Partial<IOverlayPortalMargin<TooltipOverlayPortalMarginSize>> &
	IPositionStrategies<TooltipPositionStrategiesExternal> &
	PropsWithChildren &
	Partial<IShowBackdrop<boolean>>
);
