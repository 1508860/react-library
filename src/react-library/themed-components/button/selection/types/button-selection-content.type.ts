import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Button selection content
 */
export type ButtonSelectionContent = (
	ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
	ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
	ButtonContentLabel
);
