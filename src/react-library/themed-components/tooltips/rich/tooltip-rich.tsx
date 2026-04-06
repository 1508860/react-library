import { Tooltip } from "@react-library/components";

import { TooltipRichInternal } from "./components/internal";
import { TOOLTIP_RICH_OVERLAY_PORTAL_MARGIN } from "./constants/tooltip-rich-margin.const";
import { TOOLTIP_RICH_POSITION_STRATEGIES } from "./constants/tooltip-rich-position-strategies.const";
import type { TooltipRichProps } from "./types/tooltip-rich-props.type";

/**
 * Tooltip rich component
 * @param props
 */
export function TooltipRich(props: TooltipRichProps) {
	return (
		<Tooltip
			overlayPortalMargin={TOOLTIP_RICH_OVERLAY_PORTAL_MARGIN}
			positionStrategies={TOOLTIP_RICH_POSITION_STRATEGIES}
		>
			<TooltipRichInternal>
				{props.children}
			</TooltipRichInternal>
		</Tooltip>
	);
}
