import { MaterialIconName } from "@react-library/material-icons";

import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldLeadingIcon } from "../shared/components/leading-icon";
import { TextFieldProvider } from "../shared/components/provider";

import { TextFieldDateContainer } from "./components/container";
import { TextFieldDateInput } from "./components/input";
import { TextFieldDateModal } from "./components/modal";
import { TextFieldDateModalProvider } from "./components/modal-provider";
import { TextFieldDateSupportingText } from "./components/supporting-text";
import { useTextFieldDateIsPopulatedState } from "./hooks/text-field-date-is-populated-state.hook";
import type { TextFieldDateProps } from "./types/text-field-date-props.type";

/**
 * Text field date component
 */
export function TextFieldDate(props: TextFieldDateProps) {
	return (
		<TextFieldProvider<TextFieldDateProps>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldDateIsPopulatedState}
		>
			<TextFieldDateModalProvider>
				<TextFieldDateContainer>
					<TextFieldInnerContainer
						{...props}
						key="inner-container"
					>
						<TextFieldLeadingIcon
							key="leading-icon"
							leadingIconName={MaterialIconName.CalendarToday}
							style={props.style}
						/>
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
							<TextFieldDateInput
								{...props}
								key="input"
							/>
						</TextFieldInputContainer>
						<TextFieldIconError
							key="icon-error"
							style={props.style}
						/>
					</TextFieldInnerContainer>
					<TextFieldDateSupportingText
						{...props}
						key="supporting-text"
					/>
				</TextFieldDateContainer>
				<TextFieldDateModal
					{...props}
					key="modal"
				/>
			</TextFieldDateModalProvider>
		</TextFieldProvider>
	);
}
