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

import { TextFieldTextInput } from "./components/input";
import { TextFieldTextSupportingText } from "./components/supporting-text";
import { useTextFieldTextIsPopulatedState } from "./hooks/text-field-text-is-populated-state.hook";
import type { TextFieldTextProps } from "./types/text-field-text-props.type";

/**
 * Text field text component
 */
export function TextFieldText(props: TextFieldTextProps) {

	// Clear event
	const handleOnClear = useCallback<Callback<void>>(
		() => props.onValueChange(props.defaultText ?? undefined),
		[props]
	);

	return (
		<TextFieldProvider<TextFieldTextProps>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldTextIsPopulatedState}
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
						key="input-container"
						{...props}
					>
						<TextFieldInputContainer
							key="input-container"
							style={props.style}
						>
							<TextFieldInputLabel
								isRequired={!!props.isRequired}
								key="label"
								label={props.label}
								name={props.name}
								style={props.style}
							/>
							<TextFieldTextInput
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
				<TextFieldTextSupportingText
					{...props}
					key="supporting-text"
				/>
			</TextFieldContainer>
		</TextFieldProvider>
	);
}
