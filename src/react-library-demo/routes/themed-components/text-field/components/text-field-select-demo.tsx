import { useState } from "react";

import type { IStyle } from "@react-library/common";
import { TextFieldStyle } from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsTextFieldSelectDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<DemoSection title={`Text Field - select`}>
			{textFieldStyles.map(textFieldStyle => (
				<ReactLibraryThemedComponentsTextFieldSelectDemoStyle
					key={textFieldStyle}
					style={textFieldStyle}
				/>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTextFieldSelectDemoStyle(props: IStyle<TextFieldStyle>) {
	return (
		<>
			<DemoItem label="Basic">
			</DemoItem>
			<DemoItem label="Disabled">
			</DemoItem>
		</>
	);
}
