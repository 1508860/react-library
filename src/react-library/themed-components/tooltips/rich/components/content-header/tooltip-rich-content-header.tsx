import { Fragment } from "react";

import { useColourSchemeContext, useFontContext } from "@react-library/common";

import { TooltipRichStyle } from "../../enums/tooltip-rich-style-type.type";

import { tooltipRichContentHeaderStyle } from "./styles/tooltip-rich-content-header-style.function";
import type { TooltipRichContentHeaderProps } from "./types/tooltip-rich-content-header-props.type";

/**
 * Tooltip rich content header component
 * @param props
 */
export function TooltipRichContentHeader(props: TooltipRichContentHeaderProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	if (
		!props.content ||
		!(
			props.content.style === TooltipRichStyle.All ||
			props.content.style === TooltipRichStyle.HeaderAndBody
		)
	) return (
		<Fragment key="no-tooltip-rich-content-header" />
	);

	return (
		<div
			key="tooltip-rich-content-header"
			style={tooltipRichContentHeaderStyle(colourScheme, font)}
		>
			{props.content.headerText}
		</div>
	);
}
