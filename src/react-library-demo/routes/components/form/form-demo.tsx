import { useCallback, useState } from "react";

import {
	Orientation,
	useResolveState,
	type Callback,
	type IId,
	type IIsRequired,
	type ILabel
} from "@react-library/common";
import {
	Form,
	FormColumn,
	FormRow,
	FormValidationGroupProvider,
	useFormSubmitCallbackContext,
	useFormValidationStateContext,
	useFormValidationSubscriber
} from "@react-library/components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

export function ReactLibraryComponentsFormDemo() {

	return (
		<DemoSection title="Form">
			<Form gap={10}>
				<FormRow>
					<FormDemoIsValidLabel label="Form" />
				</FormRow>
				<FormRow>
					<FormColumn flexGrow={1}>
						<FormValidationGroupProvider>
							<FormDemoIsValidLabel label="Form Group" />
							<FormDemoItem id={1} isRequired={false} />
							<FormDemoItem id={2} isRequired={true} />
						</FormValidationGroupProvider>
					</FormColumn>
					<FormColumn flexGrow={2}>
						<FormRow>
							<FormColumn flexGrow={1}>
								<FormValidationGroupProvider>
									<FormDemoIsValidLabel label="Form Group" />
									<FormDemoItem id={3} isRequired={true} />
									<FormDemoItem id={4} isRequired={false} />
								</FormValidationGroupProvider>
							</FormColumn>
						</FormRow>
						<FormRow>
							<FormColumn
								flexGrow={1}
								gap={20}
							>
								<FormValidationGroupProvider>
									<FormDemoIsValidLabel label="Form Group" />
									<FormDemoItem id={5} isRequired={true} />
									<FormDemoItem id={6} isRequired={false} />
									<FormDemoItem id={7} isRequired={true} />
									<FormDemoItem id={8} isRequired={false} />
									<FormDemoItem id={9} isRequired={true} />
								</FormValidationGroupProvider>
							</FormColumn>
						</FormRow>
					</FormColumn>
				</FormRow>
				<FormRow>
					<FormDemoSubmit />
				</FormRow>
			</Form>
		</DemoSection>
	);
}

function FormDemoIsValidLabel(props: ILabel<string>) {

	const isValid = useFormValidationStateContext();

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={isValid ? DemoContentColourScheme.Secondary : DemoContentColourScheme.Tertiary}
			height="auto"
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text={`${props.label} - ${isValid}`}
			width="100%"
		/>
	);
}

function FormDemoItem(props: (IId<number> & IIsRequired<boolean>)) {

	const [value, setValue] = useState<boolean>(() => false);
	const toggleValue = useCallback<Callback<void>>(() => setValue((prev) => !prev), []);


	const resolveIsValid = useCallback<Callback<boolean>>(
		() => !props.isRequired || value,
		[props.isRequired, value]
	);
	const isValid = useResolveState(resolveIsValid);

	useFormValidationSubscriber(isValid);

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={isValid ? DemoContentColourScheme.Secondary : DemoContentColourScheme.Tertiary}
			height="auto"
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width="100%"
		>
			<span>
				{`Is Required - ${props.isRequired}`}
			</span>
			<span>
				{`Is Item Valid - ${isValid}`}
			</span>
			<input
				name={`name_${props.id}`}
				type="checkbox"
				value={`${value}`}
				onChange={toggleValue}
			/>
		</DemoContent>
	);
}

function FormDemoSubmit() {

	const isValid = useFormValidationStateContext();
	const formSubmitCallback = useFormSubmitCallbackContext();

	return (
		<button
			disabled={!isValid}
			onClick={formSubmitCallback}
		>
			Submit
		</button>
	);
}
