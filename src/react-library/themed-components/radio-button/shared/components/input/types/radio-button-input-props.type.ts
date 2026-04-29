import type { RadioButtonPropsId } from "../../../types/radio-button-props-id.type";
import type { RadioButtonPropsIsDisabled } from "../../../types/radio-button-props-is-disabled.type";
import type { RadioButtonPropsLabel } from "../../../types/radio-button-props-label.type";
import type { RadioButtonPropsName } from "../../../types/radio-button-props-name.type";
import type { RadioButtonPropsValue } from "../../../types/radio-button-props-value.type";

/**
 * Radio button input props
 */
export type RadioButtonInputProps = (
	RadioButtonPropsId &
	RadioButtonPropsIsDisabled &
	RadioButtonPropsLabel &
	RadioButtonPropsName &
	RadioButtonPropsValue
);
