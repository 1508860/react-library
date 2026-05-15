import type { TextFieldPropsExtraText } from "../../shared/types/text-field-props-extra-text.type";
import type { TextFieldPropsId } from "../../shared/types/text-field-props-id.type";
import type { TextFieldPropsIsDisabled } from "../../shared/types/text-field-props-is-disabled.type";
import type { TextFieldPropsIsRequired } from "../../shared/types/text-field-props-is-required.type";
import type { TextFieldPropsLabel } from "../../shared/types/text-field-props-label.type";
import type { TextFieldPropsLeadingIcon } from "../../shared/types/text-field-props-leading-icon.type";
import type { TextFieldPropsName } from "../../shared/types/text-field-props-name.type";
import type { TextFieldPropsSize } from "../../shared/types/text-field-props-size.type";
import type { TextFieldPropsStyle } from "../../shared/types/text-field-props-style.type";
import type { TextFieldPropsSupportingText } from "../../shared/types/text-field-props-supporting-text.type";

import type { TextFieldSelectItemId } from "./text-field-select-item-id.type";
import type { TextFieldSelectPropsInteractionAll } from "./text-field-select-props-interaction.type";
import type { TextFieldSelectPropsItems } from "./text-field-select-props-items.type";
import type { TextFieldSelectPropsMenuSize } from "./text-field-select-props-menu-size.type";

/**
 * Props for text field select component
 */
export type TextFieldSelectProps<TId extends TextFieldSelectItemId> = (
	TextFieldPropsExtraText &
	TextFieldPropsId &
	TextFieldPropsIsDisabled &
	TextFieldPropsIsRequired &
	TextFieldPropsLabel &
	TextFieldPropsLeadingIcon &
	TextFieldPropsName &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsSupportingText &
	TextFieldSelectPropsInteractionAll<TId> &
	TextFieldSelectPropsItems<TId> &
	TextFieldSelectPropsMenuSize
);
