import type { Property } from "csstype";

import type { IWidth, SizePx } from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonIconWidth } from "../../shared/enums/button-icon-width.type";
import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Describes values for button click style sizes
 */
export interface IButtonClickPropertyMap {
	size: {
		[ButtonSize.ExtraSmall]: IButtonClickPropertySizeMap;
		[ButtonSize.Small]: IButtonClickPropertySizeMap;
		[ButtonSize.Medium]: IButtonClickPropertySizeMap;
		[ButtonSize.Large]: IButtonClickPropertySizeMap;
		[ButtonSize.ExtraLarge]: IButtonClickPropertySizeMap;
	};
	style: {
		[ButtonStyle.Elevated]: IButtonClickPropertyStyleMap;
		[ButtonStyle.Filled]: IButtonClickPropertyStyleMap;
		[ButtonStyle.Outline]: IButtonClickPropertyStyleMap;
	};
}

interface IButtonClickPropertySizeMap {
	shape: {
		[ButtonShape.Round]: IButtonClickPropertySizeShapeMap;
		[ButtonShape.Soft]: IButtonClickPropertySizeShapeMap;
	};
	content: {
		[ButtonContent.Icon]: IButtonClickPropertySizeContentIconMap;
		[ButtonContent.IconLabel]: IButtonClickPropertyPaddingSideMap;
		[ButtonContent.Label]: IButtonClickPropertyPaddingSideMap;
	};
	fontSize: SizePx;
	gap: SizePx;
	height: SizePx;
	iconSize: SizePx;
}

interface IButtonClickPropertySizeContentIconMap {
	[ButtonIconWidth.Default]: IWidth<SizePx>;
	[ButtonIconWidth.Narrow]: IWidth<SizePx>;
	[ButtonIconWidth.Wide]: IWidth<SizePx>;
}

interface IButtonClickPropertySizeShapeMap {
	borderRadius: SizePx;
}

interface IButtonClickPropertyPaddingSideMap {
	paddingSide: SizePx;
}

interface IButtonClickPropertyStyleMap {
	borderStyle: Property.BorderStyle | undefined;
	borderWidth: SizePx | undefined;
}
