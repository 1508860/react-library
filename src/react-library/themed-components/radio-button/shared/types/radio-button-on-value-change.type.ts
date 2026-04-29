import type { CallbackWithParameter } from "@react-library/common";

import type { RadioButtonValue } from "../enums/radio-button-value.type";

/**
 * Radio button on value change callback
 */
export type RadioButtonOnValueChange = CallbackWithParameter<RadioButtonValue, void>;
