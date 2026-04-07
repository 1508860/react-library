import { Orientation } from "@react-library/common";

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

import { MODALS_DEMO_SIZE_PX } from "../constants";

export function ReactLibraryThemedComponentsModalsBasicDemo() {
	return (
		<DemoSection title="Modals - Basic">
			<DemoContent
				align={DemoContentAlign.Center}
				childrenType={DemoContentChildren.Items}
				colourScheme={DemoContentColourScheme.Primary}
				height={MODALS_DEMO_SIZE_PX}
				items={[
					{
						type: DemoContentChildrenItem.Button,
						action: () => { },
						id: 1,
						text: "Open basic modal"
					}
				]}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width={MODALS_DEMO_SIZE_PX}
			>
			</DemoContent>
		</DemoSection>
	);
}
