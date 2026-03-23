import type { IIsSelected } from "@react-library/common";
import type { MaterialIconName } from "@react-library/material-icons";

import type { ButtonContentResolverProps } from "../../../../shared/components/button-content-resolver";
import type { ButtonSelectionContentIconStyle } from "../../../types/button-selection-content-icon-style.type";

/**
 * Props for button selection content resolver props
 */
export type ButtonSelectionContentResolverProps = (
	ButtonContentResolverProps<MaterialIconName, ButtonSelectionContentIconStyle> &
	IIsSelected
);
