import type { IValue } from "@react-library/common";

import type { TextFieldPropsExtraText } from "../../shared/types/text-field-props-extra-text.type";
import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";

/**
 * Props for text field readonly component
 */
export type TextFieldReadonlyProps = (
	TextFieldPropsExtraText &
	TextFieldPropsId &
	TextFieldPropsLabel &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	IValue<string>
);
