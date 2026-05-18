import type { CheckboxPropsId } from "../../../types/checkbox-props-id.type";
import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";
import type { CheckboxPropsLabel } from "../../../types/checkbox-props-label.type";
import type { CheckboxPropsName } from "../../../types/checkbox-props-name.type";

/**
 * Checkbox label props
 */
export type CheckboxLabelProps = (
	CheckboxPropsId &
	CheckboxPropsIsDisabled &
	CheckboxPropsLabel &
	CheckboxPropsName
);
