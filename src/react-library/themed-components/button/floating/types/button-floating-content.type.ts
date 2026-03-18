import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type {
	ButtonContentIcon,
	ButtonContentIconLabel,
	ButtonContentLabel
} from "../../shared/types/button-content.type";

/**
 * Button floating content
 */
export type ButtonFloatingContent = (
	ButtonContentIcon<MaterialIconName, MaterialIconStyle> |
	ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
	ButtonContentLabel
);
