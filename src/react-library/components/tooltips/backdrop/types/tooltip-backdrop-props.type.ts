import type { PropsWithChildren } from "react";

import type { IOnDismiss } from "@react-library/common";

import type { TooltipInteraction } from "../../shared/enums/tooltip-interaction.type";
import type { TooltipInteractionProps } from "../../shared/types/tooltip-interaction-props.type";

/**
 * Tooltip backdrop props that are only used internally within the tooltip hierarchy
 * Not to be exposed to the consumer
 */
type TooltipBackdropPropsPrivate = (
	IOnDismiss<void> &
	PropsWithChildren &
	TooltipInteractionProps<TooltipInteraction>
);

/**
 * Full Tooltip backdrop props from {@link TooltipBackdropPropsPrivate}
 */
export type TooltipBackdropProps = (
	TooltipBackdropPropsPrivate
);
