import type { CallbackWithParameter } from "@react-library/common";

import type { TextFieldSelectItemId } from "./text-field-select-item-id.type";

/**
 * Text field select on change callback
 */
export type TextFieldSelectMenuOnChange<TId extends TextFieldSelectItemId> = CallbackWithParameter<TId, void>;
