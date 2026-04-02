import { Orientation } from "@react-library/common";
import {
	TooltipPlain,
	useTooltipPlainChildPropsContext
} from "@react-library/themed-components";

import {
	DemoContent,
	DemoContentAlign,
	DemoContentChildren,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoContentOverflow,
	DemoSection
} from "@react-library-demo/shared";

import { TOOLTIPS_DEMO_SIZE_PX, TOOLTIPS_DEMO_SUBJECT_SIZE_PX } from "../constants";

export function ReactLibraryThemedComponentsTooltipsPlainDemo() {
	return (
		<DemoSection title="Tooltips - Plain">
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
				<TooltipPlain content="Tooltip plain content">
					<ReactLibraryThemedComponentsTooltipsPlainDemoSubject />
				</TooltipPlain>
			</DemoContent>
		</DemoSection>
	);
}

function ReactLibraryThemedComponentsTooltipsPlainDemoSubject() {

	const tooltipPlainChildProps = useTooltipPlainChildPropsContext();

	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Any}
			colourScheme={DemoContentColourScheme.Secondary}
			height={TOOLTIPS_DEMO_SUBJECT_SIZE_PX}
			justify={DemoContentJustify.Center}
			onMouseEnter={tooltipPlainChildProps.onMouseEnter}
			onMouseLeave={tooltipPlainChildProps.onMouseLeave}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			ref={tooltipPlainChildProps.ref}
			width={TOOLTIPS_DEMO_SUBJECT_SIZE_PX}
		/>
	);
}
