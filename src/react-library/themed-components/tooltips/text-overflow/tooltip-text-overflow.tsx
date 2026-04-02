import { TooltipPlain } from "../plain";

import { TooltipTextOverflowChild } from "./components/child";
import type { TooltipTextOverflowProps } from "./types/tooltip-text-overflow-props.type";

/**
 * Tooltip text overflow component
 * @param props
 */
export function TooltipTextOverflow(props: TooltipTextOverflowProps) {
	return (
		<TooltipPlain content={props.content}>
			<TooltipTextOverflowChild
				content={props.content}
				width={props.width}
			/>
		</TooltipPlain>
	);
}
