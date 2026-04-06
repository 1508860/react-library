import { useEffect, useState, type PropsWithChildren } from "react";

import { Orientation, type IStyle } from "@react-library/common";
import {
	TooltipRich,
	TooltipRichStyle,
	useTooltipRichChildPropsContext,
	useTooltipRichContentCallbackContext,
	type TooltipRichContentActions
} from "@react-library/themed-components";

import {
	DEMO_LOREM_IPSUM,
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoItem,
	DemoSection
} from "@react-library-demo/shared";

import { TOOLTIPS_DEMO_SIZE_PX, TOOLTIPS_DEMO_SUBJECT_SIZE_PX } from "../constants";

export function ReactLibraryThemedComponentsTooltipsRichDemo() {

	const [tooltipRichStyles] = useState<Array<TooltipRichStyle>>(() => Object.values(TooltipRichStyle));

	return (
		<DemoSection title="Tooltips - Rich">
			{tooltipRichStyles.map(tooltipRichStyle => (
				<DemoItem
					key={tooltipRichStyle}
					label={tooltipRichStyle}
				>
					<ReactLibraryThemedComponentsTooltipsRichDemoContainer>
						<TooltipRich>
							<ReactLibraryThemedComponentsTooltipsRichDemoSubject style={tooltipRichStyle} />
						</TooltipRich>
					</ReactLibraryThemedComponentsTooltipsRichDemoContainer>
				</DemoItem>
			))}
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTooltipsRichDemoContainer(props: PropsWithChildren) {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Primary}
			height={TOOLTIPS_DEMO_SIZE_PX}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			width={TOOLTIPS_DEMO_SIZE_PX}
		>
			{props.children}
		</DemoContent>
	);
}

function ReactLibraryThemedComponentsTooltipsRichDemoSubject(props: IStyle<TooltipRichStyle>) {

	const tooltipRichChildProps = useTooltipRichChildPropsContext();
	const tooltipRichContentCallback = useTooltipRichContentCallbackContext();

	const [actions] = useState<TooltipRichContentActions>(() => [
		{ action: tooltipRichChildProps.onDismiss, id: 1, text: "Action 1" },
		{ action: tooltipRichChildProps.onDismiss, id: 2, text: "Action 2" }
	]);
	const [headerText] = useState<string>(() => "Header Text");
	const [text] = useState<string>(() => DEMO_LOREM_IPSUM);

	// Resolve tooltip rich content
	useEffect(
		() => {
			switch (props.style) {
				case TooltipRichStyle.All:
					tooltipRichContentCallback({ style: props.style, actions: actions, headerText: headerText, text: text });
					break;
				case TooltipRichStyle.BodyAndAction:
					tooltipRichContentCallback({ style: props.style, actions: actions, text: text });
					break;
				case TooltipRichStyle.HeaderAndBody:
					tooltipRichContentCallback({ style: props.style, headerText: headerText, text: text });
					break;
			}
		},
		[props.style, tooltipRichContentCallback, actions, headerText, text]
	);

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Secondary}
			height={TOOLTIPS_DEMO_SUBJECT_SIZE_PX}
			justify={DemoContentJustify.Center}
			onClick={tooltipRichChildProps.onShow}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			ref={tooltipRichChildProps.ref}
			width={TOOLTIPS_DEMO_SUBJECT_SIZE_PX}
		/>
	);
}
