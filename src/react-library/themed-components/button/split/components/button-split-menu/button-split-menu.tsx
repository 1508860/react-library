import { Tooltip } from "@react-library/components";

import type { ButtonSplitProps } from "../../types/button-split-props.type";
import { ButtonSplitMenuChild } from "../button-split-menu-child";
import {
	BUTTON_SPLIT_MENU_TOOLTIP_POSITION_STRATEGIES_EXTERNAL
} from "./constants/button-split-menu-tooltip-position-strategies-external.const";

/**
 * Component to handle the button split menu (button container that handles tooltip)
 * @param props
 */
export function ButtonSplitMenu(props: ButtonSplitProps) {
	return (
		<Tooltip
			isDisabled={props.isDisabled}
			positionStrategies={BUTTON_SPLIT_MENU_TOOLTIP_POSITION_STRATEGIES_EXTERNAL}
			showBackdrop={true}
		>
			<ButtonSplitMenuChild {...props} />
		</Tooltip>
	)
}
