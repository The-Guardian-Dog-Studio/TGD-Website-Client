export interface Tab {
	title: string;
	content: string;
	link?: {
		url: string;
		text: string;
	};
}

export interface AboutProtocol {
	banner: {
		url: string;
		alt: string;
	};
	tabs: Tab[];
}
