import type { RadioButtonPropsId } from "../../shared/types/radio-button-props-id.type";
import type { RadioButtonPropsIsDisabled } from "../../shared/types/radio-button-props-is-disabled.type";
import type { RadioButtonPropsLabel } from "../../shared/types/radio-button-props-label.type";
import type { RadioButtonPropsValue } from "../../shared/types/radio-button-props-value.type";

/**
 * Radio button props
 */
export type RadioButtonProps = (
	RadioButtonPropsId &
	RadioButtonPropsIsDisabled &
	RadioButtonPropsLabel &
	RadioButtonPropsValue
);
