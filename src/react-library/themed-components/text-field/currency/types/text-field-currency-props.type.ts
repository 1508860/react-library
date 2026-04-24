import type {
	CallbackWithParameter,
	Currency,
	IDefaultValue,
	IOnValueChange,
	IValue,
	IValueStep
} from "@react-library/common";

import type { TextFieldPropsExtraText } from "../../shared/types/text-field-props-extra-text.type";
import type { TextFieldPropsInputReadonly } from "../../shared/types/text-field-props-input-readonly.type";
import type { TextFieldPropsIsDisabled } from "../../shared/types/text-field-props-is-disabled.type";
import type { TextFieldPropsIsRequired } from "../../shared/types/text-field-props-is-required.type";
import type { TextFieldPropsLeadingIcon } from "../../shared/types/text-field-props-leading-icon.type";
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
	TextFieldPropsInputReadonly &
	TextFieldPropsIsDisabled &
	TextFieldPropsIsRequired &
	TextFieldPropsLeadingIcon &
	TextFieldPropsSize &
	TextFieldPropsStyle &
	TextFieldPropsSupportingText &
	TextFieldPropsValidationCurrency &
	IValue<Currency | undefined> &
	Partial<IValueStep<Currency>>
);
