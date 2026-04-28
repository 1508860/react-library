import type { PropsWithChildren } from "react";

import type { CheckboxPropsLabel } from "../../shared/types/checkbox-props-label.type";

/**
 * Checkbox group props
 */
export type CheckboxGroupProps = (
	CheckboxPropsLabel &
	PropsWithChildren
);
