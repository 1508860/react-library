import type { Property } from "csstype";

import type { IDurationMs, IWidth, SizePx } from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonSize } from "../../shared/enums/button-size.type";
import type { ButtonStyle } from "../../shared/enums/button-style.type";

/**
 * Describes values for button split style sizes
 */
export interface IButtonSplitPropertyMap {
	gap: SizePx;
	size: {
		[ButtonSize.ExtraSmall]: IButtonSplitPropertySizeMap;
		[ButtonSize.Small]: IButtonSplitPropertySizeMap;
		[ButtonSize.Medium]: IButtonSplitPropertySizeMap;
		[ButtonSize.Large]: IButtonSplitPropertySizeMap;
		[ButtonSize.ExtraLarge]: IButtonSplitPropertySizeMap;
	};
	style: {
		[ButtonStyle.Elevated]: IButtonSplitPropertyStyleMap;
		[ButtonStyle.Filled]: IButtonSplitPropertyStyleMap;
		[ButtonStyle.Outline]: IButtonSplitPropertyStyleMap;
	};
	transition: {
		borderRadius: IDurationMs<number>
	},
}

interface IButtonSplitPropertySizeMap {
	button: {
		borderRadius: IButtonSplitPropertyBorderRadiusMap;
		content: {
			[ButtonContent.Icon]: IWidth<SizePx>;
			[ButtonContent.IconLabel]: IButtonSplitPropertyPaddingSideMap;
			[ButtonContent.Label]: IButtonSplitPropertyPaddingSideMap;
		};
		fontSize: SizePx;
		gap: SizePx;
		iconSize: SizePx;
	};
	height: SizePx;
	menu: {
		borderRadius: {
			inside: {
				collapsed: SizePx;
				expanded: SizePx;
			}
			outside: SizePx;
		};
		iconSize: SizePx;
		width: SizePx;
	};
}

interface IButtonSplitPropertyPaddingSideMap {
	paddingSide: SizePx;
}

interface IButtonSplitPropertyBorderRadiusMap {
	inside: SizePx;
	outside: SizePx;
}

interface IButtonSplitPropertyStyleMap {
	borderStyle: Property.BorderStyle | undefined;
	borderWidth: SizePx | undefined;
}
