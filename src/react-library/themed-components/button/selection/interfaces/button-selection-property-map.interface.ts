import type { Property } from "csstype";

import type { IDurationMs, IWidth, SizePx } from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonIconWidth } from "../../shared/enums/button-icon-width.type";
import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Describes values for button selection style sizes
 */
export interface IButtonSelectionPropertyMap {
	size: {
		[ButtonSize.ExtraSmall]: IButtonSelectionPropertySizeMap;
		[ButtonSize.Small]: IButtonSelectionPropertySizeMap;
		[ButtonSize.Medium]: IButtonSelectionPropertySizeMap;
		[ButtonSize.Large]: IButtonSelectionPropertySizeMap;
		[ButtonSize.ExtraLarge]: IButtonSelectionPropertySizeMap;
	};
	style: {
		[ButtonStyle.Elevated]: IButtonClickPropertyStyleMap;
		[ButtonStyle.Filled]: IButtonClickPropertyStyleMap;
		[ButtonStyle.Outline]: IButtonClickPropertyStyleMap;
	};
	transition: {
		borderRadius: IDurationMs<number>
	};
}

interface IButtonSelectionPropertySizeMap {
	shape: {
		[ButtonShape.Round]: IButtonSelectionPropertySizeShapeMap;
		[ButtonShape.Soft]: IButtonSelectionPropertySizeShapeMap;
	};
	content: {
		[ButtonContent.Icon]: IButtonSelectionPropertySizeContentIconMap;
		[ButtonContent.IconLabel]: IButtonSelectionPropertyPaddingSideMap;
		[ButtonContent.Label]: IButtonSelectionPropertyPaddingSideMap;
	};
	fontSize: SizePx;
	gap: SizePx;
	height: SizePx;
	iconSize: SizePx;
}

interface IButtonSelectionPropertySizeContentIconMap {
	[ButtonIconWidth.Default]: IWidth<SizePx>;
	[ButtonIconWidth.Narrow]: IWidth<SizePx>;
	[ButtonIconWidth.Wide]: IWidth<SizePx>;
}

interface IButtonSelectionPropertySizeShapeMap {
	borderRadius: SizePx;
}

interface IButtonSelectionPropertyPaddingSideMap {
	paddingSide: SizePx;
}

interface IButtonClickPropertyStyleMap {
	borderStyle: Property.BorderStyle | undefined;
	borderWidth: SizePx | undefined;
}
