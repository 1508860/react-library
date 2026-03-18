import { ButtonGroupAction } from "../../enums/button-group-action.type";
import { ButtonGroupClick } from "../button-group-click";
import { ButtonGroupSelection } from "../button-group-selection";
import { ButtonGroupSplit } from "../button-group-split";
import type { ButtonGroupContentProps } from "./types/button-group-content-props.type";

/**
 * Component to handle the button group content and map the collection of buttons
 * @param props
 */
export function ButtonGroupContent(props: ButtonGroupContentProps) {
	switch (props.buttonGroup.action) {
		case ButtonGroupAction.Click: return (
			(Array.isArray(props.buttonGroup.children) ? props.buttonGroup.children : [props.buttonGroup.children])
				.map(child => (
					<ButtonGroupClick
						button={child}
						buttonGroup={props.buttonGroup}
						key={`${props.buttonGroup.action}-button-click-${child.key}`}
					/>
				))
		);
		case ButtonGroupAction.ClickOrSplit: return (
			(Array.isArray(props.buttonGroup.children) ? props.buttonGroup.children : [props.buttonGroup.children])
				.map(child => (
					(child.action === ButtonGroupAction.Split) ?
						<ButtonGroupSplit
							button={child}
							buttonGroup={props.buttonGroup}
							key={`${props.buttonGroup.action}-button-split-${child.key}`}
						/> :
						<ButtonGroupClick
							button={child}
							buttonGroup={props.buttonGroup}
							key={`${props.buttonGroup.action}-button-click-${child.key}`}
						/>
				))
		);
		case ButtonGroupAction.Selection: return (
			(Array.isArray(props.buttonGroup.children) ? props.buttonGroup.children : [props.buttonGroup.children])
				.map(child => (
					<ButtonGroupSelection
						button={child}
						buttonGroup={props.buttonGroup}
						key={`${props.buttonGroup.action}-button-selection-${child.key}`}
					/>
				))
		);
		case ButtonGroupAction.Split: return (
			(Array.isArray(props.buttonGroup.children) ? props.buttonGroup.children : [props.buttonGroup.children])
				.map(child => (
					<ButtonGroupSplit
						button={child}
						buttonGroup={props.buttonGroup}
						key={`${props.buttonGroup.action}-button-split-${child.key}`}
					/>
				))
		);
	}
}
