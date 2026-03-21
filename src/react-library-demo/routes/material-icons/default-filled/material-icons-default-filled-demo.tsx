import { useState } from "react";

import { HexRgb, type Colour } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryMaterialIconsDefaultFilledDemo() {

	const [iconNames] = useState<Array<MaterialIconName>>(() => Object.values(MaterialIconName));
	const [colour] = useState<Colour>(() => new HexRgb("00", "00", "00"));

	return (
		<DemoSection title="Material Icons - Style - Default Filled">
			{iconNames.map(iconName => (
				<DemoItem
					key={`icon-svg-${iconName}`}
					label={iconName}
				>
					<MaterialIconSvg
						colour={colour}
						name={iconName}
						size={100}
						style={MaterialIconStyle.DefaultFilled}
					/>
				</DemoItem>
			))}
		</DemoSection>
	);
}
