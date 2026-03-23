

import { ButtonContentResolver } from "../../../shared/components/button-content-resolver";
import { ButtonContent } from "../../../shared/enums/button-content.type";
import { ButtonSelectionStyleFilledMap } from "../../enums/button-selection-style-filled-map.type";

import type { ButtonSelectionContentResolverProps } from "./types/button-selection-content-resolver-props.type";

/**
 * Button selection content resolver component
 * Wrapper for {@link ButtonContentResolver} but handles filled / unfilled icons if selected / unselected 
 * @param props
 */
export function ButtonSelectionContentResolver(props: ButtonSelectionContentResolverProps) {

	if (props.content.content === ButtonContent.Icon) return (
		<ButtonContentResolver
			content={{
				content: props.content.content,
				iconName: props.content.iconName,
				iconStyle: props.isSelected ? ButtonSelectionStyleFilledMap[props.content.iconStyle] : props.content.iconStyle
			}}
			iconSize={props.iconSize}
			key="icon"
		/>
	);

	if (props.content.content === ButtonContent.IconLabel) return (
		<ButtonContentResolver
			content={{
				content: props.content.content,
				iconName: props.content.iconName,
				iconStyle: props.isSelected ? ButtonSelectionStyleFilledMap[props.content.iconStyle] : props.content.iconStyle,
				label: props.content.label
			}}
			iconSize={props.iconSize}
			key="icon-label"
		/>
	);

	return (
		<ButtonContentResolver
			content={props.content}
			iconSize={props.iconSize}
			key="label"
		/>
	);
}
