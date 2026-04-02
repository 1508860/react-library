import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContentIconLabel, ButtonContentLabel } from "../../shared/types/button-content.type";

/**
 * Button text content
 */
export type ButtonTextContent = (
	ButtonContentIconLabel<MaterialIconName, MaterialIconStyle> |
	ButtonContentLabel
);
