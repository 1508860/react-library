import type { PropsWithChildren } from "react";

import type { TextFieldPropsIsDisabled } from "../../../../shared/types/text-field-props-is-disabled.type";

/**
 * Props for text field select tooltip
 */
export type TextFieldSelectTooltipProps = (
	PropsWithChildren &
	TextFieldPropsIsDisabled
);
