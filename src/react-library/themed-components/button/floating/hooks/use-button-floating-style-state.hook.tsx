import type { ButtonContainerUseStyleStateParam } from "../../shared/components/button-container";
import { BUTTON_FLOATING_PROPERTY_MAP } from "../constants/button-floating-property-map.const";
import type { ButtonFloatingProps } from "../types/button-floating-props.type";

/**
 * Derive the floating button style state based on parameters
 * @param param
 */
export function useButtonFloatingStyleState(param: ButtonContainerUseStyleStateParam<ButtonFloatingProps>): [React.CSSProperties] {
	return [{
		alignItems: "center",
		backgroundColor: param.colour.backgroundColour?.toColourString(),
		borderColor: param.colour.borderColour?.toColourString(),
		borderRadius: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].shape[param.config.shape].borderRadius,
		boxShadow: param.colour.boxShadow,
		boxSizing: "border-box",
		columnGap: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].gap,
		display: "inline-flex",
		flexDirection: "row",
		fontSize: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].fontSize,
		height: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].height,
		justifyContent: "center",
		overflow: "hidden",
		paddingLeft: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		paddingRight: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].paddingHorizontal,
		position: "relative",
		width: BUTTON_FLOATING_PROPERTY_MAP.size[param.config.size].content[param.config.content.content].iconWidth
	}];
}
