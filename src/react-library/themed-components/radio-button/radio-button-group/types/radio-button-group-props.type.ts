import type { PropsWithChildren } from "react";

import type { RadioButtonPropsGroupValue } from "../../shared/types/radio-button-props-group-value.type";
import type { RadioButtonPropsIsRequired } from "../../shared/types/radio-button-props-is-required.type";
import type { RadioButtonPropsOnValueChange } from "../../shared/types/radio-button-props-on-value-change.type";

/**
 * Radio button group props
 */
export type RadioButtonGroupProps = (
	PropsWithChildren &
	RadioButtonPropsGroupValue &
	RadioButtonPropsIsRequired &
	RadioButtonPropsOnValueChange
);
