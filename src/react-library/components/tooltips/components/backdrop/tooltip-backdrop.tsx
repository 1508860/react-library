import { Fragment, useCallback } from "react";

import { targetEvent } from "@react-library/common";

import { TOOLTIP_BACKDROP_STYLE } from "./styles/tooltip-backdrop-style.const";
import type { TooltipBackdropProps } from "./types/tooltip-backdrop-props.type";

/**
 * Tooltip backdrop
 * @param props
 */
export function TooltipBackdrop(props: TooltipBackdropProps) {

	const handleOnDismiss = useCallback(
		(event: React.MouseEvent) => targetEvent(event, props.onDismiss),
		[props.onDismiss]
	);

	if (!props.show) return (<Fragment key="no-backdrop" />);

	return (
		<div
			key="backdrop"
			onClick={handleOnDismiss}
			style={TOOLTIP_BACKDROP_STYLE}
		/>
	);
}
