const baseURL = import.meta.env.BASE_URL;

export const removeDoubleSlashes = (
	href?: string,
	noPrefix?: boolean,
): string => {
	const prefix = noPrefix ? "" : baseURL;
	const url = `${prefix}${href}`;
	const reg = new RegExp(`${baseURL}/`, "g");
	return url.replace(reg, prefix);
};
