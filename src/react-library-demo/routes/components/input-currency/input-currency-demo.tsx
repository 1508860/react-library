import { useState } from "react";

import {
	useCurrencyDisplayState,
	useCurrencyRoundedDisplayState,
	useCurrencyRoundedState,
	useCurrencyState,
	type Currency
} from "@react-library/common";
import { InputCurrency } from "@react-library/components";

export function ReactLibraryComponentsInputCurrencyDemo() {

	const [value, setValue] = useState<Currency | undefined>(123);

	const [currencyState] = useCurrencyState(value);
	const [currencyRoundedState] = useCurrencyRoundedState(value);
	const [currencyDisplayState] = useCurrencyDisplayState(value);
	const [currencyRoundedDisplayState] = useCurrencyRoundedDisplayState(value);

	return (
		<>
			<InputCurrency
				key="input-currency"
				onValueChange={setValue}
				value={value}
			/>
			<InputCurrency
				isDisabled={true}
				key="input-currency-disabled-placeholder"
				onValueChange={() => { }}
				placeholder="Disabled Placeholder"
				value={undefined}
			/>
			<table key="input-currency-formatter">
				<thead>
					<tr>
						<th>Formatter</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Currency</td>
						<td>{currencyState}</td>
					</tr>
					<tr>
						<td>Currency Rounded</td>
						<td>{currencyRoundedState}</td>
					</tr>
					<tr>
						<td>Currency Display</td>
						<td>{currencyDisplayState}</td>
					</tr>
					<tr>
						<td>Currency Rounded Display</td>
						<td>{currencyRoundedDisplayState}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
}
