import type {
	IBorderRadius,
	IContainer,
	IContentHeight,
	IDivider,
	IFontSize,
	IGap,
	IGroup,
	IIconSize,
	IItem,
	ILineHeight,
	IMarginVertical,
	IPaddingHorizontal,
	IPaddingVertical,
	ISupportingText,
	IText,
	Size,
	SizeWithUnits
} from "@react-library/common";

/**
 * Describes values for menu style sizes
 */
export type MenuPropertyMap = (
	IContainer<MenuPropertyContainerMap> &
	IDivider<MenuPropertyDividerMap> &
	IGroup<MenuPropertyGroupMap> &
	IItem<MenuPropertyItemMap>
);

type MenuPropertyContainerMap = (
	IBorderRadius<Size> &
	IGap<Size>
);

type MenuPropertyDividerMap = (
	IPaddingVertical<Size>
);

type MenuPropertyGroupMap = (
	IBorderRadius<Size> &
	IPaddingHorizontal<Size> &
	IPaddingVertical<Size>
);

type MenuPropertyItemMap = (
	IBorderRadius<Size> &
	IContentHeight<Size> &
	IGap<Size> &
	IIconSize<Size> &
	IMarginVertical<Size> &
	IPaddingHorizontal<Size> &
	ISupportingText<MenuPropertyItemTextMap> &
	IText<MenuPropertyItemTextMap>
);

type MenuPropertyItemTextMap = (
	IFontSize<Size> &
	ILineHeight<SizeWithUnits>
);
