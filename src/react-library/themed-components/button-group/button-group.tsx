import type { ReactElement } from "react";

import {
	ButtonClick,
	ButtonContent,
	ButtonSelection,
	ButtonShape,
	ButtonSplit
} from "../button";

import { ButtonGroupAction } from "./enums/button-group-action.type";
import { buttonGroupContainerStyle } from "./styles/button-group-container-style.function";
import type {
	ButtonGroupButtonClick,
	ButtonGroupButtonSelection,
	ButtonGroupButtonSplit
} from "./types/button-group-button.type";
import type { ButtonGroupProps } from "./types/button-group-props.type";

/**
 * Component to handle button groups
 * @param props
 */
export function ButtonGroup(props: ButtonGroupProps) {
	return (
		<div
			key="button-group-container"
			style={buttonGroupContainerStyle(props)}
		>
			{ButtonList(props)}
		</div>
	);
}

/**
 * Resolve button list in a button group
 */
function ButtonList(props: ButtonGroupProps): Array<ReactElement> {

	switch (props.action) {
		case ButtonGroupAction.Click: return (
			(Array.isArray(props.children) ? props.children : [props.children])
				.map(child => (
					<_ButtonClick
						button={child}
						buttonGroupProps={props}
						key={`${props.action}-button-click-${child.key}`}
					/>
				))
		);
		case ButtonGroupAction.ClickOrSplit: return (
			(Array.isArray(props.children) ? props.children : [props.children])
				.map(child => (
					(child.action === ButtonGroupAction.Split) ?
						<_ButtonSplit
							button={child}
							buttonGroupProps={props}
							key={`${props.action}-button-split-${child.key}`}
						/> :
						<_ButtonClick
							button={child}
							buttonGroupProps={props}
							key={`${props.action}-button-click-${child.key}`}
						/>
				))
		);
		case ButtonGroupAction.Selection: return (
			(Array.isArray(props.children) ? props.children : [props.children])
				.map(child => (
					<_ButtonSelection
						button={child}
						buttonGroupProps={props}
						key={`${props.action}-button-selection-${child.key}`}
					/>
				))
		);
		case ButtonGroupAction.Split: return (
			(Array.isArray(props.children) ? props.children : [props.children])
				.map(child => (
					<_ButtonSplit
						button={child}
						buttonGroupProps={props}
						key={`${props.action}-button-split-${child.key}`}
					/>
				))
		);
	}
}

function _ButtonClick(props: {
	button: ButtonGroupButtonClick
	buttonGroupProps: ButtonGroupProps;
}): ReactElement {
	if (props.button.content === ButtonContent.Icon) {
		return <ButtonClick
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			iconWidth={props.button.iconWidth}
			isDisabled={props.button.isDisabled}
			key={props.button.key}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	} else if (props.button.content === ButtonContent.IconLabel) {
		return <ButtonClick
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			key={props.button.key}
			label={props.button.label}
			onClick={props.button.onClick}
			shape={ButtonShape.Round}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	}
	return <ButtonClick
		content={props.button.content}
		isDisabled={props.button.isDisabled}
		key={props.button.key}
		label={props.button.label}
		onClick={props.button.onClick}
		shape={ButtonShape.Round}
		size={props.buttonGroupProps.size}
		style={props.buttonGroupProps.style}
	/>
}

function _ButtonSelection(props: {
	button: ButtonGroupButtonSelection;
	buttonGroupProps: ButtonGroupProps;
}): ReactElement {
	if (props.button.content === ButtonContent.Icon) {
		return <ButtonSelection
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			iconWidth={props.button.iconWidth}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			key={props.button.key}
			onClick={props.button.onClick}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	} else if (props.button.content === ButtonContent.IconLabel) {
		return <ButtonSelection
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			isSelected={props.button.isSelected}
			key={props.button.key}
			label={props.button.label}
			onClick={props.button.onClick}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	}
	return <ButtonSelection
		content={props.button.content}
		isDisabled={props.button.isDisabled}
		isSelected={props.button.isSelected}
		key={props.button.key}
		label={props.button.label}
		onClick={props.button.onClick}
		size={props.buttonGroupProps.size}
		style={props.buttonGroupProps.style}
	/>
}

function _ButtonSplit(props: {
	button: ButtonGroupButtonSplit;
	buttonGroupProps: ButtonGroupProps;
}): ReactElement {
	if (props.button.content === ButtonContent.Icon) {
		return <ButtonSplit
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			key={props.button.key}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	} else if (props.button.content === ButtonContent.IconLabel) {
		return <ButtonSplit
			content={props.button.content}
			iconName={props.button.iconName}
			iconStyle={props.button.iconStyle}
			isDisabled={props.button.isDisabled}
			key={props.button.key}
			label={props.button.label}
			menuElement={props.button.menuElement}
			onClick={props.button.onClick}
			size={props.buttonGroupProps.size}
			style={props.buttonGroupProps.style}
		/>
	}
	return <ButtonSplit
		content={props.button.content}
		isDisabled={props.button.isDisabled}
		key={props.button.key}
		label={props.button.label}
		menuElement={props.button.menuElement}
		onClick={props.button.onClick}
		size={props.buttonGroupProps.size}
		style={props.buttonGroupProps.style}
	/>
}
