/**
 * Checkbox selected state
 */
export const CheckboxSelectedState = {
	Indeterminate: "indeterminate",
	Selected: "selected",
	Unselected: "unselected"
} as const satisfies Record<string, string>;

/**
 * Type for {@link CheckboxSelectedState}
 */
export type CheckboxSelectedState = (typeof CheckboxSelectedState)[keyof typeof CheckboxSelectedState];
