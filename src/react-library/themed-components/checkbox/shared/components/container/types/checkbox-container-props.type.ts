import type { PropsWithChildren } from "react";

import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";

/**
 * Checkbox container props
 */
export type CheckboxContainerProps = (
	CheckboxPropsIsDisabled &
	PropsWithChildren
);
