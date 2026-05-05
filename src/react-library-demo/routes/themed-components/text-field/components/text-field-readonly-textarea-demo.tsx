import { useState } from "react";

import type { Size } from "@react-library/common";
import { TextFieldReadonlyTextarea, TextFieldStyle } from "@react-library/themed-components";

import { DEMO_LOREM_IPSUM, DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldReadonlyTextareaDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));
	const [value] = useState<string>(() => DEMO_LOREM_IPSUM);
	const [inputHeight] = useState<Size>(() => 500);
	const [inputMaxHeight] = useState<Size>(() => 800);
	const [inputMinHeight] = useState<Size>(() => 200);

	return (
		<DemoSection title="Text Field - readonly textarea">
			{textFieldStyles.map(textFieldStyle => (
				<DemoItem
					key={textFieldStyle}
					label={textFieldStyle}
				>
					<TextFieldReadonlyTextarea
						id={`textarea-${textFieldStyle}`}
						inputheight={inputHeight}
						inputMaxheight={inputMaxHeight}
						inputMinheight={inputMinHeight}
						label="Label"
						name={`textarea-${textFieldStyle}`}
						style={textFieldStyle}
						value={value}
						width={500}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}
