import type { PropsWithChildren } from "react";

import type { CheckboxPropsIsDisabled } from "../../../types/checkbox-props-is-disabled.type";

/**
 * Checkbox target container props
 */
export type CheckboxTargetContainerProps = (
	CheckboxPropsIsDisabled &
	PropsWithChildren
);
