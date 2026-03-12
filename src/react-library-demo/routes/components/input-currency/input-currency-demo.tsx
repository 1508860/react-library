import { useCallback, useState } from "react";

import {
	DateTimeDisplayLength,
	Orientation,
	TimeDisplayStyle,
	useCurrencyDisplayState,
	useCurrencyRoundedDisplayState,
	useCurrencyRoundedState,
	useCurrencyState,
	useDateTimeDisplayState,
	type Currency
} from "@react-library/common";
import { InputCurrency } from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryComponentsInputCurrencyDemo() {

	const [value, setValue] = useState<Currency | undefined>(123);

	const [currencyState] = useCurrencyState(value);
	const [currencyRoundedState] = useCurrencyRoundedState(value);
	const [currencyDisplayState] = useCurrencyDisplayState(value);
	const [currencyRoundedDisplayState] = useCurrencyRoundedDisplayState(value);

	const [onFocusDate, setOnFocusDate] = useState<Date | undefined>(() => undefined)
	const handleOnFocus = useCallback(() => setOnFocusDate(new Date()), []);
	const onFocusDateDisplay = useDateTimeDisplayState(onFocusDate, TimeDisplayStyle.Decisecond, DateTimeDisplayLength.Long);

	const [onBlurDate, setOnBlurDate] = useState<Date | undefined>(() => undefined)
	const handleOnBlur = useCallback(() => setOnBlurDate(new Date()), []);
	const onBlurDateDisplay = useDateTimeDisplayState(onBlurDate, TimeDisplayStyle.Decisecond, DateTimeDisplayLength.Long);

	return (
		<DemoSection title="Input Currency">
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height="auto"
				justify={DemoContentJustify.Center}
				key="input-currency"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				paddingBottom={20}
				paddingLeft={20}
				paddingRight={20}
				paddingTop={20}
				width="100%"
			>
				<InputCurrency
					id="input-currency"
					name="input-currency"
					onBlur={handleOnBlur}
					onFocus={handleOnFocus}
					onValueChange={setValue}
					placeholder="Placeholder"
					style={{ width: "100%" }}
					value={value}
				/>
			</DemoContent>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Any}
				colourScheme={DemoContentColourScheme.Primary}
				height="auto"
				justify={DemoContentJustify.Center}
				key="input-currency-disabled-placeholder"
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				paddingBottom={20}
				paddingLeft={20}
				paddingRight={20}
				paddingTop={20}
				width="100%"
			>
				<InputCurrency
					id="input-currency-disabled-placeholder"
					isDisabled={true}
					name="input-currency-disabled-placeholder"
					onValueChange={() => { }}
					placeholder="Disabled Placeholder"
					style={{ width: "100%" }}
					value={undefined}
				/>
			</DemoContent>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Items}
				colourScheme={DemoContentColourScheme.Secondary}
				height="auto"
				items={[
					{ type: DemoContentChildrenItem.Text, id: 1, text: `Raw Value - ${value}` },
					{ type: DemoContentChildrenItem.Text, id: 2, text: `Currency - ${currencyState}` },
					{ type: DemoContentChildrenItem.Text, id: 3, text: `Currency Rounded - ${currencyRoundedState}` },
					{ type: DemoContentChildrenItem.Text, id: 4, text: `Currency Display - ${currencyDisplayState}` },
					{ type: DemoContentChildrenItem.Text, id: 5, text: `Currency Rounded Display - ${currencyRoundedDisplayState}` },
				]}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				paddingBottom={20}
				paddingLeft={20}
				paddingRight={20}
				paddingTop={20}
				width="100%"
			/>
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Items}
				colourScheme={DemoContentColourScheme.Tertiary}
				height="auto"
				items={[
					{ type: DemoContentChildrenItem.Text, id: 1, text: `On Focus - ${onFocusDateDisplay}` },
					{ type: DemoContentChildrenItem.Text, id: 2, text: `On Blur - ${onBlurDateDisplay}` }
				]}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				paddingBottom={20}
				paddingLeft={20}
				paddingRight={20}
				paddingTop={20}
				width="100%"
			/>
		</DemoSection>
	);
}
