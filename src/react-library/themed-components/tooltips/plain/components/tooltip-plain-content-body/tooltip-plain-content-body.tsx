import { useColourSchemeContext, useFontContext } from "@react-library/common";

import { tooltipPlainContentBodyStyle } from "./styles/tooltip-plain-content-body-style.function";
import type { TooltipPlainContentBodyProps } from "./types/tooltip-plain-content-body-props.type";

/**
 * Tooltip plain content body component
 * @param props
 */
export function TooltipPlainContentBody(props: TooltipPlainContentBodyProps) {

	const colourScheme = useColourSchemeContext();
	const font = useFontContext();

	return (
		<div style={tooltipPlainContentBodyStyle(colourScheme, font)}>
			{props.content}
		</div>
	);
}
