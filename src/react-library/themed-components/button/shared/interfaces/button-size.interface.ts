import type { ButtonSize } from "../enums/button-size.type";

/**
 * Describes button size
 */
export interface IButtonSize<TButtonSize extends ButtonSize> {
	size: TButtonSize;
}
