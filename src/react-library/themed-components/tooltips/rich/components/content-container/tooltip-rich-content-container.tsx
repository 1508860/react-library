import { Fragment } from "react";

import { useColourSchemeContext } from "@react-library/common";

import { TooltipRichContentButtons } from "../content-buttons";
import { TooltipRichContentHeader } from "../content-header";
import { TooltipRichContentText } from "../content-text";

import { tooltipRichContentContainerStyle } from "./styles/tooltip-rich-content-container-style.function";
import type { TooltipRichContentContainerProps } from "./types/tooltip-rich-content-container-props.type";

/**
 * Tooltip rich content container component
 * @param props
 */
export function TooltipRichContentContainer(props: TooltipRichContentContainerProps) {

	const colourScheme = useColourSchemeContext();

	if (!props.content) return (
		<Fragment key="no-tooltip-rich-content-container" />
	)

	return (
		<div
			key="tooltip-rich-content-container"
			style={tooltipRichContentContainerStyle(colourScheme)}
		>
			<TooltipRichContentHeader content={props.content} />
			<TooltipRichContentText text={props.content.text} />
			<TooltipRichContentButtons content={props.content} />
		</div>
	);
}
