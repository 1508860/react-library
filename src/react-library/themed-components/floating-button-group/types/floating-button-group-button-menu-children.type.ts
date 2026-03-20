import type { ArrayMaxLength6, ArrayMinLength2 } from "@react-library/common";

/**
 * Describes configuration for a floating button group's button where the action is menu
 */
export type FloatingButtonGroupButtonMenuChildren<TChild> = (
	ArrayMinLength2<TChild> &
	ArrayMaxLength6<TChild>
);
