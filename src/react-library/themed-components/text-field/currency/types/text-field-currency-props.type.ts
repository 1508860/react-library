import type {
	CallbackWithParameter,
	Currency,
	IDefaultValue,
	IOnValueChange,
	IValue,
	IValueStep
} from "@react-library/common";

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
import type { TextFieldPropsValidationCurrency } from "../../shared/types/text-field-props-validation-currency.type";

/**
 * Props for text field currency component
 */
export type TextFieldCurrencyProps = (
	Partial<IDefaultValue<Currency | undefined>> &
	IOnValueChange<CallbackWithParameter<(Currency | undefined), void>> &
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
	TextFieldPropsValidationCurrency &
	IValue<Currency | undefined> &
	Partial<IValueStep<Currency>>
);
