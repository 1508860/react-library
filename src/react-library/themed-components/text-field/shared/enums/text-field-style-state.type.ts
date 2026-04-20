/**
 * Text field component style state types
 */
export const TextFieldStyleState = {
	Disabled: "disabled",
	Enabled: "enabled",
	Errored: "errored",
	ErroredFocused: "errored-focused",
	ErroredHovered: "errored-hovered",
	Focused: "focused",
	Hovered: "hovered"
} as const satisfies Record<string, string>;

/**
 * Type for {@link TextFieldStyleState}
 */
export type TextFieldStyleState = (typeof TextFieldStyleState)[keyof typeof TextFieldStyleState];
