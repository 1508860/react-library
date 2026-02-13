import type { IContent, IIconName, IIconStyle, ILabel } from "@react-library/common";
import type { MaterialIconName, MaterialIconStyle } from "@react-library/material-icons";

import type { ButtonContent } from "../enums/button-content.type";
import type { ButtonIconWidthProps } from "../types/button-icon-width-props.type";

/**
 * Describes base type for button content
 */
type ButtonContentBase<TButtonContent extends ButtonContent> = (
	IContent<TButtonContent>
);

/**
 * Describes button content with an icon
 */
export type ButtonContentIcon<TMaterialIconName extends MaterialIconName, TMaterialIconStyle extends MaterialIconStyle> = (
	ButtonContentBase<typeof ButtonContent.Icon> &
	IIconName<TMaterialIconName> &
	IIconStyle<TMaterialIconStyle>
);

/**
 * Describes button content with an icon with a width
 */
export type ButtonContentIconWithWidth<TMaterialIconName extends MaterialIconName, TMaterialIconStyle extends MaterialIconStyle> = (
	ButtonContentIcon<TMaterialIconName, TMaterialIconStyle> &
	ButtonIconWidthProps
);

/**
 * Describes button content with an icon & label
 */
export type ButtonContentIconLabel<TMaterialIconName extends MaterialIconName, TMaterialIconStyle extends MaterialIconStyle> = (
	ButtonContentBase<typeof ButtonContent.IconLabel> &
	IIconName<TMaterialIconName> &
	IIconStyle<TMaterialIconStyle> &
	ILabel<string>
);

/**
 * Describes button content with a label
 */
export type ButtonContentLabel = (
	ButtonContentBase<typeof ButtonContent.Label> &
	ILabel<string>
);
