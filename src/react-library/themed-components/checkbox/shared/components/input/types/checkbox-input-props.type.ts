import type { CheckboxPropsId } from "../../../types/checkbox-props-id.type";
import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";
import type { CheckboxPropsLabel } from "../../../types/checkbox-props-label.type";
import type { CheckboxPropsName } from "../../../types/checkbox-props-name.type";
import type { CheckboxPropsValue } from "../../../types/checkbox-props-value.type";

/**
 * Checkbox input props
 */
export type CheckboxInputProps = (
	CheckboxPropsId &
	CheckboxPropsIsDisabled &
	CheckboxPropsLabel &
	CheckboxPropsName &
	CheckboxPropsValue
);
