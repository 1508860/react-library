import { TextFieldExtraTextContainer } from "../shared/components/extra-text-container";
import { TextFieldIconError } from "../shared/components/icon-error";
import { TextFieldInnerContainer } from "../shared/components/inner-container";
import { TextFieldInputContainer } from "../shared/components/input-container";
import { TextFieldInputLabel } from "../shared/components/input-label";
import { TextFieldLeadingIcon } from "../shared/components/leading-icon";
import { TextFieldProvider } from "../shared/components/provider";

import { TextFieldSelectContainer } from "./components/container";
import { TextFieldSelectIconChevron } from "./components/icon-chevron";
import { TextFieldSelectInput } from "./components/input";
import { TextFieldSelectSupportingText } from "./components/supporting-text";
import { TextFieldSelectTooltip } from "./components/tooltip";
import { TextFieldSelectTooltipMenu } from "./components/tooltip-menu";
import { TextFieldSelectValueProvider } from "./components/value-provider";
import { useTextFieldSelectIsPopulatedState } from "./hooks/text-field-select-is-populated-state.hook";
import type { TextFieldSelectItemId } from "./types/text-field-select-item-id.type";
import type { TextFieldSelectProps } from "./types/text-field-select-props.type";

/**
 * Text field select component
 */
export function TextFieldSelect<TId extends TextFieldSelectItemId>(props: TextFieldSelectProps<TId>) {
	return (
		<TextFieldProvider<TextFieldSelectProps<TId>>
			isDisabled={!!props.isDisabled}
			props={props}
			style={props.style}
			useIsPopulatedState={useTextFieldSelectIsPopulatedState}
		>
			<TextFieldSelectValueProvider {...props}>
				<TextFieldSelectTooltip {...props}>
					<TextFieldSelectTooltipMenu {...props}>
						<TextFieldSelectContainer>
							<TextFieldInnerContainer
								{...props}
								key="inner-container"
							>
								<TextFieldLeadingIcon
									key="leading-icon"
									leadingIconName={props.leadingIconName}
									style={props.style}
								/>
								<TextFieldExtraTextContainer
									key="extra-text-container"
									{...props}
								>
									<TextFieldInputContainer
										key="input-container"
										style={props.style}
									>
										<TextFieldInputLabel
											id={props.id}
											isRequired={!!props.isRequired}
											key="label"
											label={props.label}
											style={props.style}
										/>
										<TextFieldSelectInput
											{...props}
											key="input"
										/>
									</TextFieldInputContainer>
								</TextFieldExtraTextContainer>
								<TextFieldIconError
									key="icon-error"
									style={props.style}
								/>
								<TextFieldSelectIconChevron
									key="icon-chevron"
									style={props.style}
								/>
							</TextFieldInnerContainer>
							<TextFieldSelectSupportingText
								{...props}
								key="supporting-text"
							/>
						</TextFieldSelectContainer>
					</TextFieldSelectTooltipMenu>
				</TextFieldSelectTooltip>
			</TextFieldSelectValueProvider>
		</TextFieldProvider>
	);
}
