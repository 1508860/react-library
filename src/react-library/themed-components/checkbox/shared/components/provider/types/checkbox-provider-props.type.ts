import type { PropsWithChildren } from "react";

import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";
import type { CheckboxPropsIsRequired } from "../../../types/checkbox-props-is-required.type";
import type { CheckboxPropsOnValueChange } from "../../../types/checkbox-props-on-value-change.type";
import type { CheckboxPropsValue } from "../../../types/checkbox-props-value.type";

/**
 * Checkbox provider props
 */
export type CheckboxProviderProps = (
	CheckboxPropsIsDisabled &
	CheckboxPropsIsRequired &
	CheckboxPropsOnValueChange &
	CheckboxPropsValue &
	PropsWithChildren
);
