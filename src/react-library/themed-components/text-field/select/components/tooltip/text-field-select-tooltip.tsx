import { Tooltip } from "@react-library/components";

import { TEXT_FIELD_SELECT_MENU_OVERLAY_PORTAL_MARGIN } from "../../constants/text-field-select-menu-position-margin.const";
import { TEXT_FIELD_SELECT_MENU_POSITION_STRATEGIES } from "../../constants/text-field-select-menu-position-strategies.const";

import type { TextFieldSelectTooltipProps } from "./types/text-field-select-tooltip-props.type";

/**
 * Text field select tooltip component
 */
export function TextFieldSelectTooltip(props: TextFieldSelectTooltipProps) {
	return (
		<Tooltip
			isDisabled={props.isDisabled}
			overlayPortalMargin={TEXT_FIELD_SELECT_MENU_OVERLAY_PORTAL_MARGIN}
			positionStrategies={TEXT_FIELD_SELECT_MENU_POSITION_STRATEGIES}
		>
			{props.children}
		</Tooltip>
	);
}
