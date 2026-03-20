import { MaterialIconName } from "@react-library/material-icons";

/**
 * Icon used for the floating menu button close state
 */
export type FloatingButtonGroupMenuIconClose = typeof MaterialIconName.Close;

export type FloatingButtonGroupMenuIconAllowed = Exclude<MaterialIconName, FloatingButtonGroupMenuIconClose>;
