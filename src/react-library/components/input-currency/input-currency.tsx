import { useCallback, useState } from "react";

import {
	useCurrencyCallback,
	useCurrencyDisplayState,
	useResolveState,
	type Callback
} from "@react-library/common";

import type { InputCurrencyProps } from "./input-currency-props.type";

/**
 * Component to handle numerical data in an input field, to be displayed in a currency format when not entering a value
 * @param props
 */
export function InputCurrency(props: InputCurrencyProps) {

	// Used to switch between an input that displays currency vs an input where we can enter a numerical value
	const [isFocused, setIsFocused] = useState<boolean>(() => false);
	const handleBlur = useCallback(
		() => {
			if (props.onBlur) props.onBlur(props.value);
			setIsFocused(false);
		},
		[props]
	);
	const handleFocus = useCallback(
		() => {
			if (props.onFocus) props.onFocus(props.value);
			setIsFocused(true);
		},
		[props]
	);

	// Value
	const resolveValue = useCallback<Callback<string>>(
		() => {
			if(props.value === undefined || isNaN(props.value)) return "";
			return props.value.toString();
		},
		[props.value]
	);
	const value = useResolveState(resolveValue);

	// Value - on change
	const handleUseCurrencyCallback = useCurrencyCallback();
	const handleOnValueChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue: string = event.target.value.trim();
			if (newValue.length === 0) {
				props.onValueChange(undefined);
				return;
			}
			const newValueParsed: number = parseFloat(newValue);
			const newValueCurrency: number = handleUseCurrencyCallback(newValueParsed);
			props.onValueChange(newValueCurrency);
		},
		[props, handleUseCurrencyCallback]
	);

	// Value - display
	const [currencyDisplayState] = useCurrencyDisplayState(props.value);

	return (
		<input
			className={props.className}
			disabled={props.isDisabled}
			id={`${props.id}`}
			max={props.maxValue}
			min={props.minValue}
			name={props.name}
			onBlur={handleBlur}
			onChange={handleOnValueChange}
			onFocus={handleFocus}
			onPointerCancel={props.onPointerLeave}
			onPointerEnter={props.onPointerEnter}
			onPointerLeave={props.onPointerLeave}
			placeholder={props.placeholder}
			step={isFocused ? props.valueStep : undefined}
			style={props.style}
			type={isFocused ? "number" : "text"}
			value={(isFocused ? value : currencyDisplayState) ?? ""}
		/>
	);
}
