import type { ReactElement, ReactNode } from "react";

import type {
	Callback,
	CallbackWithParameter,
	IChild,
	IIsDisabled,
	IOnDismiss,
	IOnShow,
	IOverlayPortalMargin,
	IPositionStrategy,
	ITooltipArrowContent,
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
		IChild<CallbackWithParameter<TooltipChildProps<TTooltipInteraction, TChildElement>, ReactElement>> &
		Partial<IIsDisabled> &
		Partial<IOnDismiss<Callback<void>>> &
		Partial<IOnShow<Callback<void>>> &
		Partial<IOverlayPortalMargin<SizePx>> &
		IPositionStrategy<TooltipPositionStrategiesExternal> &
		Partial<ITooltipArrowContent<ReactElement>> &
		TooltipContent<TContent> &
		TooltipInteractionProps<TTooltipInteraction>
	);
