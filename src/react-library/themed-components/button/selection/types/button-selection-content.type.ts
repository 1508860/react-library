import type { MaterialIconName } from "@react-library/material-icons";

import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";
import type { ButtonSelectionContentIconStyle } from "./button-selection-content-icon-style.type";

/**
 * Button selection content
 */
export type ButtonSelectionContent = (
	ButtonContentIconWithWidth<MaterialIconName, ButtonSelectionContentIconStyle> |
	ButtonContentIconLabel<MaterialIconName, ButtonSelectionContentIconStyle> |
	ButtonContentLabel
);
