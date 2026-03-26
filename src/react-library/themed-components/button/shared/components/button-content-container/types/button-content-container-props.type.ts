import type { PropsWithChildren } from "react";

import type {
	IBorderBottomLeftRadius,
	IBorderBottomRightRadius,
	IBorderTopLeftRadius,
	IBorderTopRightRadius,
	IBorderWidth,
	IColumnGap,
	IFontSize,
	IHeight,
	IPaddingHorizontal,
	IWidth,
	Size
} from "@react-library/common";
import type {
	TransitionBorderRadiusBorderWidth,
	TransitionBorderRadiusUnits
} from "@react-library/components";

/**
 * Props for button content container props
 */
export type ButtonContentContainerProps = (
	Partial<IBorderBottomLeftRadius<TransitionBorderRadiusUnits>> &
	Partial<IBorderBottomRightRadius<TransitionBorderRadiusUnits>> &
	Partial<IBorderTopLeftRadius<TransitionBorderRadiusUnits>> &
	Partial<IBorderTopRightRadius<TransitionBorderRadiusUnits>> &
	Partial<IBorderWidth<TransitionBorderRadiusBorderWidth>> &
	Partial<IColumnGap<Size>> &
	Partial<IFontSize<Size>> &
	Partial<IHeight<Size>> &
	Partial<IPaddingHorizontal<Size>> &
	PropsWithChildren &
	Partial<IWidth<Size>>
);
