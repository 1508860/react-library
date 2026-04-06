import {
	ButtonClick,
	ButtonSelection,
	ButtonShape,
	ButtonSplit,
	ButtonText
} from "../../../button";

import { ButtonGroupAction } from "../../enums/button-group-action.type";

import type { ButtonGroupContentProps } from "./types/button-group-content-props.type";

/**
 * Component to handle the button group content and map the collection of buttons
 * @param props
 */
export function ButtonGroupContent(props: ButtonGroupContentProps) {

	const buttonGroup = props.buttonGroup;

	switch (buttonGroup.action) {
		case ButtonGroupAction.Click: return (
			(Array.isArray(buttonGroup.children) ? buttonGroup.children : [buttonGroup.children])
				.map(child => (
					<ButtonClick
						content={child.content}
						isDisabled={child.isDisabled}
						key={`${buttonGroup.action}-key-${child.key}`}
						onClick={child.onClick}
						shape={ButtonShape.Round}
						size={buttonGroup.size}
						style={buttonGroup.style}
					/>
				))
		);
		case ButtonGroupAction.ClickOrSplit: return (
			(Array.isArray(buttonGroup.children) ? buttonGroup.children : [buttonGroup.children])
				.map(child => (
					(child.action === ButtonGroupAction.Split) ?
						<ButtonSplit
							content={child.content}
							isDisabled={child.isDisabled}
							key={`${buttonGroup.action}-${child.action}-key-${child.key}`}
							menuElement={child.menuElement}
							onClick={child.onClick}
							size={buttonGroup.size}
							style={buttonGroup.style}
						/> :
						<ButtonClick
							content={child.content}
							isDisabled={child.isDisabled}
							key={`${buttonGroup.action}-${child.action}-key-${child.key}`}
							onClick={child.onClick}
							shape={ButtonShape.Round}
							size={buttonGroup.size}
							style={buttonGroup.style}
						/>
				))
		);
		case ButtonGroupAction.Selection: return (
			(Array.isArray(buttonGroup.children) ? buttonGroup.children : [buttonGroup.children])
				.map(child => (
					<ButtonSelection
						content={child.content}
						isDisabled={child.isDisabled}
						isSelected={child.isSelected}
						key={`${buttonGroup.action}-key-${child.key}`}
						onClick={child.onClick}
						size={buttonGroup.size}
						style={buttonGroup.style}
					/>
				))
		);
		case ButtonGroupAction.Split: return (
			(Array.isArray(buttonGroup.children) ? buttonGroup.children : [buttonGroup.children])
				.map(child => (
					<ButtonSplit
						content={child.content}
						isDisabled={child.isDisabled}
						key={`${buttonGroup.action}-key-${child.key}`}
						menuElement={child.menuElement}
						onClick={child.onClick}
						size={buttonGroup.size}
						style={buttonGroup.style}
					/>
				))
		);
		case ButtonGroupAction.Text: return (
			(Array.isArray(buttonGroup.children) ? buttonGroup.children : [buttonGroup.children])
				.map(child => (
					<ButtonText
						content={child.content}
						isDisabled={child.isDisabled}
						key={`${buttonGroup.action}-key-${child.key}`}
						onClick={child.onClick}
						size={buttonGroup.size}
						style={buttonGroup.style}
					/>
				))
		);
	}
}
