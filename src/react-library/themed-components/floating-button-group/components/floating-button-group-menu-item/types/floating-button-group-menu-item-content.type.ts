import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContentIconLabel, ButtonContentLabel } from "../../../../button";

import type { FloatingButtonGroupMenuIconClose } from "../../../types/floating-button-group-menu-icon.type";

/**
 * Describes floating button group menu item content
 */
export type FloatingButtonGroupButtonMenuItemContent = (
	ButtonContentIconLabel<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
	ButtonContentLabel
);
