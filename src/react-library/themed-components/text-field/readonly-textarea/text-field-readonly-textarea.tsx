import { TextFieldContainer } from "../shared/components/container";
import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldProviderReadonly } from "../shared/components/provider-readonly";

import { TextFieldReadonlyTextareaInput } from "./components/input";
import type { TextFieldReadonlyTextareaProps } from "./types/text-field-readonly-textarea-props.type";

/**
 * Text field readonly textarea component
 */
export function TextFieldReadonlyTextarea(props: TextFieldReadonlyTextareaProps) {
	return (
		<TextFieldProviderReadonly
			style={props.style}
		>
			<TextFieldContainer>
				<TextFieldInnerContainer
					{...props}
					key="inner-container"
				>
					<TextFieldInputContainer
						key="input-container"
						style={props.style}
					>
						<TextFieldInputLabel
							id={props.id}
							isRequired={false}
							key="label"
							label={props.label}
							style={props.style}
						/>
						<TextFieldReadonlyTextareaInput
							{...props}
							key="input"
						/>
					</TextFieldInputContainer>
					<TextFieldIconError
						key="icon-error"
						style={props.style}
					/>
				</TextFieldInnerContainer>
			</TextFieldContainer>
		</TextFieldProviderReadonly>
	);
}
