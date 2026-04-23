import type { IValue } from "@react-library/common";

import type { TextFieldPropsInputReadonly } from "../../shared/types/text-field-props-input-readonly.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsTextareaHeight } from "../../shared/types/text-field-props-textarea-height.type";

/**
 * Props for text field readonly textarea component
 */
export type TextFieldReadonlyTextareaProps = (
	TextFieldPropsInputReadonly &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsTextareaHeight &
	IValue<string>
);
