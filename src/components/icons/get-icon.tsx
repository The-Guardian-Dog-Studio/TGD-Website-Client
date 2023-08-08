import { SVGProps } from "react";

import * as icons from "@/components/icons";

interface GetIconProps extends SVGProps<SVGSVGElement> {
	name: string;
}

type IconsKeys = Exclude<keyof typeof icons, "GetIcon">;

const upperCase = (word: string, position: number) => {
	return (
		word.slice(0, position) +
		word[position].toUpperCase() +
		word.slice(position + 1)
	);
};

const parseName = (name: string): string => {
	let copyName = name;
	const regex = /-/g;
	const index = regex.exec(copyName)?.index;

	copyName = upperCase(copyName, 0);
	if (typeof index === "number") copyName = upperCase(copyName, index + 1);
	return copyName.replace(regex, "");
};

const GetIcon = ({ name, ...props }: GetIconProps): JSX.Element => {
	const parsedName = parseName(name) as IconsKeys;
	const icon = icons[parsedName];
	return icon(props);
};

export default GetIcon;
