import { Fragment, useCallback, useState } from "react";

import { useResolveState, type Callback, type IStyle } from "@react-library/common";
import {
	TextFieldExtraTextPosition,
	TextFieldSelect,
	TextFieldSelectInteraction,
	TextFieldStyle,
	type TextFieldSelectItem
} from "@react-library/themed-components";

import {
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";
import { MaterialIconName } from "@react-library/material-icons";

export function ReactLibraryThemedComponentsTextFieldSelectDemo() {

	const [textFieldStyles] = useState<Array<TextFieldStyle>>(() => Object.values(TextFieldStyle));

	return (
		<DemoSection title={`Text Field - select`}>
			{textFieldStyles.map(textFieldStyle => (
				<Fragment key={textFieldStyle}>
					<ReactLibraryThemedComponentsTextFieldSelectDemoMulti
						key={TextFieldSelectInteraction.Multi}
						style={textFieldStyle}
					/>
					<ReactLibraryThemedComponentsTextFieldSelectDemoSingle
						key={TextFieldSelectInteraction.Single}
						style={textFieldStyle}
					/>
				</ Fragment>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTextFieldSelectDemoSingle(props: IStyle<TextFieldStyle>) {

	const [value, setValue] = useState<number | undefined>(() => undefined);

	const [itemIds] = useState<Array<number>>(() => Array.from({ length: 100 }, (_, i) => i + 1));

	const resolveItems = useCallback<Callback<Array<TextFieldSelectItem<number>>>>(
		() => itemIds.map<TextFieldSelectItem<number>>(id => ({
			id: id,
			text: `Item - ${id}`,
			isDisabled: (id % 10 === 3),
			supportingText: (id % 10 === 5) ? "Supporting text" : undefined,
			trailingIconName: (id % 10 === 7) ? MaterialIconName.Error : undefined
		})),
		[itemIds]
	);

	const items = useResolveState(resolveItems);

	return (
		<DemoItem label={`${TextFieldSelectInteraction.Single}-basic`}>
			<TextFieldSelect<number>
				defaultValue={undefined}
				extraText="Extra"
				extraTextPosition={TextFieldExtraTextPosition.Start}
				id={`select-${TextFieldSelectInteraction.Single}-${props.style}-1`}
				interaction={TextFieldSelectInteraction.Single}
				isDisabled={false}
				isRequired={true}
				items={items}
				label="Label"
				leadingIconName={MaterialIconName.Search}
				maxWidth={500}
				menuHeight={300}
				menuWidth={300}
				minWidth={300}
				name={`select-${TextFieldSelectInteraction.Single}-${props.style}-1`}
				onValueChange={setValue}
				style={props.style}
				supportingText="Supporting Text"
				value={value}
			/>
		</DemoItem>
	);
}

function ReactLibraryThemedComponentsTextFieldSelectDemoMulti(props: IStyle<TextFieldStyle>) {

	const [value, setValue] = useState<Array<number>>(() => []);

	const [itemIds] = useState<Array<number>>(() => Array.from({ length: 100 }, (_, i) => i + 1));

	const resolveItems = useCallback<Callback<Array<TextFieldSelectItem<number>>>>(
		() => itemIds.map<TextFieldSelectItem<number>>(id => ({
			id: id,
			text: `Item - ${id}`,
			isDisabled: (id % 10 === 3),
			supportingText: (id % 10 === 5) ? "Supporting text" : undefined,
			trailingIconName: (id % 10 === 7) ? MaterialIconName.Error : undefined
		})),
		[itemIds]
	);

	const items = useResolveState(resolveItems);

	return (
		<DemoItem label={`${TextFieldSelectInteraction.Multi}-basic`}>
			<TextFieldSelect<number>
				defaultValue={undefined}
				extraText="Extra"
				extraTextPosition={TextFieldExtraTextPosition.Start}
				id={`select-${TextFieldSelectInteraction.Multi}-${props.style}-1`}
				interaction={TextFieldSelectInteraction.Multi}
				isDisabled={false}
				isRequired={true}
				items={items}
				label="Label"
				leadingIconName={MaterialIconName.Search}
				menuHeight={300}
				menuWidth={300}
				width={300}
				name={`select-${TextFieldSelectInteraction.Multi}-${props.style}-1`}
				onValueChange={setValue}
				style={props.style}
				supportingText="Supporting Text"
				value={value}
			/>
		</DemoItem>
	);
}
