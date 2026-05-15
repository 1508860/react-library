import type { IItems } from "@react-library/common";

import type { TextFieldSelectItemId } from "./text-field-select-item-id.type";
import type { TextFieldSelectItem } from "./text-field-select-item.type";

/**
 * Text field select props for items collection
 */
export type TextFieldSelectPropsItems<TId extends TextFieldSelectItemId> = (
	IItems<Array<TextFieldSelectItem<TId>>>
);
