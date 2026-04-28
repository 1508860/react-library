import type { PropsWithChildren } from "react";

import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";

/**
 * Checkbox group provider props
 */
export type CheckboxGroupProviderProps = (
	CheckboxPropsIsDisabled &
	PropsWithChildren
);
