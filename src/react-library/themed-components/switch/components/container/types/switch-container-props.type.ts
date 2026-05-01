import type { PropsWithChildren } from "react";

import type { SwitchPropsIsDisabled } from "../../../types/switch-props-is-disabled.type";
import type { SwitchPropsIsRequired } from "../../../types/switch-props-is-required.type";
import type { SwitchPropsValue } from "../../../types/switch-props-value.type";
import type { SwitchPropsWidth } from "../../../types/switch-props-width.type";

/**
 * Switch container props
 */
export type SwitchContainerProps = (
	PropsWithChildren &
	SwitchPropsIsDisabled &
	SwitchPropsIsRequired &
	SwitchPropsValue &
	SwitchPropsWidth
);
