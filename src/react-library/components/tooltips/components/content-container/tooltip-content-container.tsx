import { Fragment } from "react";

import type { TooltipContentContainerProps } from "./types/tooltip-content-container-props.type";
import { TOOLTIP_CONTENT_CONTAINER_STYLE } from "./styles/tooltip-content-container-style.const";

/**
 * Tooltip content container
 * @param props
 */
export function TooltipContentContainer(props: TooltipContentContainerProps) {

	if (!props.content) return (
		<Fragment key="no-content" />
	);

	return (
		<div
			key="content"
			ref={props.ref}
			style={TOOLTIP_CONTENT_CONTAINER_STYLE}
		>
			{props.content}
		</div>
	);
}
