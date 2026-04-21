import { useState } from "react";
import { TextFieldContainer } from "../shared/components/container";
import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldIconShowContent } from "../shared/components/icon-show-content";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldProvider } from "../shared/components/provider";

import { TextFieldPasswordInput } from "./components/input";
import { TextFieldPasswordSupportingText } from "./components/supporting-text";
import { useTextFieldPasswordIsPopulatedState } from "./hooks/text-field-password-is-populated-state.hook";
import type { TextFieldPasswordProps } from "./types/text-field-password-props.type";

/**
 * Text field password component
 */
export function TextFieldPassword(props: TextFieldPasswordProps) {

	const [showContent, setShowContent] = useState<boolean>(() => false);

	return (
		<TextFieldProvider<TextFieldPasswordProps>
			isDisabled={false}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldPasswordIsPopulatedState}
		>
			<TextFieldContainer>
				<TextFieldInnerContainer
					{...props}
					key="inner-container"
				>
					<TextFieldInputContainer
						key="input-container"
						style={props.style}
					>
						<TextFieldInputLabel
							isRequired={true}
							key="label"
							label={props.label}
							name={props.name}
							style={props.style}
						/>
						<TextFieldPasswordInput
							{...props}
							key="input"
							showContent={showContent}
						/>
					</TextFieldInputContainer>
					<TextFieldIconShowContent
						setShowcontent={setShowContent}
						showContent={showContent}
						style={props.style}
						key="show-content"
					/>
					<TextFieldIconError
						key="icon-error"
						style={props.style}
					/>
				</TextFieldInnerContainer>
				<TextFieldPasswordSupportingText
					{...props}
					key="supporting-text"
				/>
			</TextFieldContainer>
		</TextFieldProvider>
	);
}
