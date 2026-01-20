/**
 * Button group action types
 */
export const ButtonGroupAction = {
	Click: "click",
	ClickOrSplit: "click-or-split",
	Split: "split",
	Selection: "selection"
} as const satisfies Record<string, string>;

/**
 * Type for {@link ButtonGroupAction}
 */
export type ButtonGroupAction = (typeof ButtonGroupAction)[keyof typeof ButtonGroupAction];
