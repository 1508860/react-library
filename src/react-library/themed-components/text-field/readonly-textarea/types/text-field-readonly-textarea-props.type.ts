import type { IValue } from "@react-library/common";

import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsTextareaHeight } from "../../shared/types/text-field-props-textarea-height.type";

/**
 * Props for text field readonly textarea component
 */
export type TextFieldReadonlyTextareaProps = (
	TextFieldPropsId &
	TextFieldPropsLabel &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsTextareaHeight &
	IValue<string>
);
