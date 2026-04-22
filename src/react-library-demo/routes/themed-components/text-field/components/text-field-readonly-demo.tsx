import { useState } from "react";

import {
	TextFieldExtraTextPosition,
	TextFieldReadonly,
	TextFieldStyle
} from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldReadonlyDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));
	const [value] = useState<string>(() => "A readonly input");

	return (
		<DemoSection title="Text Field - readonly">
			{textFieldStyles.map(textFieldStyle => (
				<DemoItem
					key={textFieldStyle}
					label={textFieldStyle}
				>
					<TextFieldReadonly
						extraTextPosition={TextFieldExtraTextPosition.None}
						label="Label"
						maxWidth={500}
						minWidth={300}
						name={`readonly-${textFieldStyle}`}
						style={textFieldStyle}
						value={value}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}
