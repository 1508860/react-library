import type {
	Currency,
	IMaxValue,
	IMinValue,
	IValidation
} from "@react-library/common";

/**
 *  Props for text field component for validating a currency input value
 */
export type TextFieldPropsValidationCurrency = (
	Partial<IValidation<TextFieldValidationCurrencyConfig>>
);

/**
 *  Config for text field component for validating a currency input value
 */
export type TextFieldValidationCurrencyConfig = (
	Partial<IMaxValue<Currency>> &
	Partial<IMinValue<Currency>>
);
