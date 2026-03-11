import { Fragment, useCallback, useEffect, useState } from "react";

import {
	Orientation,
	PositionStrategyInternal,
	resolvePositionStrategyInternalAll,
	useColourSchemeContext,
	type ColourAlpha,
	type SizePx
} from "@react-library/common";
import {
	Modal,
	type ModalPositionStrategyInternal
} from "@react-library/components";

import {
	DemoContent,
	DemoContentChildren,
	DemoContentChildrenItem,
	DemoContentColourScheme,
	DemoContentJustify,
	DemoSection,
	type DemoContentChildrenItemProps
} from "@react-library-demo/shared";

export function ReactLibraryComponentsModalDemo() {

	// Modal colour
	const colourScheme = useColourSchemeContext();
	const [backdropColour, setBackdropColour] = useState<ColourAlpha | undefined>(
		() => colourScheme.backdrop.colour.toColourWithStyleOpacity(colourScheme.backdrop.opacity)
	);
	useEffect(
		() => setBackdropColour(colourScheme.backdrop.colour.toColourWithStyleOpacity(colourScheme.backdrop.opacity)),
		[colourScheme.backdrop.colour, colourScheme.backdrop.opacity]
	)

	// Position strategy
	const [modalPositionStrategies] = useState<Array<ModalPositionStrategyInternal>>(() => (
		Object.values(PositionStrategyInternal).map<ModalPositionStrategyInternal>(positionStrategyInternal => (
			resolvePositionStrategyInternalAll<SizePx, SizePx>(
				positionStrategyInternal,
				{
					marginHorizontal: 20,
					marginVertical: 20
				}
			)
		))
	));

	const [currentModalPositionStrategy, setCurrentModalPositionStrategy] = useState<ModalPositionStrategyInternal | undefined>(() => undefined);
	const resetCurrentModalPositionStrategy = useCallback(() => setCurrentModalPositionStrategy(undefined), []);

	// Modal content
	const [demoContentItems] = useState<Array<DemoContentChildrenItemProps>>(() => (
		modalPositionStrategies.map<DemoContentChildrenItemProps>(modalPositionStrategy => ({
			type: DemoContentChildrenItem.Button,
			action: () => setCurrentModalPositionStrategy(modalPositionStrategy),
			id: modalPositionStrategy.positionType,
			text: `Open modal in: ${modalPositionStrategy.positionType}`
		}))
	));

	return (
		<DemoSection title="Modal">
			<DemoContent
				childrenType={DemoContentChildren.Items}
				colourScheme={DemoContentColourScheme.Primary}
				height={500}
				includeRenderCounter={true}
				items={demoContentItems}
				justify={DemoContentJustify.Center}
				key="demo-content"
				orientation={Orientation.Vertical}
				width="100%"
			/>
			{
				currentModalPositionStrategy ?
					<Modal
						backdropColour={backdropColour}
						key="modal"
						onDismiss={resetCurrentModalPositionStrategy}
						positionStrategy={currentModalPositionStrategy}
					>
						<DemoContent
							childrenType={DemoContentChildren.Items}
							colourScheme={DemoContentColourScheme.Secondary}
							height={300}
							includeRenderCounter={true}
							items={[{
								type: DemoContentChildrenItem.Button,
								action: resetCurrentModalPositionStrategy,
								id: 1,
								text: `Close`
							}]}
							justify={DemoContentJustify.Center}
							orientation={Orientation.Vertical}
							width={300}
						/>
					</Modal> :
					<Fragment key="no-modal" />
			}
		</DemoSection>
	);
}
