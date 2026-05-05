import { useState } from "react";

import type { Size } from "@react-library/common";
import { TextFieldStyle, TextFieldTextarea, type TextFieldValidationTextareaConfig } from "@react-library/themed-components";

import { DEMO_LOREM_IPSUM, DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldTextareaDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));
	const [value, setValue] = useState<string | undefined>(() => DEMO_LOREM_IPSUM);
	const [inputHeight] = useState<Size>(() => 500);
	const [inputMaxHeight] = useState<Size>(() => 800);
	const [inputMinHeight] = useState<Size>(() => 200);
	const [validation] = useState<TextFieldValidationTextareaConfig>(() => ({
		maxCharacterCount: 50,
		maxWordCount: 20
	}));

	return (
		<DemoSection title="Text Field - textarea">
			{textFieldStyles.map(textFieldStyle => (
				<DemoItem
					key={textFieldStyle}
					label={textFieldStyle}
				>
					<TextFieldTextarea
						id={`textarea-${textFieldStyle}`}
						inputheight={inputHeight}
						inputMaxheight={inputMaxHeight}
						inputMinheight={inputMinHeight}
						label="Label"
						name={`textarea-${textFieldStyle}`}
						onValueChange={setValue}
						style={textFieldStyle}
						validation={validation}
						value={value}
						width={500}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}
