import { useState } from "react";

import { Orientation } from "@react-library/common";
import {
	TooltipTextOverflow,
	type TooltipTextOverflowContent
} from "@react-library/themed-components";

import {
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

export function ReactLibraryThemedComponentsTooltipsTextOverflowDemo() {

	const [tooltipTextOverflowContent] = useState<TooltipTextOverflowContent>(() => "This is a very long piece of text");

	return (
		<DemoSection title="Tooltips - Text Overflow">
			<DemoItem label="No overflow">
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
					<DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Secondary}
						height="auto"
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						overflow={DemoContentOverflow.Visible}
						width="100%"
					>
						<TooltipTextOverflow
							content={tooltipTextOverflowContent}
							width="100%"
						/>
					</DemoContent>
				</DemoContent>
			</DemoItem>
			<DemoItem label="Overflow">
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
					<DemoContent
						align={DemoContentAlign.Center}
						childrenType={DemoContentChildren.Any}
						colourScheme={DemoContentColourScheme.Secondary}
						height={"auto"}
						justify={DemoContentJustify.Center}
						orientation={Orientation.Vertical}
						overflow={DemoContentOverflow.Visible}
						width={TOOLTIPS_DEMO_SUBJECT_SIZE_PX}
					>
						<TooltipTextOverflow
							content={tooltipTextOverflowContent}
							width="100%"
						/>
					</DemoContent>
				</DemoContent>
			</DemoItem>
		</DemoSection>
	);
}
