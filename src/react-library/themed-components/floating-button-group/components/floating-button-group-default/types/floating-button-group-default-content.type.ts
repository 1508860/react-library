import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContentIcon, ButtonContentIconLabel, ButtonContentLabel } from "../../../../button";

import type { FloatingButtonGroupMenuIconClose } from "../../../types/floating-button-group-menu-icon.type";

/**
 * Describes floating button group default button content
 */
export type FloatingButtonGroupButtonDefaultContent = (
	ButtonContentIcon<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
	ButtonContentIconLabel<Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>, MaterialIconStyle> |
	ButtonContentLabel
);
