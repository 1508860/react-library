import type {
	MenuPropsId,
	MenuPropsIsDisabled,
	MenuPropsSupportingText,
	MenuPropsText,
	MenuPropsTrailingIconName
} from "../../../menu";

import type { TextFieldSelectItemId } from "./text-field-select-item-id.type";

/**
 * Text field select item
 */
export type TextFieldSelectItem<TId extends TextFieldSelectItemId> = (
	MenuPropsId<TId> &
	MenuPropsIsDisabled &
	MenuPropsSupportingText &
	MenuPropsText &
	MenuPropsTrailingIconName
);
