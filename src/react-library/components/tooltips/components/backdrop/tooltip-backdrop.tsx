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
		(event: React.MouseEvent) => {
			if (!props.config) return;
			targetEvent(event, props.config.onDismiss)
		},
		[props.config]
	);

	if (!props.config) return (<Fragment key="no-backdrop" />);

	return (
		<div
			key="backdrop"
			onClick={handleOnDismiss}
			style={TOOLTIP_BACKDROP_STYLE}
		/>
	);
}
