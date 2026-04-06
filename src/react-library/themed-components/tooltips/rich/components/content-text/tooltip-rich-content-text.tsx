import { useColourSchemeContext, useFontContext } from "@react-library/common";

import { tooltipRichContentTextStyle } from "./styles/tooltip-rich-content-text-style.function";
import type { TooltipRichContentTextProps } from "./types/tooltip-rich-content-text-props.type";

/**
 * Tooltip rich content text component
 * @param props
 */
export function TooltipRichContentText(props: TooltipRichContentTextProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	return (
		<div
			key="tooltip-rich-content-text"
			style={tooltipRichContentTextStyle(colourScheme, font)}
		>
			{props.text}
		</div>
	);
}
