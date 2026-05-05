import { toSizeWithUnits, type Size, type SizePx, type SizeWithUnits } from "@react-library/common";

/**
 * Radio button container gap between child items
 */
export const RADIO_BUTTON_SIZE_CONTAINER_GAP: Size = 4;

/**
 * Radio button container padding vertical
 */
export const RADIO_BUTTON_SIZE_CONTAINER_MARGIN_VERTICAL: Size = 4;

/**
 * Radio button label font size
 */
export const RADIO_BUTTON_SIZE_LABEL_FONT: Size = 14;

/**
 * Radio button target container height / width
 */
export const RADIO_BUTTON_SIZE_TARGET_CONTAINER: SizePx = 40;

/**
 * Radio button icon size
 */
export const RADIO_BUTTON_SIZE_ICON: Size = 20;

/**
 * Radio button label font size
 */
export const RADIO_BUTTON_SIZE_LABEL_LINE_HEIGHT: SizeWithUnits = toSizeWithUnits(RADIO_BUTTON_SIZE_TARGET_CONTAINER);
