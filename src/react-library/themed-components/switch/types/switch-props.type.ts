import type { SwitchPropsId } from "./switch-props-id.type";
import type { SwitchPropsIsDisabled } from "./switch-props-is-disabled.type";
import type { SwitchPropsIsRequired } from "./switch-props-is-required.type";
import type { SwitchPropsLabel } from "./switch-props-label.type";
import type { SwitchPropsName } from "./switch-props-name.type";
import type { SwitchPropsOnValueChange } from "./switch-props-on-value-change.type";
import type { SwitchPropsValue } from "./switch-props-value.type";
import type { SwitchPropsWidth } from "./switch-props-width.type";

/**
 * Switch props
 */
export type SwitchProps = (
	SwitchPropsId &
	SwitchPropsIsDisabled &
	SwitchPropsIsRequired &
	SwitchPropsLabel &
	SwitchPropsName &
	SwitchPropsOnValueChange &
	SwitchPropsValue &
	SwitchPropsWidth
);
