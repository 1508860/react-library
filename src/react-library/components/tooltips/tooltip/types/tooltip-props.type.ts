import type { ReactElement, ReactNode } from "react";

import type {
	ChildCalback,
	IChild,
	IContent,
	IIsDisabled,
	IMargin,
	IOnDismiss,
	IOnShow,
	IPositionStrategy,
	PrefixKeys,
	SizePx
} from "@react-library/common";

import type { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";
import type { TooltipChildProps } from "./tooltip-child-props.type";
import type { TooltipContent } from "./tooltip-content.type";
import type { TooltipPositionStrategiesExternal } from "./tooltip-position-strategies-external.type";

/**
 * Props for the tooltip component
 */
export type TooltipProps<
	TTooltipInteraction extends TooltipInteraction,
	TChildElement extends Element,
	TContent extends ReactNode
> = (
		IChild<ChildCalback<TooltipChildProps<TTooltipInteraction, TChildElement>, ReactElement>> &
		Partial<IIsDisabled> &
		Partial<PrefixKeys<IMargin<SizePx>, "overlayPortal">> &
		Partial<IOnDismiss<void>> &
		Partial<IOnShow<void>> &
		IPositionStrategy<TooltipPositionStrategiesExternal> &
		Partial<PrefixKeys<IContent<ReactElement>, "tooltipArrow">> &
		TooltipContent<TContent> &
		TooltipInteractionProps<TTooltipInteraction>
	);
