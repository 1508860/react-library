import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentIconWithWidth,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Content for button base
 */
export type ButtonBaseContent = (
	ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
	ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
	ButtonContentIconWithWidth<MaterialIconName, MaterialIconStyle> |
	ButtonContentLabel
);
