import { useState, type ReactElement } from "react";

import { Orientation, type IValue } from "@react-library/common";
import {
	Tabs,
	TabsContent,
	TabsStyle
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

import {
	useTabsDemoItemsDefaultState,
	useTabsDemoItemsWithIconState
} from "./hooks";

export function ReactLibraryThemedComponentsTabsDemo() {

	const [value, setValue] = useState<number>(() => 1);
	const [itemLength] = useState<number>(() => 20);

	const itemsDefault = useTabsDemoItemsDefaultState(itemLength, setValue);
	const itemsWithIcon = useTabsDemoItemsWithIconState(itemLength, setValue);

	return (
		<>
			<DemoSection title="Tabs - default - primary">
				<DemoItem
					config={[
						{ key: "Content", value: TabsContent.Default }
					]}
					width="100%"
				>
					<Tabs
						content={TabsContent.Default}
						items={itemsDefault}
						style={TabsStyle.Primary}
						value={value}
					>
						<TabsDemoContent value={value} />
					</Tabs>
				</DemoItem>
				<DemoItem
					config={[
						{ key: "Content", value: TabsContent.WithIcon },
						{ key: "Orientation", value: Orientation.Horizontal }
					]}
					width="100%"
				>
					<Tabs
						content={TabsContent.WithIcon}
						itemOrientation={Orientation.Horizontal}
						items={itemsWithIcon}
						style={TabsStyle.Primary}
						value={value}
					>
						<TabsDemoContent value={value} />
					</Tabs>
				</DemoItem>
				<DemoItem
					config={[
						{ key: "Content", value: TabsContent.WithIcon },
						{ key: "Orientation", value: Orientation.Vertical }
					]}
					width="100%"
				>
					<Tabs
						content={TabsContent.WithIcon}
						itemOrientation={Orientation.Vertical}
						items={itemsWithIcon}
						style={TabsStyle.Primary}
						value={value}
					>
						<TabsDemoContent value={value} />
					</Tabs>
				</DemoItem>
			</DemoSection>
			<DemoSection title="Tabs - default - secondary">
				<DemoItem
					config={[
						{ key: "Content", value: TabsContent.Default }
					]}
					width="100%"
				>
					<Tabs
						content={TabsContent.Default}
						items={itemsDefault}
						style={TabsStyle.Secondary}
						value={value}
					>
						<TabsDemoContent value={value} />
					</Tabs>
				</DemoItem>
				<DemoItem
					config={[
						{ key: "Content", value: TabsContent.WithIcon }
					]}
					width="100%"
				>
					<Tabs
						content={TabsContent.WithIcon}
						items={itemsWithIcon}
						style={TabsStyle.Secondary}
						value={value}
					>
						<TabsDemoContent value={value} />
					</Tabs>
				</DemoItem>
			</DemoSection>
		</>
	);
}


function TabsDemoContent(props: IValue<number>): ReactElement {
	return (
		<DemoContent
			align={DemoContentAlign.Center}
			childrenType={DemoContentChildren.Text}
			colourScheme={DemoContentColourScheme.Primary}
			height={200}
			includeRenderCounter={true}
			justify={DemoContentJustify.Center}
			orientation={Orientation.Vertical}
			overflow={DemoContentOverflow.Auto}
			text={`Navigation Item - ${props.value}`}
			width="100%"
		/>
	);
}
