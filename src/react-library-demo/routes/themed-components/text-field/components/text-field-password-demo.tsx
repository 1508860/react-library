import { Fragment, useState } from "react";

import { TextFieldPassword, TextFieldStyle, type TextFieldValidationPasswordConfig } from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldPasswordDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));
	const [value, setValue] = useState<string | undefined>(() => " ");
	const [validation] = useState<TextFieldValidationPasswordConfig | undefined>(() => ({
		hasLowercase: true,
		hasNumeric: true,
		hasSpecialCharacter: true,
		hasUppercase: true,
		hasNoWhitespace: true,
		maxCharacterCount: 20,
		minCharacterCount: 10
	}));

	return (
		<DemoSection title="Text Field - password">
			{textFieldStyles.map(textFieldStyle => (
				<Fragment key={textFieldStyle}>
					<DemoItem
						key="no-validation"
						label={textFieldStyle}
					>
						<TextFieldPassword
							label="Label"
							maxWidth={500}
							minWidth={300}
							name={`password-${textFieldStyle}`}
							onValueChange={setValue}
							style={textFieldStyle}
							value={value}
						/>

					</DemoItem>
					<DemoItem
						key="validation"
						label={`${textFieldStyle} - validation`}
					>
						<TextFieldPassword
							label="Label"
							maxWidth={500}
							minWidth={300}
							name={`password-${textFieldStyle}-validation`}
							onValueChange={setValue}
							style={textFieldStyle}
							validation={validation}
							value={value}
						/>
					</DemoItem>
				</Fragment>
			))}
		</DemoSection>
	);
}
