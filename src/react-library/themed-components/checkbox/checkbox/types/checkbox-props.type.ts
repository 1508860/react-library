import type { CheckboxPropsId } from "../../shared/types/checkbox-props-id.type";
import type { CheckboxPropsIsDisabled } from "../../shared/types/checkbox-props-is-disabled.type";
import type { CheckboxPropsIsRequired } from "../../shared/types/checkbox-props-is-required.type";
import type { CheckboxPropsLabel } from "../../shared/types/checkbox-props-label.type";
import type { CheckboxPropsName } from "../../shared/types/checkbox-props-name.type";
import type { CheckboxPropsOnValueChange } from "../../shared/types/checkbox-props-on-value-change.type";
import type { CheckboxPropsValue } from "../../shared/types/checkbox-props-value.type";

/**
 * Checkbox props
 */
export type CheckboxProps = (
	CheckboxPropsId &
	CheckboxPropsIsDisabled &
	CheckboxPropsIsRequired &
	CheckboxPropsLabel &
	CheckboxPropsName &
	CheckboxPropsOnValueChange &
	CheckboxPropsValue
);
