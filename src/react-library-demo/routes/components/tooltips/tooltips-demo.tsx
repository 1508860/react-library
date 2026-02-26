import { useState } from "react";

import {
	PositionStrategyExternal,
	useRenderCounterRef,
	type ITooltipPositionStrategy
} from "@react-library/common";
import {
	Tooltip,
	TooltipInteraction,
	type TooltipChildProps,
	type TooltipPositionStrategiesExternal,
	type TooltipPositionStrategyExternal
} from "@react-library/components";

import { DemoContent, DemoContentColourScheme, DemoItem, DemoSection } from "@react-library-demo/shared";

import { tooltipsDemoArrowContentStyle } from "./tooltips-demo-style.function";

export function ReactLibraryComponentsTooltipsDemo() {

	const [tooltipPositionStrategies] = useState<TooltipPositionStrategiesExternal>(() => [
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomCenter, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.BottomEnd, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomLeft, marginRight: 20, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.BottomRight, marginLeft: 20, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.BottomStart, marginTop: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.LeftCenter, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.LeftEnd, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.LeftStart, marginRight: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.RightCenter, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.RightEnd, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.RightStart, marginLeft: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopCenter, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentLeft, positionType: PositionStrategyExternal.TopEnd, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopLeft, marginRight: 20, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentFull, positionType: PositionStrategyExternal.TopRight, marginLeft: 20, marginBottom: 20 },
		{ arrowContent: TooltipDemoArrowContentRight, positionType: PositionStrategyExternal.TopStart, marginBottom: 20 }
	]);

	return (
		<>
			<DemoSection
				key="standard"
				title="Side Sheet - Standard"
			>
				{tooltipPositionStrategies.map(tooltipPositionStrategy => (
					<DemoItem
						key={tooltipPositionStrategy.positionType}
						height={300}
						label={tooltipPositionStrategy.positionType}
						width={300}
					>
						<TooltipDemoContainer tooltipPositionStrategy={tooltipPositionStrategy} />
					</DemoItem>
				))}
			</DemoSection>
		</>
	);
}

function TooltipDemoContainer(props: ITooltipPositionStrategy<TooltipPositionStrategyExternal>) {
	return (
		<Tooltip
			content={() => <DemoContent
				colourScheme={DemoContentColourScheme.Secondary}
				height={80}
				text={[{ id: 1, text: props.tooltipPositionStrategy.positionType }]}
				width={80}
			/>}
			overlayPortalMargin={20}
			positionStrategies={[props.tooltipPositionStrategy]}
			tooltipInteractionType={TooltipInteraction.Click}
		>
			{(tooltipChildProps) => <TooltipDemoSubject {...tooltipChildProps} />}
		</Tooltip>
	);
}

function TooltipDemoSubject(props: TooltipChildProps) {

	const renderCounter = useRenderCounterRef();

	return (
		<div {...props.childProps}>
			<DemoContent
				colourScheme={DemoContentColourScheme.Primary}
				height={100}
				text={[{ id: 1, text: "Content" }, { id: 2, text: `Render Count: ${renderCounter}` }]}
				width={100}
			/>
		</div>
	);
}

const TooltipDemoArrowContentFull = () => <div style={tooltipsDemoArrowContentStyle(true, true)} />;
const TooltipDemoArrowContentLeft = () => <div style={tooltipsDemoArrowContentStyle(false, true)} />;
const TooltipDemoArrowContentRight = () => <div style={tooltipsDemoArrowContentStyle(true, false)} />;
