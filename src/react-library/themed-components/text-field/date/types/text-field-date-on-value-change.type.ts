import type { CallbackWithParameter } from "@react-library/common";

import type { TextFieldDateValue } from "./text-field-date-value.type";

/**
 * Text field date on value change callback
 */
export type TextFieldDateOnValueChange = CallbackWithParameter<TextFieldDateValue, void>;
