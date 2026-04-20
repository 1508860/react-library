import { TextFieldStyleState } from "../enums/text-field-style-state.type";
import type { TextFieldPropertyStyleMap } from "../types/text-field-property-map.type";

/**
 * Defines values for text field style sizes for a outlined text field
 */
export const TEXT_FIELD_PROPERTY_MAP_STYLE_OUTLINED: TextFieldPropertyStyleMap = {
	borderRadius: {
		bottomLeft: 4,
		bottomRight: 4,
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
				left: 12,
				paddingHorizontal: 4,
				top: -7
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
				},
				left: {
					style: "solid",
					width: 1
				},
				right: {
					style: "solid",
					width: 1
				},
				top: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 11,
			paddingRight: 11,
			paddingTop: 7
		},
		[TextFieldStyleState.Enabled]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				},
				left: {
					style: "solid",
					width: 1
				},
				right: {
					style: "solid",
					width: 1
				},
				top: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 11,
			paddingRight: 11,
			paddingTop: 7
		},
		[TextFieldStyleState.Errored]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				},
				left: {
					style: "solid",
					width: 1
				},
				right: {
					style: "solid",
					width: 1
				},
				top: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 11,
			paddingRight: 11,
			paddingTop: 7
		},
		[TextFieldStyleState.ErroredFocused]: {
			border: {
				bottom: {
					style: "solid",
					width: 3
				},
				left: {
					style: "solid",
					width: 3
				},
				right: {
					style: "solid",
					width: 3
				},
				top: {
					style: "solid",
					width: 3
				}
			},
			paddingBottom: 5,
			paddingLeft: 9,
			paddingRight: 9,
			paddingTop: 5
		},
		[TextFieldStyleState.ErroredHovered]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				},
				left: {
					style: "solid",
					width: 1
				},
				right: {
					style: "solid",
					width: 1
				},
				top: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 11,
			paddingRight: 11,
			paddingTop: 7
		},
		[TextFieldStyleState.Focused]: {
			border: {
				bottom: {
					style: "solid",
					width: 3
				},
				left: {
					style: "solid",
					width: 3
				},
				right: {
					style: "solid",
					width: 3
				},
				top: {
					style: "solid",
					width: 3
				}
			},
			paddingBottom: 5,
			paddingLeft: 9,
			paddingRight: 9,
			paddingTop: 5
		},
		[TextFieldStyleState.Hovered]: {
			border: {
				bottom: {
					style: "solid",
					width: 1
				},
				left: {
					style: "solid",
					width: 1
				},
				right: {
					style: "solid",
					width: 1
				},
				top: {
					style: "solid",
					width: 1
				}
			},
			paddingBottom: 7,
			paddingLeft: 11,
			paddingRight: 11,
			paddingTop: 7
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
		backgroundColour: "inherit",
		fontSize: 16,
		fontWeight: 400,
		lineHeight: "24pt"
	}
};
