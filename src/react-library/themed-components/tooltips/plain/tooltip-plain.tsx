import { Tooltip } from "@react-library/components";

import { TooltipPlainInternal } from "./components/internal";
import { TOOLTIP_PLAIN_OVERLAY_PORTAL_MARGIN } from "./constants/tooltip-plain-margin.const";
import { TOOLTIP_PLAIN_POSITION_STRATEGIES } from "./constants/tooltip-plain-position-strategies.const";
import type { TooltipPlainProps } from "./types/tooltip-plain-props.type";

/**
 * Tooltip plain component
 * @param props
 */
export function TooltipPlain(props: TooltipPlainProps) {
	return (
		<Tooltip
			overlayPortalMargin={TOOLTIP_PLAIN_OVERLAY_PORTAL_MARGIN}
			positionStrategies={TOOLTIP_PLAIN_POSITION_STRATEGIES}
			showBackdrop={false}
		>
			<TooltipPlainInternal content={props.content}>
				{props.children}
			</TooltipPlainInternal>
		</Tooltip>
	);
}
