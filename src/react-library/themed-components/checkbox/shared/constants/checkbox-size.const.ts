import { toSizeWithUnits, type Size, type SizePx, type SizeWithUnits } from "@react-library/common";

/**
 * Checkbox container gap between child items
 */
export const CHECKBOX_SIZE_CONTAINER_GAP: Size = 4;

/**
 * Checkbox container padding vertical
 */
export const CHECKBOX_SIZE_CONTAINER_PADDING_VERTICAL: Size = 4;

/**
 * Checkbox label font size
 */
export const CHECKBOX_SIZE_LABEL_FONT: Size = 14;

/**
 * Checkbox target border radius
 */
export const CHECKBOX_SIZE_TARGET_BORDER_RADIUS: Size = 2;

/**
 * Checkbox target border width unselected
 */
export const CHECKBOX_SIZE_TARGET_BORDER_WIDTH_UNSELECTED: Size = 2;

/**
 * Checkbox target border width selected
 */
export const CHECKBOX_SIZE_TARGET_BORDER_WIDTH_SELECTED: Size = 0;

/**
 * Checkbox target container height / width
 */
export const CHECKBOX_SIZE_TARGET_CONTAINER: SizePx = 40;

/**
 * Checkbox icon size
 */
export const CHECKBOX_SIZE_ICON: Size = 18;

/**
 * Checkbox label font size
 */
export const CHECKBOX_SIZE_LABEL_LINE_HEIGHT: SizeWithUnits = toSizeWithUnits(CHECKBOX_SIZE_TARGET_CONTAINER);
