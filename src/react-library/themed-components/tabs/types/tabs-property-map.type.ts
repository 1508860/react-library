import type { Property } from "csstype";

import type {
	IActiveIndicator,
	IBorderTopLeftRadius,
	IBorderTopRightRadius,
	IContent,
	IFontSize,
	IFontWeight,
	IGap,
	IHeight,
	IIconSize,
	IItem,
	ILineHeight,
	IOrientation,
	IPaddingHorizontal,
	IStyle,
	Size,
	SizeWithUnits
} from "@react-library/common";

import type { TabsStyle } from "../enums/tabs-style.type";
import type { TabsItemOrientation } from "./tabs-props-item-orientation.type";

/**
 * Describes values for tabs component style sizes
 */
export type TabsPropertyMap = (
	IStyle<Record<TabsStyle, TabsPropertyStyleMap>>
);

type TabsPropertyStyleMap = (
	IItem<TabsPropertyStyleItemMap>
);

type TabsPropertyStyleItemMap = (
	IActiveIndicator<TabsPropertyStyleItemActiveIndicatorMap> &
	IContent<TabsPropertyStyleItemContentMap> &
	IGap<Size> &
	IPaddingHorizontal<Size | undefined>
);

type TabsPropertyStyleItemActiveIndicatorMap = (
	IBorderTopLeftRadius<Size | undefined> &
	IBorderTopRightRadius<Size | undefined> &
	IHeight<Size>
);

type TabsPropertyStyleItemContentMap = (
	IFontSize<Size> &
	IFontWeight<Property.LineHeight> &
	IIconSize<Size> &
	ILineHeight<SizeWithUnits> &
	IOrientation<Record<TabsItemOrientation, TabsPropertyStyleItemContentOrientationMap>> &
	IPaddingHorizontal<Size | undefined>
);

type TabsPropertyStyleItemContentOrientationMap = (
	IGap<Size | undefined> &
	IHeight<Size>
);
