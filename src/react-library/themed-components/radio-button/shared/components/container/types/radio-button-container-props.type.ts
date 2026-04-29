import type { PropsWithChildren } from "react";

import type { RadioButtonPropsIsDisabled } from "../../../types/radio-button-props-is-disabled.type";
import type { RadioButtonPropsValue } from "../../../types/radio-button-props-value.type";

/**
 * Radio button container props
 */
export type RadioButtonContainerProps = (
	PropsWithChildren &
	RadioButtonPropsIsDisabled &
	RadioButtonPropsValue
);
