import { useState } from "react";

import { HexRgb } from "@react-library/common";
import { MaterialIconName, MaterialIconStyle, MaterialIconSvg } from "@react-library/material-icons";
import { Badge } from "@react-library/themed-components";

import { DemoItem, DemoSection } from "@react-library-demo/shared";

export function ReactLibraryThemedComponentsBadgeDemo() {

	const [badgeLarge] = useState<number>(123);
	const [badgeLargeMax] = useState<number>(1234);

	return (
		<DemoSection title="Badge">
			<DemoItem
				key="small"
				label="Small"
			>
				<Badge
					show={true}
				>
					<MaterialIconSvg
						colour={new HexRgb("00", "00", "00")}
						key="icon"
						name={MaterialIconName.Star}
						size={24}
						style={MaterialIconStyle.Default}
					/>
				</Badge>
			</DemoItem>
			<DemoItem
				key="large"
				label="Large"
			>
				<Badge
					label={badgeLarge}
					show={true}
				>
					<MaterialIconSvg
						colour={new HexRgb("00", "00", "00")}
						key="icon"
						name={MaterialIconName.Star}
						size={24}
						style={MaterialIconStyle.Default}
					/>
				</Badge>
			</DemoItem>
			<DemoItem
				key="large-max"
				label="Large - max"
			>
				<Badge
					label={badgeLargeMax}
					show={true}
				>
					<MaterialIconSvg
						colour={new HexRgb("00", "00", "00")}
						key="icon"
						name={MaterialIconName.Star}
						size={24}
						style={MaterialIconStyle.Default}
					/>
				</Badge>
			</DemoItem>
		</DemoSection>
	);
}
