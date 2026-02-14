import type {
	IBorderRadius,
	IContent,
	IFontSize,
	IGap,
	IHeight,
	IIconSize,
	IIconWidth,
	IPaddingHorizontal,
	IShape,
	ISize,
	SizePx
} from "@react-library/common";

import type { ButtonContent } from "../../shared/enums/button-content.type";
import type { ButtonShape } from "../../shared/enums/button-shape.type";
import type { ButtonSizeFloating } from "../../shared/enums/button-size.type";

/**
 * Describes values for button floating style sizes
 */

export type ButtonFloatingPropertyMap = (
	ISize<Record<ButtonSizeFloating, ButtonFloatingPropertySizeMap>>
);

type ButtonFloatingPropertySizeMap = (
	IContent<Record<ButtonContent, ButtonFloatingPropertySizeContentMap>> &
	IFontSize<SizePx> &
	IGap<SizePx> &
	IHeight<SizePx> &
	IIconSize<SizePx> &
	IShape<Record<ButtonShape, ButtonFloatingPropertySizeShapeMap>>
);

type ButtonFloatingPropertySizeContentMap = (
	Partial<IIconWidth<SizePx>> &
	Partial<IPaddingHorizontal<SizePx>>
);

type ButtonFloatingPropertySizeShapeMap = (
	IBorderRadius<SizePx>
);
