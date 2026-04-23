import { TextFieldStyleState } from "../enums/text-field-style-state.type";
import type { TextFieldPropertyStyleMap } from "../types/text-field-property-map.type";

/**
 * Defines values for text field style sizes for a filled text field
 */
export const TEXT_FIELD_PROPERTY_MAP_STYLE_FILLED: TextFieldPropertyStyleMap = {
	borderRadius: {
		topLeft: 4,
		topRight: 4
	},
	gap: 16,
	iconSize: 24,
	label: {
		populated: {
			false: {
				fontSize: 16,
				fontWeight: 400,
				left: undefined,
				top: undefined
			},
			true: {
				fontSize: 12,
				fontWeight: 400,
				left: undefined,
				top: 4
			}
		}
	},
	minHeight: 56,
	styleState: {
		[TextFieldStyleState.Disabled]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.Enabled]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.Errored]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.ErroredFocused]: {
			border: {
				bottom: {
					style: "solid",
					width: 3
				}
			},
			paddingBottom: 5,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.ErroredHovered]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.Focused]: {
			border: {
				bottom: {
					style: "solid",
					width: 3
				}
			},
			paddingBottom: 5,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		},
		[TextFieldStyleState.Hovered]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 12,
			paddingRight: 12,
			paddingTop: 8
		}
	},
	supportingText: {
		fontSize: 12,
		fontWeight: 400,
		gap: 16,
		lineHeight: "16pt",
		paddingBottom: 4,
		paddingHorizontal: 16,
		paddingTop: 4,
	},
	text: {
		fontSize: 16,
		fontWeight: 400,
		lineHeight: "24pt"
	},
	textarea: {
		marginTop: 15
	}
};
