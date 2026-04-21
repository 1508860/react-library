import type { IValue } from "@react-library/common";

import type { TextFieldCommonPropsReadonly } from "../../shared/types/text-field-common-props.type";
import type { TextFieldExtraTextProps } from "../../shared/types/text-field-extra-text-props.type";

/**
 * Props for text field readonly component
 */
export type TextFieldReadonlyProps = (
	TextFieldCommonPropsReadonly &
	TextFieldExtraTextProps &
	IValue<string>
);
