import { Fragment, useCallback } from "react";

import { useResolveState, type Callback, type CallbackWithParameter } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { IconClick } from "../../../shared";

import { TEXT_FIELD_PROPERTY_MAP } from "../../constants/text-field-property-map.const";
import { useTextFieldColourStateContext } from "../../hooks/text-field-colour-state-context.hook";
import { useTextFieldEventsContext } from "../../hooks/text-field-events-context.hook";
import { useTextFieldIsErrored } from "../../hooks/text-field-is-errored-state.hook";
import { useTextFieldLabelState } from "../../hooks/text-field-label.hook";
import type { TextFieldPropsText } from "../../types/text-field-props.type";

import { useTextFieldInputTextIsPopulatedState } from "./hooks/text-field-input-text-is-populated-state.hook";
import { textFieldInputTextContainerStyle } from "./styles/text-field-input-text-container-style.function";
import { textFieldInputTextLabelStyle } from "./styles/text-field-input-text-label-style.function";
import { textFieldInputTextStyle } from "./styles/text-field-input-text-style.function";

/**
 * Text field input text component
 */
export function TextFieldInputText(props: TextFieldPropsText) {

	// Contexts
	const colourState = useTextFieldColourStateContext();
	const textFieldEvents = useTextFieldEventsContext();

	// Error state
	const isErrored = useTextFieldIsErrored();

	// Is populated
	const isPopulatedState = useTextFieldInputTextIsPopulatedState(props);

	// Label
	const label = useTextFieldLabelState(props.label, props.isRequired);

	// On value change
	const resolveValue = useCallback<Callback<string>>(() => props.value ?? "", [props.value]);
	const value = useResolveState(resolveValue);
	const handleOnValueChange = useCallback<CallbackWithParameter<React.ChangeEvent<HTMLInputElement>, void>>(
		(event) => {
			if (event.target.value.trim().length === 0) props.onValueChange(undefined)
			props.onValueChange(event.target.value)
		},
		[props]
	);

	// Clear event
	const handleOnClear = useCallback<Callback<void>>(
		() => props.onValueChange(props.defaultText ?? undefined),
		[props]
	);

	return (
		<>
			{
				props.leadingIconName ?
					<MaterialIconSvg
						colour={colourState.leadingIcon}
						key="leading-icon"
						name={props.leadingIconName}
						size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
						style={MaterialIconStyle.Default}
					/> :
					<Fragment key="no-leading-icon" />
			}
			<div
				key="input"
				style={textFieldInputTextContainerStyle(props.style)}
			>
				<label
					htmlFor={props.name}
					key="label"
					style={textFieldInputTextLabelStyle(props.style, colourState, isPopulatedState.isPopulated)}
				>
					{label}
				</label>
				<input
					disabled={props.isDisabled}
					id={props.name}
					key="input"
					name={props.name}
					onBlur={textFieldEvents.onBlur}
					onChange={handleOnValueChange}
					onFocus={textFieldEvents.onFocus}
					onMouseEnter={textFieldEvents.onMouseEnter}
					onMouseLeave={textFieldEvents.onMouseLeave}
					placeholder={label}
					style={textFieldInputTextStyle(props.content, props.extraTextPosition, props.style, colourState)}
					type={props.isPassword ? "password" : "text"}
					value={value}
				/>
			</div>
			{
				(!isErrored && !isPopulatedState.isDefault) ?
					<IconClick
						colour={colourState.trailingIcon}
						key="trailing-icon-clear"
						name={MaterialIconName.Cancel}
						onClick={handleOnClear}
						size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
					/> :
					<Fragment key="no-trailing-icon-clear" />
			}
			{
				isErrored ?
					<MaterialIconSvg
						colour={colourState.trailingIcon}
						key="trailing-icon-error"
						name={MaterialIconName.Error}
						size={TEXT_FIELD_PROPERTY_MAP.style[props.style].iconSize}
						style={MaterialIconStyle.Default}
					/> :
					<Fragment key="no-trailing-icon-error" />
			}
		</>
	);
}
