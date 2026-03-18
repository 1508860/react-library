import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Button click content
 */
export type ButtonClickContent = (
	ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
	ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
	ButtonContentLabel
);
