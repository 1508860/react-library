import type { SwitchPropsId } from "../../../types/switch-props-id.type";
import type { SwitchPropsIsDisabled } from "../../../types/switch-props-is-disabled.type";
import type { SwitchPropsLabel } from "../../../types/switch-props-label.type";

/**
 * Switch label props
 */
export type SwitchLabelProps = (
	SwitchPropsId &
	SwitchPropsIsDisabled &
	SwitchPropsLabel
);
