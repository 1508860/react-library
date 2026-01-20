import type { IWidth, SizePx } from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";

/**
 * Describes values for button floating style sizes
 */
export interface IButtonFloatingPropertyMap {
	size: {
		[ButtonSize.Small]: IButtonFloatingPropertySizeMap;
		[ButtonSize.Medium]: IButtonFloatingPropertySizeMap;
		[ButtonSize.Large]: IButtonFloatingPropertySizeMap;
	};
}

interface IButtonFloatingPropertySizeMap {
	shape: {
		[ButtonShape.Round]: IButtonFloatingPropertySizeShapeMap;
		[ButtonShape.Soft]: IButtonFloatingPropertySizeShapeMap;
	};
	content: {
		[ButtonContent.Icon]: IWidth<SizePx>;
		[ButtonContent.IconLabel]: IButtonFloatingPropertyPaddingSideMap;
		[ButtonContent.Label]: IButtonFloatingPropertyPaddingSideMap;
	};
	fontSize: SizePx;
	gap: SizePx;
	height: SizePx;
	iconSize: SizePx;
}

interface IButtonFloatingPropertySizeShapeMap {
	borderRadius: SizePx;
}

interface IButtonFloatingPropertyPaddingSideMap {
	paddingSide: SizePx;
}
