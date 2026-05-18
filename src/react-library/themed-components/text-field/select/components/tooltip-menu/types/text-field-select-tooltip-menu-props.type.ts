import type { PropsWithChildren } from "react";

import type { TextFieldPropsIsDisabled } from "../../../../shared/types/text-field-props-is-disabled.type";

import type { TextFieldSelectInteraction } from "../../../enums/text-field-select-interaction.type";
import type { TextFieldSelectItemId } from "../../../types/text-field-select-item-id.type";
import type { TextFieldSelectPropsInteraction } from "../../../types/text-field-select-props-interaction.type";
import type { TextFieldSelectPropsItems } from "../../../types/text-field-select-props-items.type";
import type { TextFieldSelectPropsMenuSize } from "../../../types/text-field-select-props-menu-size.type";
import type { TextFieldSelectPropsMenuStyle } from "../../../types/text-field-select-props-menu-style.type";

/**
 * Props for text field select tooltip menu
 */
export type TextFieldSelectTooltipMenuProps<TId extends TextFieldSelectItemId> = (
	PropsWithChildren &
	TextFieldPropsIsDisabled &
	TextFieldSelectPropsInteraction<TextFieldSelectInteraction> &
	TextFieldSelectPropsItems<TId> &
	TextFieldSelectPropsMenuSize &
	TextFieldSelectPropsMenuStyle
);
