import type { PropsWithChildren } from "react";

import type { SwitchPropsIsDisabled } from "../../../types/switch-props-is-disabled.type";
import type { SwitchPropsOnValueChange } from "../../../types/switch-props-on-value-change.type";
import type { SwitchPropsValue } from "../../../types/switch-props-value.type";

/**
 * Switch track props
 */
export type SwitchTrackProps = (
	PropsWithChildren &
	SwitchPropsIsDisabled &
	SwitchPropsOnValueChange &
	SwitchPropsValue
);
