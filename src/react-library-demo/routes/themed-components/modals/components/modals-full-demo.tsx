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

export function ReactLibraryThemedComponentsModalsFullDemo() {
	return (
		<DemoSection title="Modals - Full">
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
						text: "Open full modal"
					}
				]}
				justify={DemoContentJustify.Center}
				orientation={Orientation.Vertical}
				overflow={DemoContentOverflow.Auto}
				width={MODALS_DEMO_SIZE_PX}
			/>
		</DemoSection>
	);
}
