import type { ButtonContainerUseStyleStateParam } from "../../shared/components/button-container";
import { ButtonContent } from "../../shared/enums/button-content.type";
import { ButtonShape } from "../../shared/enums/button-shape.type";
import { BUTTON_SELECTION_PROPERTY_MAP } from "../constants/button-selection-property-map.const";
import type { ButtonSelectionProps } from "../types/button-selection-props.type";

/**
 * Derive the selection button style state based on parameters
 * @param param
 */
export function useButtonSelectionStyleState(param: ButtonContainerUseStyleStateParam<ButtonSelectionProps>): [React.CSSProperties] {
	return [{
		alignItems: "center",
		backgroundColor: param.colour.backgroundColour?.toColourString(),
		borderColor: param.colour.borderColour?.toColourString(),
		borderRadius: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].shape[(param.config.isSelected ? ButtonShape.Round : ButtonShape.Soft)].borderRadius,
		borderStyle: BUTTON_SELECTION_PROPERTY_MAP.style[param.config.style].borderStyle,
		borderWidth: BUTTON_SELECTION_PROPERTY_MAP.style[param.config.style].borderWidth,
		boxShadow: param.colour.boxShadow,
		boxSizing: "border-box",
		columnGap: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].gap,
		display: "inline-flex",
		flexDirection: "row",
		fontSize: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].fontSize,
		height: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].height,
		justifyContent: "center",
		overflow: "hidden",
		paddingLeft: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		paddingRight: BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		position: "relative",
		transitionDuration: `${BUTTON_SELECTION_PROPERTY_MAP.transition.borderRadius.durationMs}ms`,
		transitionProperty: "border-radius",
		width: (
			(param.config.content.content === ButtonContent.Icon) ?
				BUTTON_SELECTION_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].iconWidth[param.config.content.iconWidth] :
				undefined
		)
	}];
}
