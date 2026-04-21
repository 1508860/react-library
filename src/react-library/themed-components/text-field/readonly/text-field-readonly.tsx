import { TextFieldContainer } from "../shared/components/container";
import { TextFieldExtraTextContainer } from "../shared/components/extra-text-container";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldProviderReadonly } from "../shared/components/provider-readonly";

import { TextFieldReadonlyInput } from "./components/input";
import type { TextFieldReadonlyProps } from "./types/text-field-readonly-props.type";

/**
 * Text field readonly component
 */
export function TextFieldReadonly(props: TextFieldReadonlyProps) {
	return (
		<TextFieldProviderReadonly
			style={props.style}
		>
			<TextFieldContainer>
				<TextFieldInnerContainer
					{...props}
					key="inner-container"
				>
					<TextFieldExtraTextContainer
						key="extra-text-container"
						{...props}
					>
						<TextFieldInputContainer
							key="input-container"
							style={props.style}
						>
							<TextFieldInputLabel
								isRequired={false}
								key="label"
								label={props.label}
								name={props.name}
								style={props.style}
							/>
							<TextFieldReadonlyInput
								{...props}
								key="input"
							/>
						</TextFieldInputContainer>
					</TextFieldExtraTextContainer>
				</TextFieldInnerContainer>
			</TextFieldContainer>
		</TextFieldProviderReadonly>
	);
}
