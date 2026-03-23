import { Orientation } from "@react-library/common";

import { FloatingButtonGroupContainer } from "./components/floating-button-group-container";
import { FloatingButtonGroupDefault } from "./components/floating-button-group-default";
import { FloatingButtonGroupMenu } from "./components/floating-button-group-menu";
import { FloatingButtonGroupPosition } from "./components/floating-button-group-position";
import { FloatingButtonGroupButton } from "./enums/floating-button-group-button.type";
import type { FloatingButtonGroupPropsAll } from "./types/floating-button-group-props.type";

/**
 * Component to handle floating button groups
 * @param props
 */
export function FloatingButtonGroup(props: FloatingButtonGroupPropsAll) {

	if (props.type === FloatingButtonGroupButton.Menu) return (
		<FloatingButtonGroupPosition
			key={props.type}
			orientation={props.orientation}
			positionStrategy={props.positionStrategy}
		>
			<FloatingButtonGroupContainer>
				{props.children}
				<FloatingButtonGroupMenu
					colourSchemeStyle={props.colourSchemeStyle}
					iconName={props.iconName}
					iconStyle={props.iconStyle}
					isDisabled={props.isDisabled}
					orientation={props.orientation}
					positionStrategy={props.positionStrategy}
					size={props.size}
				>
					{props.items}
				</FloatingButtonGroupMenu>
			</FloatingButtonGroupContainer>
		</FloatingButtonGroupPosition>
	);

	return (
		<FloatingButtonGroupPosition
			key={props.type}
			orientation={Orientation.Vertical}
			positionStrategy={props.positionStrategy}
		>
			<FloatingButtonGroupContainer>
				{props.children}
				<FloatingButtonGroupDefault
					colourSchemeStyle={props.colourSchemeStyle}
					content={props.content}
					isDisabled={props.isDisabled}
					onClick={props.onClick}
					size={props.size}
				/>
			</FloatingButtonGroupContainer>
		</FloatingButtonGroupPosition>
	);
}
