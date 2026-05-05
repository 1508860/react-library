import { useCallback } from "react";

import { type Callback } from "@react-library/common";

import { TextFieldContainer } from "../shared/components/container";
import { TextFieldExtraTextContainer } from "../shared/components/extra-text-container";
import { TextFieldIconClear } from "../shared/components/icon-clear";
import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldLeadingIcon } from "../shared/components/leading-icon";
import { TextFieldProvider } from "../shared/components/provider";

import { TextFieldNumberInput } from "./components/input";
import { TextFieldNumberSupportingText } from "./components/supporting-text";
import { useTextFieldNumberIsPopulatedState } from "./hooks/text-field-number-is-populated-state.hook";
import type { TextFieldNumberProps } from "./types/text-field-number-props.type";

/**
 * Text field number component
 */
export function TextFieldNumber(props: TextFieldNumberProps) {

	// Clear event
	const handleOnClear = useCallback<Callback<void>>(
		() => props.onValueChange(props.defaultValue ?? undefined),
		[props]
	);

	return (
		<TextFieldProvider<TextFieldNumberProps>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldNumberIsPopulatedState}
		>
			<TextFieldContainer>
				<TextFieldInnerContainer
					{...props}
					key="inner-container"
				>
					<TextFieldLeadingIcon
						key="leading-icon"
						leadingIconName={props.leadingIconName}
						style={props.style}
					/>
					<TextFieldExtraTextContainer
						key="extra-text-container"
						{...props}
					>
						<TextFieldInputContainer
							key="input-container"
							style={props.style}
						>
							<TextFieldInputLabel
								id={props.id}
								isRequired={!!props.isRequired}
								key="label"
								label={props.label}
								style={props.style}
							/>
							<TextFieldNumberInput
								{...props}
								key="input"
							/>
						</TextFieldInputContainer>
					</TextFieldExtraTextContainer>
					<TextFieldIconClear
						key="icon-clear"
						isDisabled={!!props.isDisabled}
						onClear={handleOnClear}
						style={props.style}
					/>
					<TextFieldIconError
						key="icon-error"
						style={props.style}
					/>
				</TextFieldInnerContainer>
				<TextFieldNumberSupportingText
					{...props}
					key="supporting-text"
				/>
			</TextFieldContainer>
		</TextFieldProvider>
	);
}
