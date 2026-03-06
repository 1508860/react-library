import type { CurrencyInvalidValue } from "./currency-invalid-value.type";
import type { Currency } from "./currency.type";

/**
 * Type to define currency value
 * Used for both input and output state
 */
export type CurrencyValue<TCurrencyInvalidValue extends CurrencyInvalidValue> = (
	Currency |
	TCurrencyInvalidValue
);
