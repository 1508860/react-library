import type { PropsWithChildren } from "react";

import type { TextFieldSelectItemId } from "../../../types/text-field-select-item-id.type";
import type { TextFieldSelectPropsInteractionAll } from "../../../types/text-field-select-props-interaction.type";

/**
 * Props for text field select value provider
 */
export type TextFieldSelectValueProviderProps<TId extends TextFieldSelectItemId> = (
	PropsWithChildren &
	TextFieldSelectPropsInteractionAll<TId>
);
