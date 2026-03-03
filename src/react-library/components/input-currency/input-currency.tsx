import { useCallback, useState } from "react";

import {
	useCurrencyCallback,
	useCurrencyDisplayState
} from "@react-library/common";

import type { InputCurrencyProps } from "./input-currency-props.type";

/**
 * Component to handle numerical data in an input field, to be displayed in a currency format when not entering a value
 * @param props
 */
export function InputCurrency(props: InputCurrencyProps) {

	// Used to switch between an input that displays currency vs an input where we can enter a numerical value
	const [isFocused, setIsFocused] = useState<boolean>(() => false);
	const handleFocus = useCallback(() => setIsFocused(true), []);
	const handleUnfocus = useCallback(() => setIsFocused(false), []);

	// Handle updates to input value
	const handleUseCurrencyCallback = useCurrencyCallback();
	const handleOnValueChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => props.onValueChange(handleUseCurrencyCallback(parseFloat(event.target.value))),
		[props, handleUseCurrencyCallback]
	);

	const [currencyDisplayState] = useCurrencyDisplayState(props.value);

	return (
		<input
			disabled={props.isDisabled}
			id={`${props.id}`}
			name={props.name}
			onBlur={handleUnfocus}
			onChange={handleOnValueChange}
			onFocus={handleFocus}
			placeholder={props.placeholder}
			step={isFocused ? 0.01 : undefined}
			style={props.style}
			type={isFocused ? "number" : "text"}
			value={(isFocused ? props.value : currencyDisplayState) ?? ""}
		/>
	);
}
