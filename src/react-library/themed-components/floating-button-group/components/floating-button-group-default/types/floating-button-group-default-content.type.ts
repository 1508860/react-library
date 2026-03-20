import type { MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContentIcon, ButtonContentIconLabel, ButtonContentLabel } from "../../../../button";

import type { FloatingButtonGroupMenuIconAllowed } from "../../../types/floating-button-group-menu-icon.type";

/**
 * Describes floating button group default button content
 */
export type FloatingButtonGroupButtonDefaultContent = (
	ButtonContentIcon<FloatingButtonGroupMenuIconAllowed, MaterialIconStyle> |
	ButtonContentIconLabel<FloatingButtonGroupMenuIconAllowed, MaterialIconStyle> |
	ButtonContentLabel
);
