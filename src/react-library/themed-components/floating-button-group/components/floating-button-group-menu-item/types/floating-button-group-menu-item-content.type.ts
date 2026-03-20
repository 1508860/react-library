import type { MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContentIconLabel, ButtonContentLabel } from "../../../../button";

import type { FloatingButtonGroupMenuIconAllowed } from "../../../types/floating-button-group-menu-icon.type";

/**
 * Describes floating button group menu item content
 */
export type FloatingButtonGroupButtonMenuItemContent = (
	ButtonContentIconLabel<FloatingButtonGroupMenuIconAllowed, MaterialIconStyle> |
	ButtonContentLabel
);
