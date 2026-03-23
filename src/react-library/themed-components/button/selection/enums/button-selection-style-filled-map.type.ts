import { MaterialIconStyle } from "@react-library/material-icons";
import type { ButtonSelectionContentIconStyle } from "../types/button-selection-content-icon-style.type";

/**
 * Button selection style filled map
 */
export const ButtonSelectionStyleFilledMap = {
	[MaterialIconStyle.Default]: MaterialIconStyle.DefaultFilled
} as const satisfies Record<ButtonSelectionContentIconStyle, MaterialIconStyle>;

/**
 * Type for {@link ButtonSelectionStyleFilledMap}
 */
export type ButtonSelectionStyleFilledMap = (typeof ButtonSelectionStyleFilledMap)[keyof typeof ButtonSelectionStyleFilledMap];
