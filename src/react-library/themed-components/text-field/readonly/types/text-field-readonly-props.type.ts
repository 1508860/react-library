import type { IValue } from "@react-library/common";

import type { TextFieldCommonPropsReadonly } from "../../shared/types/text-field-common-props.type";
import type { TextFieldPropsExtraText } from "../../shared/types/text-field-props-extra-text.type";

/**
 * Props for text field readonly component
 */
export type TextFieldReadonlyProps = (
	TextFieldCommonPropsReadonly &
	TextFieldPropsExtraText &
	IValue<string>
);
