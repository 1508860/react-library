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

import { TextFieldCurrencyInput } from "./components/input";
import { TextFieldCurrencySupportingText } from "./components/supporting-text";
import { useTextFieldCurrencyIsPopulatedState } from "./hooks/text-field-currency-is-populated-state.hook";
import type { TextFieldCurrencyProps } from "./types/text-field-currency-props.type";

/**
 * Text field currency component
 */
export function TextFieldCurrency(props: TextFieldCurrencyProps) {

	// Clear event
	const handleOnClear = useCallback<Callback<void>>(
		() => props.onValueChange(props.defaultValue ?? undefined),
		[props]
	);

	return (
		<TextFieldProvider<TextFieldCurrencyProps>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldCurrencyIsPopulatedState}
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
							<TextFieldCurrencyInput
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
				<TextFieldCurrencySupportingText
					{...props}
					key="supporting-text"
				/>
			</TextFieldContainer>
		</TextFieldProvider>
	);
}
