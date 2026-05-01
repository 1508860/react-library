import type { SwitchPropsId } from "../../../types/switch-props-id.type";
import type { SwitchPropsIsDisabled } from "../../../types/switch-props-is-disabled.type";
import type { SwitchPropsLabel } from "../../../types/switch-props-label.type";
import type { SwitchPropsName } from "../../../types/switch-props-name.type";
import type { SwitchPropsOnValueChange } from "../../../types/switch-props-on-value-change.type";
import type { SwitchPropsValue } from "../../../types/switch-props-value.type";

/**
 * Switch input props
 */
export type SwitchInputProps = (
	SwitchPropsId &
	SwitchPropsIsDisabled &
	SwitchPropsLabel &
	SwitchPropsName &
	SwitchPropsOnValueChange &
	SwitchPropsValue
);
